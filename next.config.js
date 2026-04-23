/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: "/portfolio",
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.output.publicPath = "/portfolio/_next/";
    }
    return config;
  },
};

module.exports = nextConfig;
