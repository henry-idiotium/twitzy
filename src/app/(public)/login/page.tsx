'use client';

import { LoginForm, loginFormSchema } from './(types)';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import Link from 'next/link';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { zodResolver } from '@hookform/resolvers/zod';

import { Database } from '@/types';
import { useFrom } from '@/hooks';

export default function SignIn() {
  const [from, goToFrom] = useFrom();

  const supabase = createClientComponentClient<Database>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ resolver: zodResolver(loginFormSchema) });

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') goToFrom();
    });

    return () => subscription.unsubscribe();
  }, []);

  const onSubmit: SubmitHandler<LoginForm> = async (data) => {
    const { error } = await supabase.auth.signInWithPassword(data);
    if (error) console.error(error);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
      <Link href={`/register?from=${from}`}>Create an account</Link>

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

        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}
