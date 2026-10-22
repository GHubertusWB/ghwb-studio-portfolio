import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Verfügbare Kunstwerke | GHWB Studio',
  description: 'Originalwerke von GHWB Studio – Acrylgemälde und Miniaturen. Handgemalt, jedes ein Unikat. Entdecken Sie die aktuelle Auswahl und reservieren Sie Ihr Lieblingsstück direkt online.',
  keywords: [
    'Originalkunst kaufen',
    'GHWB Studio Kunst',
    'Acrylmalerei original',
    'Tiermalerei Acryl',
    'Gemälde reservieren',
    'Originalgemälde kaufen',
    'Kunst Oberbayern',
    'Acryl auf Papier',
    'Miniatur Kunstwerk',
    'Kunstwerk kaufen online',
  ],
  openGraph: {
    title: 'Verfügbare Kunstwerke | GHWB Studio',
    description: 'Originalwerke von GHWB Studio – Acrylgemälde und Miniaturen. Jetzt direkt online reservieren.',
    url: 'https://ghwbstudio.de/kunstwerke',
    siteName: 'GHWB Studio',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Verfügbare Kunstwerke | GHWB Studio',
    description: 'Originalwerke von GHWB Studio – Acrylgemälde und Miniaturen. Jetzt direkt online reservieren.',
  },
  alternates: {
    canonical: 'https://ghwbstudio.de/kunstwerke',
  },
}

export default function KunstwerkeLayout({ children }: { children: React.ReactNode }) {
  return children
}
