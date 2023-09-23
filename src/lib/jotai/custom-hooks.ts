'use client';

import { selectAtom } from 'jotai/utils';
import { Atom, atom, useAtomValue } from 'jotai';

/** NOTE: extract from {@link selectAtom} doc file. */
type SelectAtomFnArgs<State, Slice> = [
  anAtom: Atom<State>,
  selector: (v: Awaited<State>, prevSlice?: Slice) => Slice,
  equalityFn?: (a: Slice, b: Slice) => boolean,
];

export function useSelectAtom<State, Slice>(...args: SelectAtomFnArgs<State, Slice>) {
  return useAtomValue(selectAtom(...args));
}

export function atomWithLocalStorage<T, Value extends Exclude<T, AnyFn>>(
  key: string,
  initialValue?: Value,
) {
  const getInitialValue = () => {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as Value) : initialValue;
  };

  const baseAtom = atom(getInitialValue());
  const derivedAtom = atom<
    Value | undefined,
    [update: Value | undefined | ((v?: Value) => Value | undefined)],
    void
  >(
    (get) => get(baseAtom),
    (get, set, update) => {
      const nextValue =
        typeof update === 'function'
          ? (update as (v?: Value) => Value | undefined)(get(baseAtom))
          : (update as Value);

      /*NOTE:remove*/ console.log('[LOG (CF6F96)] \n', { nextValue, original: get(baseAtom) });

      set(baseAtom, nextValue);
      localStorage.setItem(key, JSON.stringify(nextValue));
    },
  );

  return derivedAtom;
}
