import { Preview } from '@storybook/react';
import { ThemeProvider, THEME_PROVIDER_KEY } from './src/decorators/theme-provider';

const preview: Preview = {
  decorators: [ThemeProvider],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#222425' },
        { name: 'light', value: '#fff' },
      ],
    },
  },
  globalTypes: {
    [THEME_PROVIDER_KEY]: {
      description: 'Toggle dark mode',
      defaultValue: 'dark',
      toolbar: {
        title: ' Component theme mode',
        icon: 'paintbrush',
        dynamicTitle: true,
        showName: true,
        items: [
          { value: 'dark', left: '⚫️', title: 'Dark' },
          { value: 'light', left: '⚪️', title: 'Light' },
        ],
      },
    },
  },
};

export default preview;
