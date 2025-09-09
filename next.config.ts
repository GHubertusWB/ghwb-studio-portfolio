import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false
  },
  // Vercel optimiert automatisch für Deployment
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react']
  },
  eslint: {
    // Allow production build on Vercel with ESLint warnings
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
