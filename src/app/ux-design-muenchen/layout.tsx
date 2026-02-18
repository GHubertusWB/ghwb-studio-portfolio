import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UX Design München | Strategisches User Experience Design',
  description: 'UX Design für München: Nutzerzentrierte Strategien, Design Systems und digitale Produkte für B2B. Von Konzept bis zur Umsetzung – kundenzentriert, datengetrieben.',
  keywords: [
    'UX Design München',
    'User Experience Design Bayern',
    'UX Strategy München',
    'Design Thinking München',
    'User Research München',
    'Design Systems München',
    'Digital Product Design München',
    'Customer Journey Mapping München',
    'Interaction Design München',
    'Information Architecture München',
    'UX/UI Design Agentur München',
    'Digitale Transformation München',
    'Design Validation München',
    'Usability Testing München',
    'Conversion Rate Optimization München'
  ],
  openGraph: {
    title: 'UX Design München | Strategisches User Experience Design',
    description: 'UX Design für München: Nutzerzentrierte Strategien, Design Systems und digitale Produkte für B2B.',
    url: 'https://ghwbstudio.de/ux-design-muenchen',
    siteName: 'GHWB Studio',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UX Design München | Strategisches User Experience Design',
    description: 'UX Design für München: Nutzerzentrierte Strategien, Design Systems und digitale Produkte.',
  },
  alternates: {
    canonical: 'https://ghwbstudio.de/ux-design-muenchen',
  },
}

export default function UXDesignMuenchenLayout({ children }: { children: React.ReactNode }) {
  return children
}
