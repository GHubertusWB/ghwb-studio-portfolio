#!/bin/bash

# Simple Build Test für GHWB Studio Portfolio
echo "🔨 Testing build without API routes..."

# Prüfe ob out Verzeichnis existiert und lösche es
if [ -d "out" ]; then
    rm -rf out
    echo "✅ Removed old out directory"
fi

# Build ausführen
echo "📦 Running npm run build..."
npm run build

# Prüfe Erfolg
if [ -d "out" ]; then
    echo "✅ Build successful!"
    echo "📁 Contents of out directory:"
    ls -la out/ | head -10
    echo ""
    echo "🎉 Ready for deployment!"
else
    echo "❌ Build failed - no out directory created"
fi
