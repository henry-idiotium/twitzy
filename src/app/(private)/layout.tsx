'use client';

import Loading from './loading';

import { Fragment } from 'react';
import { redirect, usePathname } from 'next/navigation';

import { useGetClientSession } from '@/hooks';

export default function PrivateLayout({ children }: React.PropsWithChildren) {
  const currentPath = usePathname();

  const { session, loading } = useGetClientSession();

  if (loading) return <Loading />;
  if (!session) return redirect(`/login?from=${currentPath}`);

  return <Fragment>{children}</Fragment>;
}
