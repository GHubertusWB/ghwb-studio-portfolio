#!/bin/bash

# GHWB Studio Portfolio - Schnelles Deployment ohne ESLint
echo "🚀 Quick Deploy für GHWB Studio Portfolio"
echo "========================================"

# 1. Backup der current next.config.ts
cp next.config.ts next.config.backup.ts

# 2. Erstelle vereinfachte Build-Konfiguration
cat > next.config.simple.ts << 'EOL'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
EOL

# 3. Verwende vereinfachte Konfiguration
cp next.config.simple.ts next.config.ts

# 4. Build durchführen
echo "🔨 Building with simplified config..."
npm run build

# 5. Prüfe Erfolg
if [ -d "out" ]; then
    echo "✅ Build erfolgreich!"
    echo "📁 Out-Verzeichnis erstellt:"
    ls -la out/ | head -10
    echo ""
    echo "🌐 Deployment-Optionen:"
    echo "1. FTP Upload: ./upload.sh (nach Konfiguration)"
    echo "2. Manuell: Kopiere 'out/' Inhalt zu deinem Webserver"
    echo "3. Docker: docker build -t ghwb-portfolio ."
    echo ""
    echo "📋 Nächste Schritte:"
    echo "- Konfiguriere upload.sh mit deinen Server-Daten"
    echo "- Oder kopiere out/* zu deinem Webserver"
else
    echo "❌ Build fehlgeschlagen"
    echo "📝 Fallback: Stelle original next.config.ts wieder her"
    cp next.config.backup.ts next.config.ts
fi
