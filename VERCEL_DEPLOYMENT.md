# 🚀 Vercel Deployment Guide - GHWB Studio Portfolio

## 📋 Überblick

Dieses Projekt ist für automatisches Deployment über **Vercel** konfiguriert. Bei jedem Push auf den `main` Branch wird automatisch eine neue Version deployed.

## 🔧 Setup Anleitung

### 1. Vercel mit GitHub verbinden

1. Gehe zu [vercel.com](https://vercel.com)
2. Melde dich mit deinem GitHub Account an
3. Klicke auf "New Project" 
4. Wähle das Repository: `GHubertusWB/ghwb-studio-portfolio`
5. Import das Projekt

### 2. Umgebungsvariablen konfigurieren

**SMTP für automatische E-Mails** (von u3170996315@gmail.com an office@ghwbstudio.de):

```bash
# SMTP Konfiguration (erforderlich für E-Mail-Funktionalität)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=u3170996315@gmail.com
SMTP_PASSWORD=ffkqsezyitqraewo

# Build Konfiguration (optional)
NEXT_TELEMETRY_DISABLED=1
SKIP_ENV_VALIDATION=1
```

**Setup-Anleitung**: SMTP nutzt dein Gmail-Konto für direktes E-Mail-Versenden.

### 3. Build Settings

**WICHTIG**: Vercel Project Settings korrekt konfigurieren:

1. **Framework Preset**: Next.js
2. **Build Command**: `npm run build` (NICHT überschreiben)
3. **Output Directory**: LEER LASSEN (nicht überschreiben!)
4. **Install Command**: `npm ci`

**⚠️ Häufiger Fehler**: Wenn "Output Directory" auf `out` gesetzt ist, entferne diese Einstellung!

## 🔄 Deployment Workflow

### Automatisches Deployment
- **Trigger**: Push auf `main` Branch
- **Vercel**: Deployed automatisch nach erfolgreichem Build

### Manuelles Deployment
```bash
# Lokal testen
npm run build

# Vercel CLI installieren (optional)
npm i -g vercel

# Manuelles Deployment über CLI
vercel --prod
```

## 📁 Projekt Struktur

```
├── .github/workflows/     # Leer (keine GitHub Actions mehr)
├── next.config.ts         # Next.js Konfiguration
├── package.json           # Dependencies & Scripts
└── src/app/api/send-email/ # SMTP E-Mail API Route
```

## ✅ Build Verification

Vercel führt automatisch bei jedem Deployment durch:
- ✅ Dependencies Installation
- ✅ Erfolgreicher Build
- ✅ TypeScript Validation

## 🔗 URLs

- **Production**: `https://[vercel-url].vercel.app`
- **Preview**: Automatisch für Pull Requests
- **GitHub Repository**: `https://github.com/GHubertusWB/ghwb-studio-portfolio`

## 🚨 Wichtige Hinweise

1. **Next.js App**: Projekt läuft als vollständige Next.js Anwendung mit Server-side API Routes
2. **SMTP E-Mail**: Sendet automatisch E-Mails von `u3170996315@gmail.com` an `office@ghwbstudio.de`
3. **Environment Variables**: SMTP-Konfiguration erforderlich für E-Mail-Funktionalität
4. **API Routes**: Verfügbar als Vercel Functions

## 🛠 Troubleshooting

### "routes-manifest.json" Fehler
**Fehler**: `The file "/vercel/path0/out/routes-manifest.json" couldn't be found`

**Lösung**:
1. Gehe zu **Vercel Dashboard** → **Project Settings** → **Build & Development Settings**
2. **Output Directory**: Muss LEER sein (entferne `out` falls gesetzt)
3. **Build Command**: Muss `npm run build` sein (nicht überschreiben)
4. **Framework Preset**: Next.js
5. Lösche alte Deployments und deploye neu

### Build Fehler
1. Prüfe GitHub Actions Logs
2. Prüfe Vercel Function Logs  
3. Lokaler Build-Test: `npm run build`

### E-Mail nicht funktionsfähig
1. Prüfe SMTP Environment Variables in Vercel Dashboard
2. Teste mit curl/Postman die API Route
3. Prüfe Gmail SMTP-Konfiguration und App-Password

### Routing Probleme
1. Prüfe `vercel.json` Routes Konfiguration
2. Prüfe `next.config.ts` Export Settings
