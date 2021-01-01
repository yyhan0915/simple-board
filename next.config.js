/* eslint-disable @typescript-eslint/no-var-requires */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});
const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = { en: 'en', de: 'de' };

module.exports = withBundleAnalyzer({
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    distDir: 'build',
    images: {
        domains: ['assets.vercel.com', '127.0.01:3000'],
    },
    publicRuntimeConfig: {
        localeSubpaths,
    },
    reactStrictMode: true,
});
