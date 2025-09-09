#!/bin/bash

# GHWB Studio Portfolio - Git Hook Deployment Script
# Dieses Script wird automatisch ausgeführt, wenn du auf den Server pushst

echo "🚀 GHWB Studio Portfolio - Automatisches Deployment gestartet..."
echo "=================================================="

# Konfiguration (DIESE WERTE ANPASSEN!)
REPO_DIR="/var/www/git/ghwb-portfolio.git"
WORK_DIR="/var/www/ghwb-portfolio"
WEB_DIR="/var/www/html"
NODE_VERSION="20"

# Farben für Output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# 1. Checkout des neuesten Codes
log_info "Checking out latest code..."
cd $WORK_DIR
git --git-dir=$REPO_DIR --work-tree=$WORK_DIR checkout -f main

# 2. Node.js Version prüfen
log_info "Checking Node.js version..."
node --version

# 3. Dependencies installieren
log_info "Installing dependencies..."
npm ci --production=false

# 4. Build erstellen
log_info "Building application..."
npm run build

# 5. Build erfolgreich?
if [ -d "out" ]; then
    log_info "Build successful! Deploying to web directory..."
    
    # Backup der aktuellen Version
    if [ -d "$WEB_DIR.backup" ]; then
        rm -rf "$WEB_DIR.backup"
    fi
    
    if [ -d "$WEB_DIR" ]; then
        mv "$WEB_DIR" "$WEB_DIR.backup"
        log_info "Created backup of current version"
    fi
    
    # Neue Version deployen
    mv out "$WEB_DIR"
    
    # Berechtigungen setzen
    chown -R www-data:www-data "$WEB_DIR"
    chmod -R 755 "$WEB_DIR"
    
    log_info "✅ Deployment erfolgreich!"
    log_info "🌐 Website ist live: https://yourdomain.com"
    
    # Optional: Cache leeren (falls Cloudflare o.ä. verwendet wird)
    # curl -X POST "https://api.cloudflare.com/client/v4/zones/YOUR_ZONE_ID/purge_cache" \
    #      -H "Authorization: Bearer YOUR_API_TOKEN" \
    #      -H "Content-Type: application/json" \
    #      --data '{"purge_everything":true}'
    
else
    log_error "❌ Build fehlgeschlagen!"
    
    # Bei Fehler: Backup wiederherstellen
    if [ -d "$WEB_DIR.backup" ]; then
        mv "$WEB_DIR.backup" "$WEB_DIR"
        log_info "Backup wiederhergestellt"
    fi
    
    exit 1
fi

echo "=================================================="
echo "🎉 Deployment abgeschlossen!"
echo "⏰ $(date)"
echo "=================================================="
