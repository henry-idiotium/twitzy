export function isFunction<Func = unknown>(f: unknown): f is Func & AnyFunction {
  return (
    typeof f === 'function' &&
    (!f.prototype || !!Object.getOwnPropertyDescriptor(f, 'prototype')?.writable)
  );
}
export default isFunction;
