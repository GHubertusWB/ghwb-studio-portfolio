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

Vercel sollte automatisch erkennen:
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Install Command**: `npm ci`

## 🔄 Deployment Workflow

### Automatisches Deployment
- **Trigger**: Push auf `main` Branch
- **GitHub Actions**: Führt Build-Check durch (siehe `.github/workflows/vercel-deployment.yml`)
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
├── .github/workflows/
│   └── vercel-deployment.yml    # Build-Check Workflow
├── vercel.json                  # Vercel Konfiguration
├── next.config.ts              # Next.js Konfiguration
├── package.json                # Dependencies & Scripts
└── src/app/api/send-email/     # SMTP E-Mail API Route
```

## ✅ Build Verification

Der GitHub Action Workflow prüft bei jedem Push:
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
