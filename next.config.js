/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export", // REQUIRED for GitHub Pages
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
  images: {
    unoptimized: true,
  },
  env: {
    // Hardcoding this for now to ensure it NEVER returns undefined
    NEXT_PUBLIC_BASE_PATH: "/portfolio",
  },
};

module.exports = nextConfig;
