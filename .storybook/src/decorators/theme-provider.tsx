import { raise } from '@/utils';
import { Decorator } from '@storybook/react';

export const THEME_PROVIDER_KEY = 'dark-mode';
const THEME_ATTR_NAME =
  process.env.NEXT_PUBLIC_THEME_ATTR_KEY || raise('Theme attr key not found!');

export const ThemeProvider: Decorator = (Story, context) => {
  const mode = String(context.globals[THEME_PROVIDER_KEY] || 'dark');
  document.documentElement.setAttribute(THEME_ATTR_NAME, mode);
  return <Story />;
};
