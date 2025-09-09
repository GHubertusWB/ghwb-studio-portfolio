import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false
  },
  // Vercel optimiert automatisch für Deployment - v2
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
    // Turbopack für lokale Entwicklung, aber nicht für Vercel Production
    turbo: undefined
  },
  eslint: {
    // Komplett ignorieren für Vercel Build - SEHR AGGRESSIV
    ignoreDuringBuilds: true,
    dirs: []
  },
  typescript: {
    // Ignoriere TypeScript-Fehler während des Builds für Vercel
    ignoreBuildErrors: false,
  },
  // Fix für multiple lockfiles Warning
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
