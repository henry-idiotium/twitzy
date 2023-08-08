declare global {
  type GenericObject<Type = unknown> = object & Record<string | number, Type>;

  type Mutable<Type> = { -readonly [Key in keyof Type]-?: Type[Key] };

  type Nullable<Type> = Type | undefined | null;
}

export {};
