/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from 'zod';

/** Get expected default object value from zod `schema`. */
export function getDefault<T extends z.AnyZodObject | z.ZodEffects<any>>(schema: T): z.infer<T>;
