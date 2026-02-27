import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Angebot | GHWB Studio',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function AngebotLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
