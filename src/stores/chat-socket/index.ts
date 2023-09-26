import { z } from 'zod';

import { ZodUtils } from '@/utils';

/** Redux store chat socket entity. */
export type ChatSocketEntity = z.infer<typeof chatSocketEntityZod>;
export const chatSocketEntityZod = z.object({
  name: z.string(),
  participants: z.string().array(),
  messageSeenLog: z.record(z.string()),

  isGroup: z.boolean(),
  activeUserIds: z.array(z.number()),

  meta: z.object({
    message: z.object({
      errors: z.record(z.object({ reason: z.string().nullable().optional() })),

      prevFetch: z.object({
        /** take amount */
        count: z.number(),
        /** take position */
        nthFromEnd: z.number(),
        /** result count */
        size: z.number(),
      }),
    }),
  }),
});

export const initialChatSocketEntity = ZodUtils.getDefault(chatSocketEntityZod);
