const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'tripmingles3.s3.ap-northeast-2.amazonaws.com',
      'maps.googleapis.com',
    ], // 허용할 도메인 추가
  },
  async redirects() {
    return [
      {
        source: '/mypage',
        destination: '/mypage/info', // mypage로 접속할 경우 -> mypage/info로 리다이렉트
        permanent: true, // (true: 영구)
      },
      {
        source: '/write',
        destination: '/write/board',
        permanent: true,
      },
    ];
  },
  eslint: { ignoreDuringBuilds: true },
};

module.exports = withVanillaExtract(nextConfig);
