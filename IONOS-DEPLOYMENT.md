# 🚀 IONOS Webhosting Plus - Git Deployment Setup

## 📋 **Schritt-für-Schritt Anleitung**

### **1. IONOS FTP/SFTP Zugangsdaten sammeln**

**Benötigte Informationen aus dem IONOS Control Panel:**
- FTP/SFTP Server (z.B. `your-domain.com` oder `ftp.ionos.de`)
- Benutzername (meist gleichzeitig deine Domain oder ein Kürzel)
- Passwort
- Port (21 für FTP, 22 für SFTP)

📍 **Wo finden:** IONOS Control Panel → Hosting → Verwaltung → FTP-Zugänge

---

### **2. GitHub Secrets konfigurieren**

**In deinem GitHub Repository:**
1. Gehe zu `Settings` → `Secrets and variables` → `Actions`
2. Klicke auf `New repository secret`
3. Füge folgende Secrets hinzu:

```
IONOS_FTP_HOST=ftp.ionos.de          (oder dein Server)
IONOS_FTP_USER=dein-ftp-username     (dein FTP-Benutzername)
IONOS_FTP_PASSWORD=dein-ftp-passwort (dein FTP-Passwort)

# Falls SFTP verfügbar:
IONOS_SFTP_HOST=your-domain.com
IONOS_SFTP_USER=dein-sftp-username
IONOS_SFTP_PASSWORD=dein-sftp-passwort
```

---

### **3. Repository für automatisches Deployment vorbereiten**

**Aktuelle Änderungen committen und pushen:**

```bash
# Alle Deployment-Dateien hinzufügen
git add .
git commit -m "feat: Add IONOS deployment configuration

- Add deploy-ionos.sh for manual deployment
- Add GitHub Actions workflow for automatic deployment
- Add IONOS-optimized .htaccess configuration
- Configure static export for IONOS hosting"

# Auf GitHub pushen
git push origin main
```

---

### **4. Deployment-Optionen**

#### **🤖 Option A: Automatisches Deployment (Empfohlen)**

**Nach dem Setup wird automatisch deployed bei jedem Push auf `main`:**

```bash
# Änderungen machen
git add .
git commit -m "Update content"
git push origin main
# → Automatisches Deployment startet!
```

**Status überprüfen:**
- GitHub → Actions Tab → Letzter Workflow

#### **📤 Option B: Manuelles Deployment**

**Falls du manuell deployen möchtest:**

```bash
# 1. Build erstellen
npm run build

# 2. FTP-Upload (mit FileZilla, WinSCP, etc.)
# Kopiere Inhalt von 'out/' nach '/htdocs' auf deinem IONOS Server

# 3. .htaccess hochladen
# Kopiere 'deploy-ionos-htaccess' als '.htaccess' nach '/htdocs'
```

#### **🖥️ Option C: Direktes Server-Deployment (Advanced)**

**Falls dein IONOS-Hosting SSH unterstützt:**

```bash
# SSH Verbindung
ssh username@your-domain.com

# Repository clonen
git clone https://github.com/GHubertusWB/ghwb-studio-portfolio.git

# Script ausführen
cd ghwb-studio-portfolio
chmod +x deploy-ionos.sh
./deploy-ionos.sh
```

---

### **5. IONOS Domain & DNS Setup**

#### **Domain konfigurieren:**

1. **IONOS Control Panel** → Domains → Deine Domain
2. **DNS-Einstellungen** prüfen:
   - A-Record: Zeigt auf deine IONOS-Server-IP
   - CNAME (www): Zeigt auf deine Hauptdomain

#### **SSL-Zertifikat aktivieren:**

1. IONOS Control Panel → SSL-Zertifikate
2. "Let's Encrypt" aktivieren (kostenlos)
3. Warten bis Aktivierung abgeschlossen (kann 24h dauern)

---

### **6. Performance-Optimierung**

#### **IONOS CDN aktivieren (falls verfügbar):**

1. Control Panel → Performance → CDN
2. CDN für statische Assets aktivieren
3. Cache-Einstellungen optimieren

#### **Monitoring einrichten:**

```javascript
// Google Analytics in src/app/layout.tsx hinzufügen
// Google Search Console für SEO
// IONOS Website-Checker für Uptime-Monitoring
```

---

### **7. Troubleshooting**

#### **❌ Deployment fehlgeschlagen:**

```bash
# GitHub Actions Logs prüfen
# Secrets nochmal überprüfen
# FTP-Verbindung testen mit FileZilla

# Fallback: Manueller Upload
npm run build
# out/ Inhalt per FTP hochladen
```

#### **❌ Website zeigt 404-Fehler:**

```bash
# .htaccess Datei prüfen
# Pfade in next.config.ts überprüfen
# IONOS .htaccess-Support aktivieren
```

#### **❌ Bilder werden nicht angezeigt:**

```bash
# public/ Ordner vollständig hochgeladen?
# Bildpfade in gallery.ts korrekt?
# Browser-Cache leeren
```

---

### **8. Wartung & Updates**

#### **Regelmäßige Tasks:**

```bash
# Dependencies updaten
npm update

# Security Updates
npm audit fix

# Build testen
npm run build
npm run start
```

#### **Backup-Strategie:**

- **GitHub:** Automatisches Code-Backup
- **IONOS:** Nutze IONOS Backup-Service
- **Database:** Falls später benötigt

---

### **9. Erweiterte Features**

#### **Custom Domain konfigurieren:**

```bash
# In next.config.ts
const nextConfig = {
  // ...
  assetPrefix: 'https://your-domain.com',
  basePath: '', // Leer für Root-Domain
}
```

#### **Email-Integration (IONOS Mail):**

```javascript
// Kontaktformular mit IONOS SMTP
// Emailjs oder Nodemailer konfigurieren
```

---

## 🎯 **Quick Start Checkliste**

- [ ] IONOS FTP-Zugangsdaten gesammelt
- [ ] GitHub Secrets konfiguriert
- [ ] Repository gepusht
- [ ] GitHub Actions Workflow läuft durch
- [ ] Website ist live erreichbar
- [ ] SSL-Zertifikat aktiviert
- [ ] .htaccess funktioniert (Navigation testete)
- [ ] Bilder werden korrekt angezeigt
- [ ] Performance getestet (PageSpeed Insights)

---

## 📞 **Support & Ressourcen**

- **IONOS Hilfe:** https://www.ionos.de/hilfe/
- **GitHub Actions Docs:** https://docs.github.com/actions
- **Next.js Static Export:** https://nextjs.org/docs/app/building-your-application/deploying/static-exports

**Bei Problemen:** Prüfe GitHub Actions Logs und IONOS Control Panel für Fehlermeldungen.
