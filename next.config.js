/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');

module.exports = withImages(
  withSass({
    trailingSlash: true,

    reactStrictMode: true,

    typescript: {
      ignoreBuildErrors: true,
    },
  }),
);
