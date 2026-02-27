import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interactive Art Teaser — GHWB Studio',
  description: 'Interaktive Kunst-Experience mit Kamera-basierter Bewegungserkennung.',
  robots: { index: false, follow: false },
}

export default function KunstTeaserLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
