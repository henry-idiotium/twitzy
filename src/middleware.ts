import { NextRequest, NextResponse } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // extra headers
  res.headers.set('x-content-type-options', 'nosniff');
  res.headers.set('x-dns-prefetch-control', 'false');
  res.headers.set('x-download-options', 'noopen');
  res.headers.set('x-frame-options', 'SAMEORIGIN');

  // Check for session data, refetch if not found.
  const supabase = createMiddlewareClient({ req, res });
  await supabase.auth.getSession();

  return res;
}

export const config = {
  matcher: [
    /* Exclude non-business resources; match all request paths except for the ones starting with:
     * - api           (API routes)
     * - favicon.ico   (favicon file)
     * - _next/static  (static files)
     * - .[any]        (public files)
     */
    '/((?!api|favicon.ico|_next/static|.).*)',
  ],
};
