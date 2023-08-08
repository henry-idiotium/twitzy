/* eslint-disable @typescript-eslint/no-namespace */
import { z } from 'zod';

const extendedEnvVarsSchema = z.object({
  PORT: z.coerce.number(),
  BASE_URL: z.string(),
  APP_NAME: z.string(),
});

extendedEnvVarsSchema.parse(process.env); // validate

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof extendedEnvVarsSchema> {}
  }
}
