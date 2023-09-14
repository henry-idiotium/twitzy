'use client';

import { theme } from './themes.css';

import { ThemeProvider as BaseThemeProvider } from 'styled-components';

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  return <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>;
};
