#!/bin/bash

# GHWB Studio Portfolio - FTP Upload Script
# Konfiguriere die folgenden Variablen für deinen Server

# Server-Konfiguration (DIESE WERTE ANPASSEN!)
FTP_HOST="your-server.com"
FTP_USER="your-username"
FTP_PASS="your-password"
FTP_PATH="/public_html"  # Pfad zu deinem Web-Verzeichnis

echo "🚀 GHWB Studio Portfolio - FTP Deployment"
echo "=========================================="

# Prüfe ob 'out' Verzeichnis existiert
if [ ! -d "out" ]; then
    echo "❌ 'out' Verzeichnis nicht gefunden. Führe zuerst 'npm run build' aus."
    exit 1
fi

echo "📤 Uploading files to $FTP_HOST..."

# Option 1: Mit lftp (empfohlen)
if command -v lftp &> /dev/null; then
    echo "📁 Using lftp for upload..."
    lftp -c "
    set ftp:ssl-allow no;
    open ftp://$FTP_USER:$FTP_PASS@$FTP_HOST;
    lcd out;
    cd $FTP_PATH;
    mirror --reverse --delete --verbose;
    quit
    "
    echo "✅ Upload completed with lftp!"

# Option 2: Mit rsync über SSH (sicherer)
elif command -v rsync &> /dev/null; then
    echo "📁 Using rsync for upload..."
    echo "⚠️  Stelle sicher, dass SSH-Keys konfiguriert sind!"
    rsync -avz --delete out/ $FTP_USER@$FTP_HOST:$FTP_PATH
    echo "✅ Upload completed with rsync!"

else
    echo "❌ Weder lftp noch rsync verfügbar."
    echo "📝 Installiere eines der Tools:"
    echo "   - macOS: brew install lftp"
    echo "   - Ubuntu/Debian: sudo apt install lftp"
    echo ""
    echo "🔧 Alternative: Manuelle Upload-Anweisungen"
    echo "1. Öffne dein FTP-Programm (FileZilla, Cyberduck, etc.)"
    echo "2. Verbinde dich mit deinem Server"
    echo "3. Navigiere zum Web-Verzeichnis (meist public_html/)"
    echo "4. Lade alle Dateien aus dem 'out/' Verzeichnis hoch"
    echo "5. Stelle sicher, dass index.html als Standard-Datei gesetzt ist"
fi
