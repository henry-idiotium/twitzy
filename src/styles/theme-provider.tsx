'use client';
import './global.scss';
import './reset.css';

import { globalStyles } from './variables';

import { useCookie, useEffectOnce, useMedia } from 'react-use';

import { raise } from '@/utils/raise';
import { appStore, isDarkAtom } from '@/stores';

const TARGET_ELEMENT = process.env.NEXT_PUBLIC_THEME_TARGET_ELEMENT;
const COOKIE_KEY = process.env.NEXT_PUBLIC_THEME_COOKIE_KEY;
const ATTR_KEY = process.env.NEXT_PUBLIC_THEME_ATTR_KEY;

export function ThemeProvider({ children }: React.PropsWithChildren) {
  const [storageDark, setStorageDark] = useCookie(COOKIE_KEY);
  const isPreferDark = useMedia('(prefers-color-scheme: dark)', false);

  const setTheme = (value?: boolean) => {
    const targetEl = document.querySelector(TARGET_ELEMENT) || raise('Not found target!');

    targetEl.setAttribute(ATTR_KEY, value ? 'dark' : 'light');
    appStore.set(isDarkAtom, !!value);
    setStorageDark(String(!!value));
  };

  useEffectOnce(() => {
    // Create global style sheet
    const globalSheet = new CSSStyleSheet();
    globalSheet.replaceSync(
      JSON.stringify({
        [TARGET_ELEMENT]: {
          ...globalStyles.root,
          [`${ATTR_KEY}='dark'`]: {
            ...globalStyles.dark,
          },
        },
      }),
    );
    document.adoptedStyleSheets = [globalSheet];

    // Init document's theme value & setup theme listener
    setTheme(storageDark !== null ? !!JSON.parse(storageDark) : isPreferDark);
    const unsub = appStore.sub(isDarkAtom, () => {
      const newValue = appStore.get(isDarkAtom);
      setTheme(newValue);
    });

    return () => unsub();
  });

  return children;
}
