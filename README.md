# GHWB Studio Portfolio Website

Eine moderne, minimalistische Portfolio-Website, die drei kreative Services präsentiert: **UX/UI Design**, **Fotografie** und **Kunst**. Die Website verbindet klassisches Design mit modernen Animationen und bietet sowohl Light- als auch Dark-Mode.

## ✨ Features

- **Responsive Design** - Optimiert für alle Geräte
- **Dark/Light Mode** - Automatische Erkennung der Systemeinstellung
- **Smooth Animations** - Mit Framer Motion umgesetzte Mikroanimationen
- **Modern Tech Stack** - Next.js 15, TypeScript, Tailwind CSS
- **SEO optimiert** - Meta-Tags und strukturierte Daten
- **Barrierefreiheit** - Accessible Design-Prinzipien

## 🏗️ Architektur

### Seiten
- **Home** - Hero-Sektion mit MainLogo und Services-Übersicht
- **UX/UI Design** - Expertise, Projekte und Arbeitsweise
- **Fotografie** - Portfolio und Services (Porträts, Haustiere, Produkte, Ambient)
- **Kunst** - Innovative AR-Kunstwerke und kreativer Prozess
- **Über mich** - Persönliche Geschichte und Werte

### Komponenten
- `MainLogo.jsx` - Animiertes Logo mit SVG-Grafiken
- `Navigation.tsx` - Responsive Navigation mit Mobile Menu
- `Hero.tsx` - Hauptbereich der Startseite
- `Services.tsx` - Service-Übersicht mit Hover-Effekten
- `Footer.tsx` - Footer mit Social Links

### Design-System
- **Typografie** - Inter für Text, JetBrains Mono für Code
- **Farben** - Semantische Farbvariablen für Light/Dark Mode
- **Spacing** - Konsistente Abstände basierend auf Tailwind
- **Animationen** - Framer Motion für alle Bewegungen

## 🚀 Getting Started

### Installation

```bash
# Repository klonen
git clone [repository-url]
cd portfolio-website

# Dependencies installieren
npm install

# Development Server starten
npm run dev
```

Die Website ist dann unter `http://localhost:3000` erreichbar.

### Scripts

- `npm run dev` - Development Server mit Turbopack
- `npm run build` - Production Build
- `npm run start` - Production Server
- `npm run lint` - ESLint prüfung

## 🎨 Design Inspiration

Das Design basiert auf den modernen, minimalistischen Ansätzen von:
- [klmnko.de](https://klmnko.de/) - Saubere Typografie und Layout
- [lue.studio](https://lue.studio/) - Elegante Animationen und Struktur

## 🛠️ Technologie-Stack

- **Framework** - Next.js 15 mit App Router
- **Sprache** - TypeScript
- **Styling** - Tailwind CSS
- **Animationen** - Framer Motion
- **Icons** - Lucide React
- **Fonts** - Inter & JetBrains Mono (Google Fonts)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Performance

- **Core Web Vitals** optimiert
- **Image Optimization** durch Next.js
- **Code Splitting** automatisch
- **Lazy Loading** für bessere Performance

## 🌐 SEO & Meta

- Strukturierte Daten
- Open Graph Tags
- Twitter Card Meta
- Sitemap (automatisch generiert)
- Optimierte Meta-Descriptions

## 🔧 Anpassungen

### Farben ändern
Bearbeiten Sie `src/app/globals.css` für das Farbschema:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  /* ... weitere Variablen */
}
```

### Logo anpassen
Das Hauptlogo befindet sich in `src/components/MainLogo.jsx` und kann vollständig angepasst werden.

### Inhalte ändern
Alle Texte und Inhalte können direkt in den Page-Komponenten unter `src/app/` bearbeitet werden.

## 📧 Kontakt

Für Fragen oder Anpassungen: [hello@ghwb.studio](mailto:hello@ghwb.studio)

---

**GHWB Studio** - Kreative Lösungen für digitale Erlebnisse, unvergessliche Momente und innovative Kunst.
