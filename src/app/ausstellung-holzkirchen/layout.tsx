import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kunst im Schaufenster Holzkirchen | GHWB Studio Ausstellung 2026',
  description: 'Ausstellung von GHWB Studio bei „Kunst im Schaufenster" in Holzkirchen. 6 Originalwerke in der Raiffeisenbank am Marktplatz – 27.02. bis 05.04.2026. Werke online reservieren.',
  keywords: [
    'Kunst im Schaufenster Holzkirchen',
    'Ausstellung Holzkirchen 2026',
    'GHWB Studio Kunst',
    'Acrylmalerei Holzkirchen',
    'Kunstausstellung Raiffeisenbank',
    'Originalkunst kaufen Holzkirchen',
    'Tiermalerei Acryl',
    'Kunst Marktplatz Holzkirchen',
    'Gemälde reservieren',
    'Kunst Oberbayern',
  ],
  openGraph: {
    title: 'Kunst im Schaufenster Holzkirchen | GHWB Studio Ausstellung 2026',
    description: 'Ausstellung von GHWB Studio bei „Kunst im Schaufenster" in Holzkirchen. 6 Originalwerke – 27.02. bis 05.04.2026. Jetzt online reservieren.',
    url: 'https://ghwbstudio.de/ausstellung-holzkirchen',
    siteName: 'GHWB Studio',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kunst im Schaufenster Holzkirchen | GHWB Studio 2026',
    description: '6 Originalwerke von GHWB Studio bei „Kunst im Schaufenster" in Holzkirchen. 27.02.–05.04.2026.',
  },
  alternates: {
    canonical: 'https://ghwbstudio.de/ausstellung-holzkirchen',
  },
}

export default function AusstellungHolzkirchenLayout({ children }: { children: React.ReactNode }) {
  return children
}
