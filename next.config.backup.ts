import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Für statischen Export
  distDir: 'out',
  // ESLint während Build ignorieren für Deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  // TypeScript Fehler während Build ignorieren für Deployment
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
