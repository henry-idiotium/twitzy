'use client';

import { useBoolean, useEffectOnce } from 'react-use';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Session } from '@supabase/supabase-js';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export function useGetClientSession() {
  const pathname = usePathname();

  const [loading, toggleLoading] = useBoolean(true);
  const [session, setSession] = useState<Session | null>(null);

  const supabase = createClientComponentClient();

  useEffect(() => {
    toggleLoading(true);
    supabase.auth
      .getSession()
      .then(({ data: { session } }) => setSession(session))
      .finally(() => toggleLoading(false));
  }, [pathname]);

  useEffectOnce(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  });

  return { session, loading };
}

export default useGetClientSession;
