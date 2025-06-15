/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
  publicRuntimeConfig: {
    basePath: "/portfolio",
  },
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Important for static export
  },
};

module.exports = nextConfig;