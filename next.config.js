/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", 
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/portfolio",
  },
};

module.exports = nextConfig;
