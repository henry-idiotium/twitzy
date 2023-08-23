import { z } from 'zod';
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

import { ZodUtils, api, httpRaise } from '@/utils';
import { Database } from '@/types';
import { prisma } from '@/lib';

const schema = {
  post: z.object({
    id: z.string().uuid(),
    name: z.string(),
    alias: z.string(),
  }),
};

//todo: test
export const POST = api(async (req) => {
  const data = ZodUtils.lp(schema.post, await req.json()) ?? httpRaise('BadRequest');

  const supabaseAdmin = createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
  );
  const { error } = await supabaseAdmin.auth.admin.getUserById(data.id);
  if (error) httpRaise('NotFound', 'User not found!');

  const newProfile = await prisma.profile.create({ data });

  return NextResponse.json(newProfile);
});
