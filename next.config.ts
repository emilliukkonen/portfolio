/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
  // optionally set base path if deploying to github pages repo (usually username.github.io/repo)
  // basePath: '/your-repo-name',
};

module.exports = nextConfig;

module.exports = {
  output: 'export',
  images: {
    unoptimized: true, // disables Next.js Image Optimization for static export
  },
};
