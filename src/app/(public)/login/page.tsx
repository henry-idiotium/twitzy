'use client';

import { LoginForm, loginFormSchema } from './(types)';

import tw from 'twin.macro';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import Link from 'next/link';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { zodResolver } from '@hookform/resolvers/zod';

import { Database } from '@/types';
import { useFrom } from '@/hooks';
import { Button, Input } from '@/components/ui';

const Container = tw.div`wh-full`;
const Wrapper = tw.div`max-w-[400px]`;
const LabelWrapper = tw.div`pb-2`;

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
    <Container>
      <Wrapper>
        <form method="post" tw="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <LabelWrapper>
              <label htmlFor="email" tw="mr-3">
                Email
              </label>
              {errors.email && <p>{errors.email.message}</p>}
            </LabelWrapper>

            <Input placeholder="Email" id="email" type="email" {...register('email')} />
          </div>

          <div>
            <LabelWrapper>
              <label htmlFor="password" tw="mr-3">
                Password
              </label>
              {errors.password && <p>{errors.password.message}</p>}
            </LabelWrapper>

            <Input id="password" placeholder="Password" type="password" {...register('password')} />
          </div>

          <Link href={`/register?from=${from}`} tw="underline">
            Create an account
          </Link>

          <Button type="submit" variant="secondary" tw="mt-5">
            Sign in
          </Button>
        </form>
      </Wrapper>
    </Container>
  );
}
