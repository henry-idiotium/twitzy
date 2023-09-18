/* eslint-disable @typescript-eslint/no-explicit-any */
import '@total-typescript/ts-reset';

declare global {
  /** Generic Object/Record/Dictionary */
  type GenDict<Type = unknown> = object & Record<string | number, Type>;

  type Mutable<Type> = { -readonly [Key in keyof Type]-?: Type[Key] };

  type Nullable<Type> = Type | undefined | null;

  type AnyFunction = (...args: any) => any;
}
