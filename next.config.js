/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');

module.exports = withPlugins([
  [withBundleAnalyzer({})],
  withSass,
  withImages,
  {
    trailingSlash: true,

    reactStrictMode: true,

    typescript: {
      ignoreBuildErrors: true,
    },
  },
]);
