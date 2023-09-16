import { THEME_ATTR_NAME } from '@/styles';
import { Decorator } from '@storybook/react';

export const THEME_PROVIDER_KEY = 'dark-mode';

export const ThemeProvider: Decorator = (Story, context) => {
  const mode = String(context.globals[THEME_PROVIDER_KEY] || 'dark');
  document.documentElement.setAttribute(THEME_ATTR_NAME, mode);
  return <Story />;
};
