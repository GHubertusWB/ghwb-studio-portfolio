#!/bin/bash

# GHWB Studio - Manueller IONOS Upload Helper
echo "📤 IONOS Manual Upload Helper"
echo "============================"

# Prüfe ob out/ existiert
if [ ! -d "out" ]; then
    echo "❌ Kein 'out' Verzeichnis gefunden!"
    echo "🔨 Führe zuerst aus: npm run build"
    exit 1
fi

echo "✅ Build-Verzeichnis gefunden"
echo ""
echo "📋 Manuelle Upload-Schritte:"
echo ""
echo "1️⃣  Öffne deinen FTP-Client (FileZilla, WinSCP, etc.)"
echo "2️⃣  Verbinde dich mit IONOS:"
echo "    Host: ftp.ionos.de (oder dein Server)"
echo "    User: [Dein IONOS FTP-Username]"  
echo "    Pass: [Dein IONOS FTP-Passwort]"
echo ""
echo "3️⃣  Navigiere zu deinem Web-Verzeichnis:"
echo "    Meist: /htdocs/ oder /public_html/"
echo ""
echo "4️⃣  Lade ALLE Dateien aus diesem Ordner hoch:"
echo "    $(pwd)/out/"
echo ""
echo "📁 Dateien zum Hochladen:"
ls -la out/ | head -10
echo "    ... und alle weiteren Dateien/Ordner"
echo ""
echo "5️⃣  Kopiere .htaccess Datei:"
echo "    Datei: $(pwd)/deploy-ionos-htaccess"
echo "    Ziel: .htaccess (in deinem Web-Verzeichnis)"
echo ""
echo "🎉 Danach ist deine Website live!"
echo ""
echo "💡 Tipp: Für automatische Uploads konfiguriere GitHub Actions"
echo "   Siehe: IONOS-DEPLOYMENT.md"
