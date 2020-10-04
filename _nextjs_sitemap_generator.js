/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-var-requires */

const sitemap = require('nextjs-sitemap-generator');

sitemap({
  alternateUrls: {
    pt: 'https://luminuszz.dev/pt',
  },
  baseUrl: 'https://luminuszz.dev',
  ignoredPaths: ['admin'],
  extraPaths: ['/extraPath'],
  pagesDirectory: `${__dirname}\\.next\\pages`,
  targetDirectory: 'static/',
  sitemapFilename: 'sitemap.xml',
  nextConfigPath: `${__dirname}\\next.config.js`,
  ignoredExtensions: ['png', 'jpg'],
});
