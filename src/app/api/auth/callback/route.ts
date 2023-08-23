import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';

import { api } from '@/utils';

import type { Database } from '@/types';

export const dynamic = 'force-dynamic';

export const GET = api(async (request) => {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  /*NOTE:remove*/ console.log('[LOG (653665)] \n', code);

  if (code) {
    const supabase = createRouteHandlerClient<Database>({ cookies });
    await supabase.auth.exchangeCodeForSession(code);
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(requestUrl.origin + '/home');
});
