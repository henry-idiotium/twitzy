import { z } from 'zod';

/**
 * @template {z.AnyZodObject | z.ZodEffects<any>} T
 * @param {T} schema
 * @returns {z.infer<T>}
 */
export function getDefault(schema) {
  // is it a ZodEffect?
  if (schema instanceof z.ZodEffects) {
    // is it a recursive ZodEffect?
    if (schema.innerType() instanceof z.ZodEffects) return getDefault(schema.innerType());

    // return schema inner shape as a fresh zodObject
    return getDefault(z.ZodObject.create(schema.innerType().shape));
  }

  return Object.fromEntries(
    Object.entries(schema.shape).map(([key, value]) => [key, getDefaultValue(value)]),
  );
}

export default getDefault;

/**
 * @param {z.ZodType<any, { innerType?: any }, nay>} schema
 * @returns {unknown}
 *
 * @remarks
 *    The first IF logic keep the provided default value from the schema,
 *    but also NOT loosing the optional rule.
 *    The original logic of zod is that if the default() is place after optional(), then the type
 *    would identify itself as being NOT OPTIONAL.
 * @example
 *    const schema = z.number().default(100).optional();
 *    type Schema = z.infer<typeof schema>; //=> number | undefined
 *    const value = getDefaultValue(schema); //=> 100
 * @disclaimer
 *    ZodNullable not work the same way.
 */
function getDefaultValue(schema) {
  if (schema instanceof z.ZodOptional) {
    const innerSchema = schema.unwrap();
    return innerSchema instanceof z.ZodDefault ? innerSchema._def.defaultValue() : undefined;
  }

  if (schema instanceof z.ZodNullable) return null;
  if (schema instanceof z.ZodDefault) return schema._def.defaultValue();

  if (schema instanceof z.ZodRecord) return {};
  if (schema instanceof z.ZodArray) return [];
  if (schema instanceof z.ZodString) return '';
  if (schema instanceof z.ZodNumber) return 0;
  if (schema instanceof z.ZodBoolean) return false;
  if (schema instanceof z.ZodDate) return new Date();
  if (schema instanceof z.ZodFunction) return () => undefined;

  // return an content of object recursively
  if (schema instanceof z.ZodObject) return getDefault(schema);

  if (!('innerType' in schema._def)) return undefined;

  return getDefaultValue(schema._def.innerType);
}
