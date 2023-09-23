'use client';

import { useCookie, useEffectOnce, useMedia } from 'react-use';

import { raise } from '@/utils/raise';
import { appStore, isDarkAtom } from '@/stores';

const targetElement = process.env.NEXT_PUBLIC_THEME_TARGET_ELEMENT;
const darkModeKey = process.env.NEXT_PUBLIC_DARK_MODE_COOKIE_KEY;
const attrKey = process.env.NEXT_PUBLIC_THEME_ATTR_KEY;

export function ThemeProvider({ children }: React.PropsWithChildren) {
  const [storageDark, setStorageDark] = useCookie(darkModeKey);
  const isPreferDark = useMedia('(prefers-color-scheme: dark)', false);

  const setModeToDoc = (value?: boolean) => {
    const targetEl = document.querySelector(targetElement) || raise('Not found target!');

    targetEl.setAttribute(attrKey, value ? 'dark' : 'light');
    appStore.set(isDarkAtom, !!value);
    setStorageDark(String(!!value));
  };

  useEffectOnce(() => {
    setModeToDoc(storageDark !== null ? !!JSON.parse(storageDark) : isPreferDark);

    const unsub = appStore.sub(isDarkAtom, () => {
      const newValue = appStore.get(isDarkAtom);
      setModeToDoc(newValue);
    });

    return () => unsub();
  });

  return children;
}
