# 🚀 GHWB Studio Portfolio - Deployment Guide

## 📊 Deployment-Optionen Übersicht

### 🌟 **Option 1: Statischer Export (Empfohlen)**
```bash
# 1. Build erstellen
npm run build

# 2. 'out' Verzeichnis wird erstellt
# 3. Inhalt von 'out/' auf Webserver kopieren
```

### 📁 **Option 2: FTP/SFTP Upload**
```bash
# 1. upload.sh konfigurieren
nano upload.sh  # Server-Daten eintragen

# 2. Upload ausführen
./upload.sh
```

### 🐳 **Option 3: Docker Deployment**
```bash
# 1. Docker Image bauen
docker build -t ghwb-portfolio .

# 2. Container starten
docker run -p 80:80 ghwb-portfolio
```

### ⚡ **Option 4: GitHub Pages (Automatisch)**
- Push zu GitHub löst automatisches Deployment aus
- GitHub Actions Workflow ist bereits konfiguriert
- Verfügbar unter: `https://username.github.io/repository-name`

---

## 🔧 **Server-Konfiguration**

### **Apache (.htaccess)**
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /$1.html [NC,L]

# Oder für SPA-Routing:
RewriteRule ^(.*)$ /index.html [NC,L]
```

### **Nginx**
```nginx
server {
    listen 80;
    server_name ihredomain.com;
    root /path/to/out;
    index index.html;

    location / {
        try_files $uri $uri/ $uri.html /index.html;
    }
}
```

---

## 📋 **Schritt-für-Schritt Anleitung**

### **Für Shared Hosting (cPanel/DirectAdmin):**

1. **Build erstellen:**
   ```bash
   npm run build
   ```

2. **Dateien hochladen:**
   - Öffne cPanel/FileManager
   - Navigiere zu `public_html/`
   - Lade alle Dateien aus `out/` hoch
   - Stelle sicher, dass `index.html` als Standard-Datei gesetzt ist

3. **Domain testen:**
   - Öffne deine Website im Browser
   - Teste alle Navigation-Links
   - Prüfe mobile Ansicht

### **Für VPS/Dedicated Server:**

1. **SSH-Verbindung:**
   ```bash
   ssh user@your-server.com
   ```

2. **Nginx/Apache installieren:**
   ```bash
   # Ubuntu/Debian
   sudo apt update
   sudo apt install nginx
   
   # CentOS/RHEL
   sudo yum install nginx
   ```

3. **Dateien übertragen:**
   ```bash
   # Von lokalem Computer
   rsync -avz out/ user@server:/var/www/html/
   ```

4. **Server-Konfiguration:**
   - Nginx-Config anpassen
   - SSL-Zertifikat einrichten (Let's Encrypt)
   - Firewall konfigurieren

---

## 🛠 **Troubleshooting**

### **Build-Fehler:**
```bash
# ESLint-Fehler ignorieren
npm run build --force

# Alternative: Vereinfachte Konfiguration
./quick-deploy.sh
```

### **Routing-Probleme:**
- Stelle sicher, dass dein Server SPA-Routing unterstützt
- Verwende `.htaccess` (Apache) oder Nginx-Konfiguration
- Teste mit `trailingSlash: true` in next.config.ts

### **Image-Probleme:**
- Bilder müssen im `public/` Verzeichnis liegen
- Verwende relative Pfade (`/images/...`)
- Bei externen Bildern: `unoptimized: true` in next.config.ts

---

## 🔐 **Sicherheit**

### **Empfohlene Headers:**
```
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: no-referrer-when-downgrade
```

### **SSL/HTTPS:**
```bash
# Let's Encrypt SSL
sudo certbot --nginx -d ihredomain.com
```

---

## 📊 **Performance-Optimierung**

### **Server-Optimierung:**
- Gzip-Kompression aktivieren
- Browser-Caching konfigurieren
- CDN einrichten (Cloudflare)
- Image-Optimierung

### **Build-Optimierung:**
```bash
# Production Build
NODE_ENV=production npm run build

# Analyse der Bundle-Größe
npm install --save-dev @next/bundle-analyzer
```

---

## 🎯 **Monitoring & Analytics**

### **Empfohlene Tools:**
- Google Analytics
- Google Search Console
- PageSpeed Insights
- GTmetrix
- Cloudflare Analytics

---

## 📞 **Support**

Bei Fragen zum Deployment:
1. Prüfe die Build-Logs
2. Teste lokal mit `npm run build && npx serve out`
3. Prüfe Server-Logs
4. Kontaktiere deinen Hosting-Provider bei Server-Problemen
