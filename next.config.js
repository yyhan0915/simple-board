/* eslint-disable @typescript-eslint/no-var-requires */
const nextBuildId = require('next-build-id');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
    distDir: 'build',
    images: {
        domains: ['assets.vercel.com', '127.0.01:3000'],
    },
    env: {
        JASON_WEB_TOKEN_SECRET:
            '866b03f1f61a871e7eae3aca885594d52204378e08b8525ee95791c4fce471a7d5e6ff5a107bfaa9b7f81c618f917327c933664ab17e98030afa4b723db25e08',
    },
    reactStrictMode: true,
    generateBuildId: () => nextBuildId({ dir: __dirname }),
});
