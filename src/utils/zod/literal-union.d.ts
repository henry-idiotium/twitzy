import { z } from 'zod';

/** Syntactic sugar wrapper for the default zod union. */
export function literalUnion<const Literals extends readonly string[]>(
  ...literals: Literals
): z.ZodUnion<ExtractZodLiteral<Literals>>;

type ExtractZodLiteral<
  RawLiterals,
  ZodLiterals = Mutable<{ [Index in keyof RawLiterals]: z.ZodLiteral<RawLiterals[Index]> }>,
> = ZodLiterals extends z.ZodUnionOptions ? ZodLiterals : never;
