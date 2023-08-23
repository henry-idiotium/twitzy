import { loginFormSchema } from '../login/(types)';

import { z } from 'zod';

export type RegisterForm = z.infer<typeof registerFormSchema>;
export const registerFormSchema = loginFormSchema
  .extend({
    confirmPassword: loginFormSchema.shape.password,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirm_password'], // path of error
  });
