const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['tripmingles3.s3.ap-northeast-2.amazonaws.com'], // 허용할 도메인 추가
  },
};

module.exports = withVanillaExtract(nextConfig);
