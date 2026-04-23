/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/portfolio",
  },
};

module.exports = nextConfig;
