import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'dfs.no',
      },
      {
        protocol: 'https',
        hostname: 's3-mittlag-prod.innocode.dev',
      }
    ]
  },
  experimental: {
    serverComponentsExternalPackages: ['puppeteer-core', '@sparticuz/chromium']
  }
};

export default nextConfig;
