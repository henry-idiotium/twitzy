/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  compiler: {
    styledComponents: true,
  },
  env: {
    DEV: process.env.NODE_ENV === 'development',
    PROD: process.env.NODE_ENV === 'production',
    TEST: process.env.NODE_ENV === 'test',
  },
};
