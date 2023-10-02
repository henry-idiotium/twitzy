import { createThemeCSSVariables } from './helpers';

export const [globalStyles, tailwindConfig] = createThemeCSSVariables({
  colors: {
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
  },

  borderRadius: {
    radius: '0.5rem',
  },
});
