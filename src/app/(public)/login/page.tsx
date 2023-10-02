'use client';

import { LoginForm, loginFormSchema } from './(types)';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import Link from 'next/link';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { zodResolver } from '@hookform/resolvers/zod';

import { Database } from '@/types';
import { useFrom } from '@/hooks';
// import { Button, Input } from '@/components/ui';

export default function SignIn() {
  const [from, goToFrom] = useFrom();

  const supabase = createClientComponentClient<Database>();

  const {
    // register,
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
    <div className="wh-full">
      <div className="max-w-[400px]">
        <form method="post" className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="pb-2">
              <label htmlFor="email" className="mr-3">
                Email
              </label>
              {errors.email && <p>{errors.email.message}</p>}
            </div>

            {/* <Input placeholder="Email" id="email" type="email" {...register('email')} /> */}
          </div>

          <div>
            <div className="pb-2">
              <label htmlFor="password" className="mr-3">
                Password
              </label>
              {errors.password && <p>{errors.password.message}</p>}
            </div>

            {/* <Input id="password" placeholder="Password" type="password" {...register('password')} /> */}
          </div>

          <Link href={`/register?from=${from}`} className="underline">
            Create an account
          </Link>

          {/* <Button type="submit" variant="secondary" className="mt-5">
            Sign in
          </Button> */}
        </form>
      </div>
    </div>
  );
}
