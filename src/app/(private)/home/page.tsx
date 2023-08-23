'use client';

import { useEffectOnce } from 'react-use';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function Home() {
  const { push } = useRouter();
  const supabase = createClientComponentClient();

  useEffectOnce(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_OUT') push('/');
    });

    return subscription.unsubscribe;
  });

  const signOut = async () => await supabase.auth.signOut();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div>home page</div>

      <button type="button" style={{ cursor: 'pointer', width: 150, height: 32 }} onClick={signOut}>
        logout
      </button>
    </div>
  );
}
