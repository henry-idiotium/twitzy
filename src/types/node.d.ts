declare global {
  namespace NodeJS {
    interface ProcessEnv extends AppEnv {}
  }
}

type AppEnv = {
  PORT: number;
  BASE_URL: string;

  APP_NAME: string;
  NEXT_PUBLIC_APP_NAME: string;

  SUPABASE_SERVICE_ROLE_KEY: string;

  NEXT_PUBLIC_SUPABASE_URL: string;

  DEV: boolean;
  PROD: boolean;
  TEST: boolean;
};
