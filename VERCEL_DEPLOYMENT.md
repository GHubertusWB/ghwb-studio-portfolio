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

**EmailJS für automatische E-Mails** (von u3170996315@gmail.com an office@ghwbstudio.de):

```bash
# EmailJS Konfiguration (erforderlich für E-Mail-Funktionalität)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_gmail
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_contact
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=user_xxxxxxxxx

# Build Konfiguration (optional)
NEXT_TELEMETRY_DISABLED=1
SKIP_ENV_VALIDATION=1
```

**Setup-Anleitung**: Siehe `EMAILJS_SETUP.md` für detaillierte Konfiguration.

### 3. Build Settings

Vercel sollte automatisch erkennen:
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `out`
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
└── out/                        # Static Export Output
```

## ✅ Build Verification

Der GitHub Action Workflow prüft bei jedem Push:
- ✅ Dependencies Installation
- ✅ Erfolgreicher Build
- ✅ Static Export Generation
- ✅ Output Directory Validation

## 🔗 URLs

- **Production**: `https://[vercel-url].vercel.app`
- **Preview**: Automatisch für Pull Requests
- **GitHub Repository**: `https://github.com/GHubertusWB/ghwb-studio-portfolio`

## 🚨 Wichtige Hinweise

1. **Static Export**: Projekt nutzt `output: 'export'` für statische Generierung
2. **EmailJS**: Sendet automatisch E-Mails von `u3170996315@gmail.com` an `office@ghwbstudio.de`
3. **Environment Variables**: EmailJS-Konfiguration erforderlich (siehe EMAILJS_SETUP.md)
4. **Images**: Optimierung deaktiviert für statischen Export
5. **API Routes**: Nicht verfügbar bei Static Export

## 🛠 Troubleshooting

### Build Fehler
1. Prüfe GitHub Actions Logs
2. Prüfe Vercel Function Logs  
3. Lokaler Build-Test: `npm run build`

### E-Mail nicht funktionsfähig
1. Prüfe EmailJS Environment Variables in Vercel Dashboard
2. Prüfe EmailJS Service-Konfiguration unter emailjs.com
3. Teste Gmail-Verbindung und Template-Konfiguration
4. Fallback: mailto-Link öffnet E-Mail-Client des Nutzers

### Routing Probleme
1. Prüfe `vercel.json` Routes Konfiguration
2. Prüfe `next.config.ts` Export Settings
