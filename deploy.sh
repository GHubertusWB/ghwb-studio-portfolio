#!/bin/bash

# GHWB Studio Portfolio - Deployment Script
# Erstellt einen statischen Build für Webserver-Deployment

echo "🚀 Starting deployment build for GHWB Studio Portfolio..."

# 1. Install dependencies
echo "📦 Installing dependencies..."
npm install

# 2. Build the application
echo "🔨 Building application..."
npm run build

# 3. Check if build was successful
if [ -d "out" ]; then
    echo "✅ Build successful! Static files are in the 'out' directory."
    echo ""
    echo "📁 Contents of 'out' directory:"
    ls -la out/
    echo ""
    echo "🌐 You can now upload the contents of the 'out' directory to your webserver."
    echo ""
    echo "📋 Next steps:"
    echo "1. Copy all files from 'out/' to your webserver's public directory"
    echo "2. Make sure your webserver serves index.html for directories"
    echo "3. Configure proper MIME types for .js, .css, and image files"
    echo ""
else
    echo "❌ Build failed! Please check the error messages above."
    exit 1
fi
