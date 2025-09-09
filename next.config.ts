import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false
  },
  // FINAL VERCEL FIX - ESLint komplett deaktiviert
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
