/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
  trailingSlash: true,
  images: {
    unoptimized: true, // required for next/image to work with static export
  },
};

module.exports = nextConfig;