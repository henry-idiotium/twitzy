import { z } from 'zod';

/**
 * Safely parse zod schema with data. If the provided data is invalid, it will return null;
 * otherwise, return correct data.
 */
export function looselyParse<Obj>(schema: z.ZodSchema<Obj>, data?: unknown) {
  const result = schema.safeParse(data);
  return result.success ? result.data : undefined;
}

/** Alias for {@link looselyParse} */
export const lp = looselyParse;
