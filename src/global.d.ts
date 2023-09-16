/* eslint-disable @typescript-eslint/no-explicit-any */
import '@total-typescript/ts-reset';

declare global {
  /** Generic Object/Record/Dictionary */
  type GenDict<Type = unknown> = object & Record<string | number, Type>;

  type Mutable<Type> = { -readonly [Key in keyof Type]-?: Type[Key] };

  type Nullable<Type> = Type | undefined | null;

  type AnyFunction = (...args: any) => any;

  namespace NodeJS {
    interface ProcessEnv extends AppEnv {}
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
  }
}

export {};
