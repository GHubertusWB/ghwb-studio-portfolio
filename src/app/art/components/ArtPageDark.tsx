'use client'

import React, { useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { useRouter } from 'next/navigation'
import FloatingContactButton from '@/components/FloatingContactButton'
import Footer from '@/components/Footer'
import { SpecialButtonDark } from '@/components/ui/SpecialButtonDark'
import { artGroups } from '@/data/gallery'

// ─── Types ────────────────────────────────────────────────────────────────────

interface Artwork {
  title: string
  medium: string
  year: string
  description: string
  dimensions: string
}

interface ParallaxSectionDarkProps {
  textPosition: 'left' | 'right'
  title: string
  description: string
  images: string[]
  bgColor: string
  imageLayout?: 'default' | 'landscape' | 'carousel' | 'grid-carousel'
}

// ─── Shared Sub-components ────────────────────────────────────────────────────

const ChevronLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
)

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
)

const darkCarouselButtonClass =
  'absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-white hover:bg-black/60 transition-colors'

const DarkDots = ({
  total,
  active,
  onClick,
}: {
  total: number
  active: number
  onClick: (i: number) => void
}) => (
  <div className="flex justify-center gap-2 mt-4">
    {Array.from({ length: total }).map((_, i) => (
      <button
        key={i}
        onClick={() => onClick(i)}
        className={`w-2 h-2 rounded-full transition-colors ${
          i === active ? 'bg-white' : 'bg-white/40'
        }`}
        aria-label={`Bild ${i + 1}`}
      />
    ))}
  </div>
)

// ─── Data ─────────────────────────────────────────────────────────────────────

const TEILEN_IMAGES = [
  '/gallery/art/Teilen-Fischfang.jpeg',
  '/gallery/art/Teilen-Depressionen.jpeg',
  '/gallery/art/Teilen-Religionen.jpeg',
]

const ARTWORK: Artwork = {
  title: 'Teilen - AR Canvas Serie',
  medium: 'Augmented Reality & Canvas',
  year: '2024',
  description:
    "Harmonie in der Gesellschaft wird schnell verdrängt, wenn es um stark diskutierte Themen geht. Die Serie 'Teilen' kritisiert dieses Verhalten und zeigt auf, dass eine bewusste Betrachtung beider Seiten erst das Gesamtbild erkennen gibt.",
  dimensions: 'Variable Dimensionen',
}

const PORTFOLIO_SECTIONS: Omit<ParallaxSectionDarkProps, 'bgColor'>[] = [
  {
    textPosition: 'left',
    title: 'DUX',
    description:
      'Die Dux-Serie vereint digitale Ästhetik mit klassischer Formensprache. Jedes Werk interpretiert das Motiv der Ente als kulturelles Symbol neu — zwischen Pop Art, Street Art und zeitgenössischer Malerei.',
    imageLayout: 'grid-carousel',
    images: [
      '/gallery/art/Dux1.jpg',
      '/gallery/art/Dux2.jpg',
      '/gallery/art/Dux3.jpg',
      '/gallery/art/Dux4.jpg',
      '/gallery/art/Dux5.jpg',
      '/gallery/art/Dux6.jpg',
      '/gallery/art/Dux7.jpg',
      '/gallery/art/Dux8.jpg',
      '/gallery/art/Dux9.jpg',
      '/gallery/art/Dux10.jpg',
      '/gallery/art/Dux11.jpg',
      '/gallery/art/Dux13.jpg',
      '/gallery/art/Dux14.jpg',
      '/gallery/art/Dux-Red.jpg',
    ],
  },
  {
    textPosition: 'right',
    title: 'BEDROHTE TIERE',
    description:
      'Großformatige Acrylgemälde, die bedrohte Tierarten in expressiver Farbgebung porträtieren. Die Serie schafft Bewusstsein für den Artenschutz und verbindet emotionale Kraft mit künstlerischer Ausdrucksstärke.',
    imageLayout: 'carousel',
    images: [
      '/gallery/art/Kraniche%20im%20D%C3%A4mmerlicht%20am%20Wasser.png',
      '/gallery/art/purpurkranich.jpg',
      '/gallery/art/uferschnepfe.jpg',
    ],
  },
  {
    textPosition: 'left',
    title: 'AUGMENTED & DIGITAL ART',
    description:
      'An der Schnittstelle von Technologie und Kunst entstehen immersive Erlebnisse. Augmented Reality, generative Algorithmen und digitale Medien verschmelzen zu einer neuen Form der kreativen Expression.',
    images: [
      artGroups.find((g) => g.id === 'semantic-ducks')?.images[0] ??
        '/gallery/art/76825CEC-4305-466A-B431-EFD7F61DA8AC_1_105_c.jpeg',
      artGroups.find((g) => g.id === 'semantic-ducks')?.images[1] ??
        '/gallery/art/881F527F-9EB2-4F86-988A-CB7C0F2A2BB7_1_105_c.jpeg',
      artGroups.find((g) => g.id === 'semantic-ducks')?.images[2] ??
        '/gallery/art/881F7165-B85A-474D-B816-AE4E2ED1222A_1_105_c.jpeg',
    ],
  },
]

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ArtPageDark(): React.JSX.Element {
  const router = useRouter()
  const [teilenIndex, setTeilenIndex] = useState(0)

  const openContactModal = () => window.dispatchEvent(new CustomEvent('openContactModal'))

  return (
    <div
      className="min-h-screen text-white relative overflow-hidden"
      style={{
        background:
          'linear-gradient(to bottom right, var(--background), var(--background), rgba(42, 47, 54, 0.2))',
      }}
    >
      {/* 1. HERO */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="min-h-screen flex items-center justify-center relative"
        style={{ zIndex: 20 }}
      >
        {/* HUD */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 15 }}>
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            <svg
              width="100vw"
              height="100vh"
              viewBox="0 0 1920 1080"
              className="drop-shadow-lg"
              style={{ filter: 'drop-shadow(0 0 20px white)' }}
            >
              <motion.path
                d="M 520 540 A 440 440 0 1 1 1400 540"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeDasharray="5,10"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, delay: 1.5 }}
              />
              <motion.path
                d="M 560 540 A 400 400 0 1 1 1360 540"
                fill="none"
                stroke="white"
                strokeWidth="1"
                strokeOpacity="0.6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, delay: 2 }}
              />
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
              >
                <path d="M50 50 L50 20 L80 20" fill="none" stroke="white" strokeWidth="2" />
                <path
                  d="M1870 50 L1870 20 L1840 20"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d="M50 1030 L50 1060 L80 1060"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d="M1870 1030 L1870 1060 L1840 1060"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />
              </motion.g>
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 1, delay: 3 }}
              >
                <line x1="960" y1="440" x2="960" y2="410" stroke="white" strokeWidth="1" />
                <line x1="960" y1="640" x2="960" y2="670" stroke="white" strokeWidth="1" />
                <line x1="660" y1="540" x2="630" y2="540" stroke="white" strokeWidth="1" />
                <line x1="1260" y1="540" x2="1290" y2="540" stroke="white" strokeWidth="1" />
              </motion.g>
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 1, delay: 3 }}
              >
                <line x1="540" y1="540" x2="400" y2="540" stroke="white" strokeWidth="2" />
                <line x1="1380" y1="540" x2="1520" y2="540" stroke="white" strokeWidth="2" />
              </motion.g>
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 1, delay: 3.5 }}
              >
                <motion.circle
                  cx="960"
                  cy="540"
                  r="3"
                  fill="cyan"
                  animate={{ x: [0, 400, 0, -400, 0], y: [0, 200, 0, -200, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                />
                <motion.line
                  x1="100"
                  y1="100"
                  x2="150"
                  y2="100"
                  stroke="white"
                  strokeWidth="1"
                  strokeOpacity="0.6"
                  animate={{ x1: [100, 1770, 100], x2: [150, 1820, 150] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                />
                <motion.line
                  x1="1820"
                  y1="980"
                  x2="1770"
                  y2="980"
                  stroke="white"
                  strokeWidth="1"
                  strokeOpacity="0.6"
                  animate={{ x1: [1820, 100, 1820], x2: [1770, 150, 1770] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
                />
                <motion.circle
                  cx="100"
                  cy="100"
                  r="2"
                  fill="cyan"
                  animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.circle
                  cx="1820"
                  cy="100"
                  r="2"
                  fill="cyan"
                  animate={{ opacity: [1, 0.3, 1], scale: [1.5, 1, 1.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.circle
                  cx="100"
                  cy="980"
                  r="2"
                  fill="cyan"
                  animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
                <motion.circle
                  cx="1820"
                  cy="980"
                  r="2"
                  fill="cyan"
                  animate={{ opacity: [1, 0.3, 1], scale: [1.5, 1, 1.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                />
              </motion.g>
              <motion.circle
                cx="960"
                cy="540"
                r="480"
                fill="none"
                stroke="white"
                strokeWidth="1"
                strokeDasharray="2,20"
                strokeOpacity="0.7"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                style={{ transformOrigin: '960px 540px' }}
              />
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 1, delay: 4 }}
              >
                <line x1="0" y1="200" x2="1920" y2="200" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
                <line x1="0" y1="880" x2="1920" y2="880" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" />
              </motion.g>
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ duration: 1, delay: 4.5 }}
              >
                <circle cx="200" cy="300" r="3" fill="cyan" opacity="0.6">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="1720" cy="300" r="3" fill="cyan" opacity="0.6">
                  <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="200" cy="780" r="3" fill="cyan" opacity="0.6">
                  <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx="1720" cy="780" r="3" fill="cyan" opacity="0.6">
                  <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
                </circle>
              </motion.g>
            </svg>
          </motion.div>
        </div>

        <div className="relative text-center px-6 max-w-6xl" style={{ zIndex: 25 }}>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8 relative text-white"
              style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.4)' }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <span className="text-cyan-400/80 text-lg block mb-2 tracking-widest font-mono">
                GHWB.ART.SYSTEM:
              </span>
              KUNST & KREATIVITÄT
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              Digitale Kunst trifft auf traditionelle Ästhetik. Eine Exploration der Grenzen zwischen Technologie und menschlicher Kreativität.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <SpecialButtonDark
                variant="secondary"
                size="base"
                icon="left"
                iconElement={<Sparkles className="w-4 h-4" />}
              >
                Portfolio entdecken
              </SpecialButtonDark>

              <SpecialButtonDark variant="primary" size="base" onClick={openContactModal}>
                Zusammenarbeiten
              </SpecialButtonDark>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* 2. AUSSTELLUNG BANNER */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden border border-orange-500/30 p-8 md:p-10"
            style={{
              background:
                'linear-gradient(135deg, rgba(234, 88, 12, 0.08), rgba(245, 158, 11, 0.06), rgba(56, 189, 248, 0.06))',
            }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-sky-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-orange-400 uppercase tracking-wider">
                  Aktuelle Ausstellung
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                Kunst im Schaufenster &amp; Entenjagd
              </h3>

              <p className="text-white/70 mb-6 max-w-2xl leading-relaxed">
                Noch bis 5. April 2026 in Holzkirchen: Fünf großformatige Acrylgemälde in der Raiffeisenbank
                und acht kleine Entenbüsten-Miniaturgemälde im Atrium Gesundheitszentrum — eine interaktive
                Entenjagd durch die Marktgemeinde.
              </p>

              <div className="flex flex-wrap gap-4">
                <SpecialButtonDark size="sm" onClick={() => router.push('/ausstellung-holzkirchen')}>Zur Ausstellung →</SpecialButtonDark>

                <a
                  href="https://www.holzkirchen.de/kunst-im-schaufenster"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white/80 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                >
                  holzkirchen.de ↗
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. FEATURED ARTWORK */}
      <section className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Carousel */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.img
                      key={teilenIndex}
                      src={TEILEN_IMAGES[teilenIndex]}
                      alt={`${ARTWORK.title} ${teilenIndex + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      initial={{ opacity: 0, x: 80 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -80 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                  </AnimatePresence>
                </div>

                {/* Chevrons outside AnimatePresence */}
                <button
                  onClick={() =>
                    setTeilenIndex((p) => (p - 1 + TEILEN_IMAGES.length) % TEILEN_IMAGES.length)
                  }
                  className={`${darkCarouselButtonClass} left-3`}
                  aria-label="Vorheriges Bild"
                >
                  <ChevronLeft />
                </button>

                <button
                  onClick={() => setTeilenIndex((p) => (p + 1) % TEILEN_IMAGES.length)}
                  className={`${darkCarouselButtonClass} right-3`}
                  aria-label="Nächstes Bild"
                >
                  <ChevronRight />
                </button>

                <DarkDots total={TEILEN_IMAGES.length} active={teilenIndex} onClick={setTeilenIndex} />
              </motion.div>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-4 leading-tight">
                  <span className="text-cyan-400/80 text-lg block mb-2 tracking-widest font-mono">
                    AUSGEWÄHLTE.ARBEIT:
                  </span>
                  {ARTWORK.title}
                </h2>
              </motion.div>

              <motion.p
                className="text-lg text-white/80 leading-relaxed"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                {ARTWORK.description}
              </motion.p>

              <motion.div
                className="grid grid-cols-2 gap-6 border border-white/10 p-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
              >
                {([
                  ['MEDIUM.TYPE', ARTWORK.medium],
                  ['CREATION.YEAR', ARTWORK.year],
                  ['DIMENSIONS', ARTWORK.dimensions],
                ] as const).map(([label, value]) => (
                  <div key={label}>
                    <div className="text-cyan-400/80 mb-2 font-mono text-xs tracking-wider">
                      {label}
                    </div>
                    <div className="font-medium text-white text-sm">{value}</div>
                  </div>
                ))}

                <div>
                  <div className="text-cyan-400/80 mb-2 font-mono text-xs tracking-wider">STATUS</div>
                  <div className="font-medium text-white text-sm flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                    ACTIVE
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. PORTFOLIO SECTIONS */}
      {PORTFOLIO_SECTIONS.map((section) => (
        <ParallaxSectionDark key={section.title} {...section} bgColor="" />
      ))}

      <FloatingContactButton />
      <Footer />
    </div>
  )
}

// ─── ParallaxSectionDark ──────────────────────────────────────────────────────

const ParallaxSectionDark: React.FC<ParallaxSectionDarkProps> = ({
  textPosition,
  title,
  description,
  images,
  bgColor,
  imageLayout = 'default',
}) => {
  const sectionRef = useRef<HTMLElement>(null)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [gridPage, setGridPage] = useState(0)

  // How many items to show per "page" in the grid-carousel.
  // (Name kept in camelCase to avoid accidental mixups like pageSize vs PAGE_SIZE.)
  const pageSize = 2
  // Guard against empty image arrays so modulo ops don't explode.
  const totalPages = Math.max(1, Math.ceil(images.length / pageSize))

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const imageY1 = useTransform(scrollYProgress, [0, 1], ['10%', '-10%'])
  const imageY2 = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const imageY3 = useTransform(scrollYProgress, [0, 1], ['12%', '-12%'])

  const navigate = (
    delta: number,
    setter: React.Dispatch<React.SetStateAction<number>>,
    total: number
  ) => {
    setDirection(delta)
    setter((i) => (i + delta + total) % total)
  }

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  }

  const isRight = textPosition === 'right'

  return (
    <section ref={sectionRef} className={`py-32 px-6 relative z-10 overflow-hidden ${bgColor}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: isRight ? 100 : -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className={`space-y-6 ${isRight ? 'order-1 lg:order-2' : ''}`}
          >
            <div className="inline-flex items-center text-cyan-400 font-mono text-sm tracking-wider mb-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
              PORTFOLIO.SHOWCASE
            </div>
            <h2 className="text-4xl font-semibold text-white leading-tight tracking-tight md:text-3xl">
              {title}
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">{description}</p>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: isRight ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className={`${
              imageLayout === 'carousel' || imageLayout === 'grid-carousel'
                ? 'relative'
                : 'grid gap-4 grid-cols-2'
            } ${isRight ? 'order-2 lg:order-1' : ''}`}
          >
            {imageLayout === 'grid-carousel' && (
              <div className="relative">
                <div className="grid grid-cols-2 gap-3">
                  {/* FIX: AnimatePresence mode=\"wait\" bekommt genau EIN child (die ganze Page) */}
                  <AnimatePresence initial={false} mode="wait">
                    <motion.div
                      key={gridPage}
                      className="contents"
                      initial={{ opacity: 0, x: 80 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -80 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                      {images
                        .slice(gridPage * pageSize, gridPage * pageSize + pageSize)
                        .map((src, i) => (
                          <div
                            key={`${gridPage}-${i}`}
                            className="aspect-[3/4] bg-white/5 border border-white/10 overflow-hidden"
                          >
                            <img
                              src={src}
                              alt={`${title} ${gridPage * pageSize + i + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <button
                  onClick={() => navigate(-1, setGridPage, totalPages)}
                  className={`${darkCarouselButtonClass} left-3`}
                  aria-label="Vorherige Seite"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={() => navigate(1, setGridPage, totalPages)}
                  className={`${darkCarouselButtonClass} right-3`}
                  aria-label="Nächste Seite"
                >
                  <ChevronRight />
                </button>

                <DarkDots total={totalPages} active={gridPage} onClick={setGridPage} />
              </div>
            )}

            {imageLayout === 'carousel' && (
              <div className="relative">
                <div className="relative aspect-[3/4] bg-white/5 border border-white/10 overflow-hidden">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.img
                      key={carouselIndex}
                      src={images[carouselIndex]}
                      alt={`${title} ${carouselIndex + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                    />
                  </AnimatePresence>
                </div>

                <button
                  onClick={() => navigate(-1, setCarouselIndex, images.length)}
                  className={`${darkCarouselButtonClass} left-3`}
                  aria-label="Vorheriges Bild"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={() => navigate(1, setCarouselIndex, images.length)}
                  className={`${darkCarouselButtonClass} right-3`}
                  aria-label="Nächstes Bild"
                >
                  <ChevronRight />
                </button>

                <DarkDots total={images.length} active={carouselIndex} onClick={setCarouselIndex} />
              </div>
            )}

            {imageLayout === 'landscape' && (
              <>
                <div className="col-span-2 aspect-video bg-white/5 border border-white/10 overflow-hidden">
                  <motion.img
                    src={images[0]}
                    alt={`${title} 1`}
                    className="w-full h-full object-cover"
                    style={{ y: imageY1, scale: 1.2 }}
                  />
                </div>
                <div className="aspect-square bg-white/5 border border-white/10 overflow-hidden">
                  <motion.img
                    src={images[1]}
                    alt={`${title} 2`}
                    className="w-full h-full object-cover"
                    style={{ y: imageY2, scale: 1.2 }}
                  />
                </div>
                <div className="aspect-square bg-white/5 border border-white/10 overflow-hidden">
                  <motion.img
                    src={images[2]}
                    alt={`${title} 3`}
                    className="w-full h-full object-cover"
                    style={{ y: imageY3, scale: 1.2 }}
                  />
                </div>
              </>
            )}

            {imageLayout === 'default' && (
              <>
                <div className="aspect-square bg-white/5 border border-white/10 overflow-hidden">
                  <motion.img
                    src={images[0]}
                    alt={`${title} 1`}
                    className="w-full h-full object-cover"
                    style={{ y: imageY1, scale: 1.2 }}
                  />
                </div>
                <div className="aspect-square bg-white/5 border border-white/10 overflow-hidden">
                  <motion.img
                    src={images[1]}
                    alt={`${title} 2`}
                    className="w-full h-full object-cover"
                    style={{ y: imageY2, scale: 1.2 }}
                  />
                </div>
                <div className="col-span-2 aspect-video bg-white/5 border border-white/10 overflow-hidden">
                  <motion.img
                    src={images[2]}
                    alt={`${title} 3`}
                    className="w-full h-full object-cover"
                    style={{ y: imageY3, scale: 1.2 }}
                  />
                </div>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}