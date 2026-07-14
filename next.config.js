/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed output: "export" — enables full Next.js features on Vercel:
  // automatic Image Optimization (WebP/AVIF), SSR, API routes, edge caching
  poweredByHeader: false, // don't leak framework info in response headers
  compress: true,         // enable gzip compression for all responses
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // strip console.* in prod builds
  },
  images: {
    formats: ['image/avif', 'image/webp'], // serve AVIF first, fall back to WebP
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
};

module.exports = nextConfig;
