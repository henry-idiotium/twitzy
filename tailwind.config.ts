//NOTE: import directly, avoid import index namespace to avoid slow tailwind loading
import { colorTailwindConfig, radiusTailwindConfig } from './src/styles/variables';
import { ruleExtends } from './src/lib/tailwind';

import { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: colorTailwindConfig,
      borderRadius: radiusTailwindConfig,
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
  plugins: [ruleExtends],
};

export default config;
