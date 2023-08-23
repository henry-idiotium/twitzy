import { z } from 'zod';

export type LoginForm = z.infer<typeof loginFormSchema>;
export const loginFormSchema = z.object({
  email: z.string().email({ message: 'This email is invalid.' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' })
    .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{0,}$/, {
      message: 'At least one letter and one number',
    }),
});
