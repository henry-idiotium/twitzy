/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  ({ addUtilities, matchUtilities, theme, e }) => {
    // square
    addUtilities(
      Object.entries(theme('width')).map(([key, value]) => {
        return {
          [`.${e(`wh-${key}`)}`]:
            key === 'screen'
              ? { width: '100vw', height: '100vh' }
              : { width: `${value}`, height: `${value}` },
        };
      }),
    );

    matchUtilities({ wh: (value) => ({ width: value, height: value }) }, { values: theme('wh') });

    // overflow
    addUtilities({
      '.overflow-x-overlay': { 'overflow-x': 'overlay' },
      '.overflow-y-overlay': { 'overflow-y': 'overlay' },
      '.overflow-overlay': {
        'overflow-x': 'overlay',
        'overflow-y': 'overlay',
      },
    });
  },
  {
    variants: { wh: ['responsive', 'hover'] },
  },
);
