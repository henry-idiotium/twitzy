import { tailwindConfig } from './src/styles/variables';
import { ruleExtends } from './src/lib/tailwind';

import { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [ruleExtends],
  theme: {
    extend: {
      ...tailwindConfig,
      screens: {
        '2xl': '1536px',
        xl: '1280px',
        lg: '1024px',
        md: '768px',
        sm: '640px',
        xs: '320px',
        '2xl-max': { max: '1535px' },
        'xl-max': { max: '1279px' },
        'lg-max': { max: '1023px' },
        'md-max': { max: '767px' },
        'sm-max': { max: '639px' },
        'xs-max': { max: '319px' },
      },
    },
  },
} satisfies Config;
