'use client';

import Loading from './loading';

import { useRouter } from 'next/navigation';

import { useGetClientSession } from '@/hooks';

export default function PublicLayout({ children }: React.PropsWithChildren) {
  const { push } = useRouter();
  const { session, loading } = useGetClientSession();

  if (loading) return <Loading />;
  if (session) return push('/home');

  return <>{children}</>;
}
