import { z } from 'zod';
import { createClient } from '@supabase/supabase-js';

import { ZodUtils, api, httpRaise } from '@/utils';
import { Database } from '@/types';

const schema = {
  post: z.object({ userId: z.string() }),
};

/**
 * @remark should only called in DEVELOPMENT
 */
export const POST = api(async (req: Request) => {
  !process.env.DEV && httpRaise('BadRequest');
  const { userId } = ZodUtils.lp(schema.post, await req.json()) ?? httpRaise('BadRequest');

  const supabaseAdmin = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
  );

  await supabaseAdmin.auth.admin.updateUserById(userId, { email_confirm: true });
});
