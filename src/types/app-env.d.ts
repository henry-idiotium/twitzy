export {};

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

  DARK_MODE_COOKIE_KEY: string;
  NEXT_PUBLIC_DARK_MODE_COOKIE_KEY: string;
  THEME_TARGET_ELEMENT: string;
  NEXT_PUBLIC_THEME_TARGET_ELEMENT: string;
  THEME_ATTR_KEY: string;
  NEXT_PUBLIC_THEME_ATTR_KEY: string;

  SUPABASE_SERVICE_ROLE_KEY: string;
  NEXT_PUBLIC_SUPABASE_URL: string;

  DEV: boolean;
  PROD: boolean;
  TEST: boolean;
};
