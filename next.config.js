const withTwin = require('./with-twin');

/** @type {import('next').NextConfig} */
module.exports = withTwin({
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  compiler: {
    // styledComponents: true,
  },
  env: {
    DEV: process.env.NODE_ENV === 'development',
    PROD: process.env.NODE_ENV === 'production',
    TEST: process.env.NODE_ENV === 'test',
  },
});
