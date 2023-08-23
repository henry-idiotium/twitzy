import { httpRaise } from '..';
import { ApiWrapperFunc, AuthApiWrapperFunc } from './types';

import { cookies } from 'next/headers';
import { ApiError } from 'next/dist/server/api-utils';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { HttpError, Status } from '@reflet/http';

import { Database } from '@/types';

const FALLBACK_MSG = 'Something went wrong!';

/**
 * API wrapper that handle exception.
 * @remark This wrapper doesn't validate auth.
 *
 * @example
 * const GET = api(async (req, { id }: { id: string }) => {
 *   const user = (await prisma.user.findFirst({ where: { id } })) ?? httpRaise('BadRequest');
 *   return new Response(users);
 * });
 */
export const api: ApiWrapperFunc = (...[callback]) => {
  return async (...args) => {
    try {
      return await callback(...args);
    } catch (error) {
      if (!(error instanceof Error)) {
        console.error('👺 API Wrapper Exception', error);
        return new Response();
      }

      if (process.env.DEV) console.error('⚠️ [API Wrapper Exception] ~~~~~~~\n', error);

      const message = error.message ?? FALLBACK_MSG;
      const status =
        // prettier-ignore
        error instanceof ApiError ? error.statusCode :
        error instanceof HttpError ? Number(error.status) :
        Status.BadRequest;

      return new Response(message, { status });
    }
  };
};

/**
 * API wrapper that handle **authenticate validation** and **exception**.
 * @remark The callback is provided with extra param of **Supabase (not admin)**.
 *
 * @example
 * const GET = authApi(async (req, body, supabase) => {
 *    const users = await supabase.auth.getUser(body.user_id) ?? httpRaise('BadRequest');
 *    return new Response(users)
 * })
 */
//todo: test
export const authApi: AuthApiWrapperFunc = (...[callback]) => {
  return api(async (req, body) => {
    const supabase = createRouteHandlerClient<Database>({ cookies });
    // (await supabase.auth.getSession()).data.session ?? httpRaise('Unauthorized');

    const {
      data: { session },
    } = await supabase.auth.getSession();
    /*NOTE:remove*/ console.debug('[DEBUG (CD2D87)] 📦\n', session);
    if (!session) httpRaise('Unauthorized');

    return await callback(req, body, supabase);
  });
};
