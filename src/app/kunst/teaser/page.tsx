/**
 * /kunst/teaser — Interactive Art Teaser (MVP)
 *
 * HOW TO TEST:
 *   1. Run `npm run dev` → open http://localhost:3000/kunst/teaser
 *   2. Webcam requires HTTPS or localhost.
 *   3. Without camera, move mouse/touch for motion effect.
 *   4. "Intensität" slider controls displacement strength.
 *
 * FRAMEWORK: Next.js App Router (detected from /src/app/ structure).
 * Three.js is loaded ONLY on this page via next/dynamic (SSR disabled).
 * All CSS is scoped via CSS Modules — zero impact on other pages.
 */

'use client'

import dynamic from 'next/dynamic'

const ArtTeaser = dynamic(
  () => import('./components/ArtTeaser'),
  { ssr: false }
)

export default function KunstTeaserPage() {
  return <ArtTeaser />
}
