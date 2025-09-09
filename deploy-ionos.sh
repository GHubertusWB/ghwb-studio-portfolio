#!/bin/bash

# GHWB Studio Portfolio - IONOS Deployment Script
# Optimiert für IONOS Webhosting Plus

echo "🚀 IONOS Deployment für GHWB Studio Portfolio"
echo "=============================================="

# IONOS spezifische Pfade (automatisch erkannt)
HTDOCS_PATH="/htdocs"
if [ -d "/data/htdocs" ]; then
    HTDOCS_PATH="/data/htdocs"
fi

echo "📁 Detected HTDOCS path: $HTDOCS_PATH"

# Node.js Version prüfen (IONOS unterstützt Node.js)
echo "🔍 Checking Node.js..."
if command -v node &> /dev/null; then
    echo "✅ Node.js version: $(node --version)"
else
    echo "❌ Node.js nicht verfügbar - verwende alternative Methode"
    exit 1
fi

# NPM verfügbar?
if command -v npm &> /dev/null; then
    echo "✅ NPM version: $(npm --version)"
else
    echo "❌ NPM nicht verfügbar"
    exit 1
fi

# Dependencies installieren
echo "📦 Installing dependencies..."
npm ci --only=production

# Build erstellen
echo "🔨 Building application..."
npm run build

# Prüfen ob Build erfolgreich
if [ -d "out" ]; then
    echo "✅ Build erfolgreich!"
    
    # Backup erstellen
    if [ -d "$HTDOCS_PATH/backup" ]; then
        rm -rf "$HTDOCS_PATH/backup"
    fi
    
    # Aktueller Inhalt nach backup verschieben (außer out/)
    mkdir -p "$HTDOCS_PATH/backup"
    find "$HTDOCS_PATH" -maxdepth 1 -type f -exec mv {} "$HTDOCS_PATH/backup/" \; 2>/dev/null
    find "$HTDOCS_PATH" -maxdepth 1 -type d ! -name "backup" ! -path "$HTDOCS_PATH" -exec mv {} "$HTDOCS_PATH/backup/" \; 2>/dev/null
    
    # Neue Dateien kopieren
    echo "📤 Deploying to $HTDOCS_PATH..."
    cp -r out/* "$HTDOCS_PATH/"
    
    # .htaccess für SPA Routing erstellen
    cat > "$HTDOCS_PATH/.htaccess" << 'EOF'
# GHWB Studio Portfolio - IONOS .htaccess
# Aktiviere Rewrite Engine
RewriteEngine On

# Gzip Compression aktivieren
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Browser Caching für statische Assets
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/pdf "access plus 1 month"
    ExpiresByType text/javascript "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType application/x-javascript "access plus 1 month"
</IfModule>

# SPA Routing - wichtig für Next.js Export
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !^/api/
RewriteCond %{REQUEST_URI} \.(html|php)$ [OR]
RewriteCond %{REQUEST_URI} ^/[^.]*$
RewriteRule ^(.*)$ /$1.html [NC,L]

# Fallback für Root-Requests
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^$ /index.html [NC,L]

# Security Headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options SAMEORIGIN
    Header always set X-XSS-Protection "1; mode=block"
    Header always set Referrer-Policy "no-referrer-when-downgrade"
</IfModule>

# Verhindere Directory Browsing
Options -Indexes

# MIME Types für Next.js Assets
AddType application/javascript .js
AddType text/css .css
AddType image/svg+xml .svg
EOF

    echo "✅ .htaccess erstellt"
    echo "🎉 Deployment erfolgreich abgeschlossen!"
    echo "🌐 Website sollte nun live sein!"
    
else
    echo "❌ Build fehlgeschlagen!"
    
    # Backup wiederherstellen falls vorhanden
    if [ -d "$HTDOCS_PATH/backup" ]; then
        echo "🔄 Restoring backup..."
        cp -r "$HTDOCS_PATH/backup/"* "$HTDOCS_PATH/"
        rm -rf "$HTDOCS_PATH/backup"
        echo "✅ Backup restored"
    fi
    
    exit 1
fi

echo "=============================================="
echo "⏰ Deployment completed at: $(date)"
