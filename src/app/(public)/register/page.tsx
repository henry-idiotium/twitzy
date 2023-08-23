'use client';

import { RegisterForm, registerFormSchema } from './(types)';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { zodResolver } from '@hookform/resolvers/zod';

import { Database } from '@/types';
import { wretch } from '@/lib';
import { useFrom } from '@/hooks';

export default function Register() {
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();
  const [from] = useFrom();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({ resolver: zodResolver(registerFormSchema) });

  const onSubmit: SubmitHandler<RegisterForm> = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: `${location.origin}/auth/callback` },
    });

    if (error) console.error(error);

    if (data.user) {
      if (process.env.DEV) {
        // note: auto confirm new user email
        wretch('users/email/confirm').post({ userId: data.user.id });
      }

      // todo: implement extra step to create profile
      // wretch('auth/profiles').post({ id: data.user.id });
    }

    router.push(`/login?from=${from}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
      <form method="post" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <label htmlFor="email" style={{ marginRight: 12 }}>
              Email
            </label>
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <input placeholder="Email" id="email" type="email" {...register('email')} />
        </div>

        <div>
          <div>
            <label htmlFor="password" style={{ marginRight: 12 }}>
              Password
            </label>
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <input id="password" placeholder="Password" type="password" {...register('password')} />
        </div>

        <div>
          <div>
            <label htmlFor="confirm_password" style={{ marginRight: 12 }}>
              Confirm Password
            </label>
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <input
            id="confirm_password"
            placeholder="Confirm Password"
            type="password"
            {...register('confirmPassword')}
          />
        </div>

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
