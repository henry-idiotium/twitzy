import { Pipe, S } from 'hotscript';
import { constantCase } from 'change-case';

const { rootCSSVars, darkCSSVars, styledComponentColors } = createCSSVars({
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

export const cssVariables = {
  root: rootCSSVars,
  dark: darkCSSVars,
};

export const THEME = {
  COLORS: styledComponentColors,
  SCREENS: {
    XXL: '(min-width: 1536px)',
    XL: '(min-width: 1280px)',
    LG: '(min-width: 1024px)',
    MD: '(min-width: 768px)',
    SM: '(min-width: 640px)',
    XS: '(min-width: 320px)',
    XXL_MAX: '(max-width: 1535px)',
    XL_MAX: '(max-width: 1279px)',
    LG_MAX: '(max-width: 1023px)',
    MD_MAX: '(max-width: 767px)',
    SM_MAX: '(max-width: 639px)',
    XS_MAX: '(max-width: 319px)',
  },
} as const;

// ------------------------
// -- helper
function createCSSVars<ColorSchema extends Record<string, [root: string, dark?: string]>>(
  schema: ColorSchema,
) {
  const colors: GenDict<string> = {};
  let rootCSSVars = '';
  let darkCSSVars = '';

  for (const [name, [root, dark]] of Object.entries(schema)) {
    const cssVar = `--${name}`;

    colors[constantCase(name)] = `var(${cssVar})`;
    rootCSSVars += `${cssVar}: ${root};`;

    if (dark) darkCSSVars += `${cssVar}: ${dark};`;
  }

  return {
    styledComponentColors: colors as StyledComponentColor<ColorSchema>,
    rootCSSVars,
    darkCSSVars,
  };
}

type StyledComponentColor<CS extends GenDict> = {
  [ColorName in keyof CS as Pipe<ColorName, [S.SnakeCase, S.Uppercase]>]: ColorName extends string
    ? `var(--${ColorName})`
    : ColorName;
};
