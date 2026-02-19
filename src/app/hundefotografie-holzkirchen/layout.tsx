import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hundefotografie Holzkirchen | Natürliche Hundefotos',
  description: 'Professionelle Hundefotografie in Holzkirchen: Authentische Outdoor-Shootings, natürliche Portraits & emotionale Mensch-Hund-Momente im Raum Tegernsee, Miesbach & München.',
  keywords: [
    'Hundefotografie Holzkirchen',
    'Hundeshooting Holzkirchen',
    'Tierfotograf Holzkirchen',
    'Hundefotos Tegernsee',
    'Hundeshooting München Umland',
    'Outdoor Hundefotografie Bayern',
    'Welpenfotos Miesbach',
    'Hundeportrait Rosenheim',
    'Tierfotograf Oberland',
    'Mensch Hund Fotoshooting',
    'Hundefotografie Rosenheim',
    'natürliche Hundefotos Bayern',
    'Hundeshooting Natur',
    'Hundefotograf München Süd',
  ],
  openGraph: {
    title: 'Hundefotografie Holzkirchen | Natürliche Hundefotos',
    description: 'Professionelle Hundefotografie in Holzkirchen: Authentische Outdoor-Shootings, natürliche Portraits & emotionale Mensch-Hund-Momente im Raum Tegernsee, Miesbach & München.',
    url: 'https://ghwbstudio.de/hundefotografie-holzkirchen',
    siteName: 'GHWB Studio',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hundefotografie Holzkirchen | Natürliche Hundefotos',
    description: 'Professionelle Hundefotografie in Holzkirchen: Authentische Outdoor-Shootings & natürliche Portraits für Hunde und ihre Menschen.',
  },
  alternates: {
    canonical: 'https://ghwbstudio.de/hundefotografie-holzkirchen',
  },
}

export default function HundefotografieHolzkirchenLayout({ children }: { children: React.ReactNode }) {
  return children
}
