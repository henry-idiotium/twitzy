const withTwin = require('./with-twin');

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
    swcPlugins: [['@swc-jotai/react-refresh', {}]],
  },

  compiler: {
    styledComponents: {
      displayName: false,
      ssr: true,
    },
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },

  env: {
    DEV: process.env.NODE_ENV === 'development',
    PROD: process.env.NODE_ENV === 'production',
    TEST: process.env.NODE_ENV === 'test',
  },
};

module.exports = withTwin(config);
