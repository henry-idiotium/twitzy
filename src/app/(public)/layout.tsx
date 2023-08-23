'use client';

import Loading from './loading';

import { Fragment } from 'react';
import { useRouter } from 'next/navigation';

import { useGetClientSession } from '@/hooks';

export default function PublicLayout({ children }: React.PropsWithChildren) {
  const { push } = useRouter();
  const { session, loading } = useGetClientSession();

  if (loading) return <Loading />;
  if (session) return push('/home');

  return <Fragment>{children}</Fragment>;
}
