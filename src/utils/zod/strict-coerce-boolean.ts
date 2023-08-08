import { z } from 'zod';

export const strictCoerceBoolean = () => {
  return z
    .enum(['true', 'false'])
    .catch('false')
    .transform((value) => value === 'true');
};
