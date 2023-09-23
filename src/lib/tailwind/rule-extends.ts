import plugin from 'tailwindcss/plugin';

export const ruleExtends = plugin(
  ({ addUtilities, matchUtilities, theme, e }) => {
    // Square ratio width height
    const widthTheme = theme('width');
    if (typeof widthTheme == 'object') {
      addUtilities(
        Object.entries(widthTheme).map(([key, value]) => {
          return {
            [`.${e(`wh-${key}`)}`]:
              key === 'screen'
                ? { width: '100vw', height: '100vh' }
                : { width: `${value}`, height: `${value}` },
          };
        }),
      );
    }

    matchUtilities(
      { wh: (value: string) => ({ width: value, height: value }) },
      { values: theme('wh') },
    );

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

export default ruleExtends;
