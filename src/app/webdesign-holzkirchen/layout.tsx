import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Webdesign Holzkirchen | Premium UX/UI & Webentwicklung',
  description: 'Professionelles Webdesign in Holzkirchen: Barrierefreie Websites, UX/UI Design & Performance-Optimierung für Unternehmen im Raum München Oberland.',
  keywords: [
    'Webdesign Holzkirchen',
    'UX Design Holzkirchen',
    'Webentwicklung Miesbach',
    'Website Relaunch Tegernsee',
    'Barrierefreies Webdesign Bayern',
    'Performance-Optimierung Website',
    'Responsives Webdesign Rosenheim',
    'Corporate Website Holzkirchen',
    'Webdesign Agentur Oberland',
    'UI Design Studio Holzkirchen'
  ],
  openGraph: {
    title: 'Webdesign Holzkirchen | Premium UX/UI & Webentwicklung',
    description: 'Professionelles Webdesign in Holzkirchen: Barrierefreie Websites, UX/UI Design & Performance-Optimierung für Unternehmen im Raum München Oberland.',
    url: 'https://ghwbstudio.de/webdesign-holzkirchen',
    siteName: 'GHWB Studio',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webdesign Holzkirchen | Premium UX/UI & Webentwicklung',
    description: 'Professionelles Webdesign in Holzkirchen: Barrierefreie Websites, UX/UI Design & Performance-Optimierung für Unternehmen.',
  },
  alternates: {
    canonical: 'https://ghwbstudio.de/webdesign-holzkirchen',
  },
}

export default function WebdesignHolzkirchenLayout({ children }: { children: React.ReactNode }) {
  return children
}
