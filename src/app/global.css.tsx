'use client';

import '@/utils/styles/reset.css';

import * as styled from 'styled-components';

const { style, theme } = createCSSVars({
  background: ['0 0% 100%', '0 0% 3.9%'],
  foreground: ['0 0% 3.9%', '0 0% 98%'],

  card: ['0 0% 100%', '0 0% 3.9%'],
  'card-foreground': ['0 0% 3.9%', '0 0% 3.9%'],

  popover: ['0 0% 100%', '0 0% 3.9%'],
  'popover-foreground': ['0 0% 3.9%', '0 0% 98%'],

  primary: ['0 0% 9%', '0 0% 98%'],
  'primary-foreground': ['0 0% 98%', '0 0% 9%'],

  secondary: ['0 0% 96.1%', '0 0% 14.9%'],
  'secondary-foreground': ['0 0% 9%', '0 0% 98%'],

  muted: ['0 0% 96.1%', '0 0% 14.9%'],
  'muted-foreground': ['0 0% 45.1%', '0 0% 63.9%'],

  accent: ['0 0% 96.1%', '0 0% 14.9%'],
  'accent-foreground': ['0 0% 9%', '0 0% 98%'],

  destructive: ['0 84.2% 60.2%', '0 62.8% 30.6%'],
  'destructive-foreground': ['0 0% 98%', '0 0% 98%'],

  border: ['0 0% 89.8%', '0 0% 14.9%'],
  input: ['0 0% 89.8%', '0 0% 14.9%'],
  ring: ['0 0% 3.9%', '0 0% 83.1%'],

  radius: ['0.5rem'],
});

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  return <styled.ThemeProvider theme={theme}>{children}</styled.ThemeProvider>;
};

export const GlobalStyle = styled.createGlobalStyle`
  ${style}
  * {
    border-color: hsl(var(--border));
  }
  body {
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
  }
`;

// ------------------------
// -- helper
function createCSSVars<T extends Record<string, [root: string, dark?: string]>>(schema: T) {
  const theme: GenDict<string> = {};
  let rootCSSVars = '';
  let darkCSSVars = '';
  for (const [name, [root, dark]] of Object.entries(schema)) {
    const cssVar = `--${name}`;
    theme[name] = `var(${cssVar})`;
    rootCSSVars += `${cssVar}: ${root};`;
    darkCSSVars += `${cssVar}: ${dark ?? root};`;
  }
  return {
    theme: theme as { [K in keyof T]: K extends string ? `var(${K})` : K },
    style: `
      :root { ${rootCSSVars} }
      .dark { ${darkCSSVars} }
    `,
  };
}
