'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Calendar, Image as ImageIcon, Sparkles, X, Send, Check, AlertCircle } from 'lucide-react'
import { useEffect, useState, useCallback } from 'react'
import Footer from '@/components/Footer'
import FloatingClouds from '@/components/FloatingClouds'
import FloatingContactButton from '@/components/FloatingContactButton'
import { SpecialButton } from '@/components/ui/SpecialButton'
import { artworks, Artwork } from '../data/artworks'

interface ReservationForm {
  name: string
  email: string
  phone: string
  address: string
  priceOffer: string
  message: string
}

export default function AusstellungLight() {
  const [reservedIds, setReservedIds] = useState<Set<string>>(new Set())
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)
  const [formData, setFormData] = useState<ReservationForm>({
    name: '',
    email: '',
    phone: '',
    address: '',
    priceOffer: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  // Reservierungen beim Laden abrufen
  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const res = await fetch('/api/ausstellung/reservations')
        if (res.ok) {
          const data = await res.json()
          setReservedIds(new Set(data.reservedIds || []))
        }
      } catch {
        // Stille Fehlerbehandlung – Seite funktioniert auch ohne
      }
    }
    fetchReservations()
  }, [])

  // JSON-LD Schemas
  useEffect(() => {
    const schemas = [
      {
        '@context': 'https://schema.org',
        '@type': 'ExhibitionEvent',
        'name': 'Kunst im Schaufenster – GHWB Studio',
        'description': 'Ausstellung von GHWB Studio bei „Kunst im Schaufenster" – 5 Werke in der Raiffeisenbank Holzkirchen und 8 Entenbüsten-Miniaturen im Atrium Gesundheitszentrum Holzkirchen.',
        'startDate': '2026-02-27',
        'endDate': '2026-04-05',
        'eventStatus': 'https://schema.org/EventScheduled',
        'eventAttendanceMode': 'https://schema.org/OfflineEventAttendanceMode',
        'location': {
          '@type': 'Place',
          'name': 'Raiffeisenbank Holzkirchen',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Marktplatz 11',
            'addressLocality': 'Holzkirchen',
            'postalCode': '83607',
            'addressRegion': 'Bayern',
            'addressCountry': 'DE',
          },
        },
        'organizer': {
          '@type': 'Person',
          'name': 'GHWB Studio',
          'url': 'https://ghwbstudio.de',
        },
        'image': 'https://ghwbstudio.de/images/logo.png',
        'url': 'https://ghwbstudio.de/ausstellung-holzkirchen',
        'offers': {
          '@type': 'AggregateOffer',
          'priceCurrency': 'EUR',
          'lowPrice': '50',
          'highPrice': '650',
          'offerCount': '13',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Wann findet die Ausstellung statt?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Die Ausstellung „Kunst im Schaufenster" läuft vom 27. Februar bis 5. April 2026 in der Raiffeisenbank Holzkirchen, Marktplatz 11.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Wie kann ich ein Werk reservieren?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Klicken Sie auf „Reservieren" beim gewünschten Werk und füllen Sie das kurze Kontaktformular aus. Sie werden zeitnah kontaktiert.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Wo sind die Werke ausgestellt?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Fünf Werke befinden sich im Schaufenster der Raiffeisenbank am Marktplatz 11 in Holzkirchen. Acht kleine Entenbüsten-Miniaturen sind im Atrium Gesundheitszentrum Holzkirchen verteilt.',
            },
          },
          {
            '@type': 'Question',
            'name': 'Kann ich die Werke auch vor Ort kaufen?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Die Werke können über diese Seite reserviert werden. Die Übergabe erfolgt nach individueller Absprache.',
            },
          },
        ],
      },
    ]

    const scriptElements: HTMLScriptElement[] = []
    schemas.forEach(schema => {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)
      scriptElements.push(script)
    })

    return () => {
      scriptElements.forEach(script => {
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }
      })
    }
  }, [])

  const handleReserve = useCallback((artwork: Artwork) => {
    if (reservedIds.has(artwork.id)) return
    setSelectedArtwork(artwork)
    setSubmitSuccess(false)
    setSubmitError(null)
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      priceOffer: artwork.price > 0 ? `${artwork.price}` : '',
      message: '',
    })
  }, [reservedIds])

  const handleCloseModal = useCallback(() => {
    setSelectedArtwork(null)
    setSubmitSuccess(false)
    setSubmitError(null)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (submitError) setSubmitError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedArtwork) return

    if (!formData.name.trim() || !formData.email.trim()) {
      setSubmitError('Bitte geben Sie mindestens Name und E-Mail-Adresse an.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitError('Bitte geben Sie eine gültige E-Mail-Adresse ein.')
      return
    }

    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const res = await fetch('/api/ausstellung/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          artworkId: selectedArtwork.id,
          artworkTitle: selectedArtwork.title,
          ...formData,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Reservierung fehlgeschlagen')
      }

      setReservedIds(prev => new Set([...prev, selectedArtwork.id]))
      setSubmitSuccess(true)

      setTimeout(() => {
        handleCloseModal()
      }, 2500)
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const schaufensterWerke = artworks.filter(a => a.location === 'schaufenster')
  const atriumWerke = artworks.filter(a => a.location === 'atrium')

  return (
    <div className="min-h-screen text-gray-900 relative overflow-hidden bg-white">
      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ zIndex: 20 }}
      >
        <FloatingClouds />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-200 to-white" />

        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 5 }}>
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.06, scale: 1 }}
            transition={{ duration: 3, delay: 1 }}
          >
            <motion.div
              className="absolute top-20 left-20 w-32 h-32 border-2 border-gray-300"
              style={{ transform: 'rotate(45deg)' }}
              initial={{ rotate: 0, scale: 0 }}
              animate={{ rotate: 45, scale: 1 }}
              transition={{ duration: 2, delay: 1.5 }}
            />
            <motion.div
              className="absolute bottom-32 right-32 w-24 h-24 bg-gray-200 rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, delay: 2 }}
            />
          </motion.div>
        </div>

        <div className="relative text-center px-6 max-w-4xl mx-auto" style={{ zIndex: 40 }}>
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.p
              className="text-base text-muted-foreground leading-7 mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Calendar className="w-4 h-4 inline mr-2" />
              27. Februar – 5. April 2026
            </motion.p>

            <motion.p
              className="text-sm text-muted-foreground leading-7 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <MapPin className="w-4 h-4 inline mr-2" />
              Raiffeisenbank Holzkirchen · Marktplatz 11
            </motion.p>

            <motion.h1
              className="text-5xl md:text-6xl font-extrabold text-foreground leading-tight tracking-tight mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              Kunst im Schaufenster
            </motion.h1>

            <motion.p
              className="text-base text-muted-foreground leading-7 max-w-2xl mx-auto mb-16"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              Fünf Originalwerke im Schaufenster der Raiffeisenbank und acht versteckte Entenbüsten-Miniaturen im Atrium Gesundheitszentrum – entdecken Sie Kunst von GHWB Studio in Holzkirchen. Reservieren Sie Ihr Lieblingsstück direkt hier.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <SpecialButton
                variant="secondary"
                size="sm"
                onClick={() => {
                  const galerie = document.getElementById('galerie-section')
                  if (galerie) galerie.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                <ImageIcon className="w-4 h-4 mr-2" />
                Werke ansehen
              </SpecialButton>

              <SpecialButton
                variant="primary"
                size="sm"
                onClick={() => {
                  const galerie = document.getElementById('galerie-section')
                  if (galerie) galerie.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                Jetzt reservieren
              </SpecialButton>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* ÜBER DIE AUSSTELLUNG */}
      <section className="relative py-32 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-gray-900 leading-tight tracking-tight mb-6">
              Fünf Werke. Acht Enten. Ihre Wahl.
            </h2>
            <p className="text-xl text-gray-600 leading-7 max-w-2xl mx-auto">
              Im Rahmen der Aktion „Kunst im Schaufenster" zeigt GHWB Studio Werke an zwei Standorten in Holzkirchen – und eine interaktive Entenjagd im Atrium.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
          >
            <p className="text-base mb-6">
              Fünf Werke erwarten Sie im <strong>Schaufenster der Raiffeisenbank</strong> am Marktplatz 11 – sichtbar rund um die Uhr, auch außerhalb der Öffnungszeiten.
            </p>
            <p className="text-base mb-6">
              Im <strong>Atrium Gesundheitszentrum Holzkirchen</strong> sind acht kleine Entenbüsten-Miniaturen (10 × 10 cm, Acryl auf Holz) im Gebäude verteilt. Finden Sie alle acht! Neben jedem Bild führt ein QR-Code direkt auf diese Seite.
            </p>
            <p className="text-base mb-6">
              Die Arbeiten bewegen sich zwischen <strong>naturalistischer Tiermalerei</strong> und expressiver Farbgebung. Acryl auf Papier trifft auf Acryl mit Blattgold – jedes Werk ein Original, jedes ein Unikat.
            </p>
            <p className="text-base mb-6">
              Wenn Ihnen ein Werk gefällt, können Sie es direkt auf dieser Seite reservieren. Sie erhalten umgehend eine Bestätigung und wir klären die Details persönlich.
            </p>
            <p className="text-base">
              Mehr über die Aktion und die weiteren teilnehmenden Künstler erfahren Sie auf der <a href="https://www.holzkirchen.de/kunst-im-schaufenster" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline underline-offset-2 transition-colors">offiziellen Seite der Marktgemeinde Holzkirchen</a>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GALERIE / WERKE SECTION */}
      <section id="galerie-section" className="relative py-32 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-gray-900 leading-tight tracking-tight mb-6">
              Die Werke
            </h2>
            <p className="text-xl text-gray-600 leading-7 max-w-2xl mx-auto">
              Wählen Sie Ihr Lieblingsstück und reservieren Sie es mit einem Klick.
            </p>
          </motion.div>

          {/* Schaufenster Werke */}
          <div className="mb-12">
            <motion.h3
              className="text-lg font-semibold text-gray-500 uppercase tracking-wider mb-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <MapPin className="w-4 h-4 inline mr-2" />
              Schaufenster · Marktplatz 11
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {schaufensterWerke.map((artwork, index) => (
                <ArtworkCard
                  key={artwork.id}
                  artwork={artwork}
                  index={index}
                  isReserved={reservedIds.has(artwork.id)}
                  onReserve={handleReserve}
                  variant="light"
                />
              ))}
            </div>
          </div>

          {/* Atrium: Entenjagd */}
          <div>
            <motion.h3
              className="text-lg font-semibold text-gray-500 uppercase tracking-wider mb-4 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <MapPin className="w-4 h-4 inline mr-2" />
              Entenjagd · Atrium Gesundheitszentrum
            </motion.h3>

            <motion.p
              className="text-center text-gray-600 mb-8 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Acht kleine Entenbüsten (10 × 10 cm, Acryl auf Holz) sind im Atrium verteilt. Finden Sie alle acht! Neben jedem Bild führt ein QR-Code hierher.
            </motion.p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {atriumWerke.map((artwork, index) => (
                <ArtworkCard
                  key={artwork.id}
                  artwork={artwork}
                  index={index}
                  isReserved={reservedIds.has(artwork.id)}
                  onReserve={handleReserve}
                  variant="light"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="relative py-32 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-gray-900 leading-tight tracking-tight mb-6">
              Häufige Fragen
            </h2>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { q: 'Wann findet die Ausstellung statt?', a: 'Die Ausstellung „Kunst im Schaufenster" läuft vom 27. Februar bis 5. April 2026. Die Werke im Schaufenster sind rund um die Uhr sichtbar.' },
              { q: 'Wo genau sind die Werke ausgestellt?', a: 'Fünf Werke befinden sich im Schaufenster der Raiffeisenbank am Marktplatz 11. Acht kleine Entenbüsten-Miniaturen sind im Atrium Gesundheitszentrum Holzkirchen verteilt – finden Sie alle acht!' },
              { q: 'Wie reserviere ich ein Werk?', a: 'Scrollen Sie zum gewünschten Werk, klicken Sie auf „Reservieren" und füllen Sie das kurze Formular aus. Sie erhalten zeitnah eine persönliche Rückmeldung.' },
              { q: 'Sind die Preise verhandelbar?', a: 'Im Reservierungsformular können Sie einen Preisvorschlag abgeben. Der angezeigte Preis ist der Richtpreis des Künstlers.' },
            ].map((faq, idx) => (
              <details
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(255, 255, 255, 0.8)',
                  borderRadius: '24px',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
                }}
              >
                <summary className="text-lg font-semibold text-gray-900 cursor-pointer flex justify-between items-center w-full p-6">
                  <span>{faq.q}</span>
                  <svg className="w-5 h-5 flex-shrink-0 ml-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <p className="px-6 pb-6 pt-0 text-gray-700 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-32 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6 text-gray-900">Ihr Lieblingsstück wartet.</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Besuchen Sie die Ausstellung vor Ort oder reservieren Sie Ihr Wunschwerk direkt hier – bevor es jemand anderes tut.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SpecialButton
                variant="primary"
                size="sm"
                onClick={() => {
                  const galerie = document.getElementById('galerie-section')
                  if (galerie) galerie.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Zu den Werken
              </SpecialButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer mit internen Links */}
      <section className="relative py-16 px-4 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Mehr entdecken</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/art" className="px-6 py-3 bg-white border border-gray-300 rounded-full text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-colors">
                Alle Kunstwerke
              </a>
              <a href="/photography" className="px-6 py-3 bg-white border border-gray-300 rounded-full text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-colors">
                Fotografie
              </a>
              <a href="/about" className="px-6 py-3 bg-white border border-gray-300 rounded-full text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-colors">
                Über GHWB Studio
              </a>
              <a href="https://www.holzkirchen.de/kunst-im-schaufenster" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white border border-gray-300 rounded-full text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-colors">
                Kunst im Schaufenster ↗
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RESERVIERUNGS-MODAL */}
      <AnimatePresence>
        {selectedArtwork && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
            />

            <motion.div
              className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white/95 border border-gray-200/50 shadow-2xl shadow-black/25 backdrop-blur-xl"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut', type: 'spring', stiffness: 300, damping: 30 }}
            >
              {submitSuccess ? (
                <div className="p-8 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center"
                  >
                    <Check className="w-8 h-8 text-green-600" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Reservierung eingegangen!</h3>
                  <p className="text-gray-600">
                    Vielen Dank für Ihr Interesse an „{selectedArtwork.title}". Sie erhalten in Kürze eine persönliche Rückmeldung.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between p-6 pb-0">
                    <div>
                      <h2 className="text-2xl font-semibold leading-tight tracking-tight text-gray-900">
                        „{selectedArtwork.title}" reservieren
                      </h2>
                      <p className="text-sm mt-1 text-gray-600">
                        {selectedArtwork.technique} · {selectedArtwork.dimensions}
                        {selectedArtwork.price > 0 && ` · Richtpreis: ${selectedArtwork.price.toLocaleString('de-DE')} €`}
                      </p>
                    </div>
                    <button
                      onClick={handleCloseModal}
                      className="flex-shrink-0 ml-4 p-2 rounded-lg transition-all duration-200 hover:bg-gray-100/80 text-gray-500 hover:text-gray-900 hover:scale-110"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="p-6 pt-4 space-y-4">
                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-lg flex items-center gap-3 bg-red-50 border border-red-200"
                      >
                        <AlertCircle className="w-5 h-5 text-red-500" />
                        <span className="text-red-600 text-sm">{submitError}</span>
                      </motion.div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="res-name" className="block text-sm font-medium mb-1 text-gray-700">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="res-name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Ihr Name"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="res-email" className="block text-sm font-medium mb-1 text-gray-700">
                          E-Mail <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="res-email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="ihre@email.de"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="res-phone" className="block text-sm font-medium mb-1 text-gray-700">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          id="res-phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+49 ..."
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="res-price" className="block text-sm font-medium mb-1 text-gray-700">
                          Preisvorschlag (€)
                        </label>
                        <input
                          type="text"
                          id="res-price"
                          name="priceOffer"
                          value={formData.priceOffer}
                          onChange={handleInputChange}
                          placeholder={selectedArtwork.price > 0 ? `Richtpreis: ${selectedArtwork.price} €` : 'Ihr Vorschlag'}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="res-address" className="block text-sm font-medium mb-1 text-gray-700">
                        Adresse
                      </label>
                      <input
                        type="text"
                        id="res-address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Straße, PLZ, Ort"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="res-message" className="block text-sm font-medium mb-1 text-gray-700">
                        Nachricht (optional)
                      </label>
                      <textarea
                        id="res-message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Ihre Nachricht..."
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-colors resize-vertical"
                      />
                    </div>

                    <SpecialButton
                      variant="primary"
                      size="sm"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Wird gesendet...'
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Verbindlich reservieren
                        </>
                      )}
                    </SpecialButton>

                    <p className="text-xs text-gray-500">
                      Ihre Daten werden vertraulich behandelt und ausschließlich für diese Reservierung verwendet.
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <FloatingContactButton />
      <Footer />
    </div>
  )
}

/* ─── ARTWORK CARD COMPONENT ─── */
function ArtworkCard({
  artwork,
  index,
  isReserved,
  onReserve,
  variant,
}: {
  artwork: Artwork
  index: number
  isReserved: boolean
  onReserve: (artwork: Artwork) => void
  variant: 'light' | 'dark'
}) {
  const isLight = variant === 'light'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className={`rounded-2xl overflow-hidden transition-all duration-300 ${
          isLight
            ? 'bg-white border border-gray-200 shadow-sm hover:shadow-lg'
            : 'bg-gray-800/40 border border-gray-700 hover:border-gray-600'
        } ${isReserved ? 'opacity-60' : ''}`}
        style={
          isLight
            ? {
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              }
            : undefined
        }
      >
        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
          {artwork.placeholder ? (
            <div
              className={`absolute inset-0 flex items-center justify-center ${
                isLight ? 'bg-gray-100' : 'bg-gray-800'
              } ${isReserved ? 'grayscale' : ''}`}
            >
              <ImageIcon className={`w-16 h-16 ${isLight ? 'text-gray-300' : 'text-gray-600'}`} />
              <span className={`absolute bottom-4 text-xs ${isLight ? 'text-gray-400' : 'text-gray-500'}`}>
                Bild folgt
              </span>
            </div>
          ) : (
            <Image
              src={artwork.image}
              alt={artwork.alt}
              fill
              className={`object-cover transition-transform duration-500 group-hover:scale-105 ${isReserved ? 'grayscale' : ''}`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          )}

          {isReserved && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <span className="px-4 py-2 bg-red-600 text-white font-bold text-sm uppercase tracking-wider rounded">
                Reserviert
              </span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-5">
          <h3 className={`text-lg font-semibold mb-1 ${isLight ? 'text-gray-900' : 'text-white'}`}>
            {artwork.title}
          </h3>
          <p className={`text-sm mb-1 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
            {artwork.technique}
          </p>
          <p className={`text-sm mb-3 ${isLight ? 'text-gray-500' : 'text-gray-500'}`}>
            {artwork.dimensions}
          </p>

          {artwork.price > 0 && (
            <p className={`text-lg font-semibold mb-4 ${isLight ? 'text-gray-900' : 'text-white'}`}>
              {artwork.price.toLocaleString('de-DE')} €
            </p>
          )}

          {isReserved ? (
            <div className={`text-center py-2 px-4 rounded-full text-sm font-semibold ${
              isLight ? 'bg-red-50 text-red-600 border border-red-200' : 'bg-red-900/30 text-red-400 border border-red-800'
            }`}>
              Reserviert
            </div>
          ) : artwork.placeholder ? (
            <div className={`text-center py-2 px-4 rounded-full text-sm ${
              isLight ? 'bg-gray-100 text-gray-400' : 'bg-gray-700 text-gray-500'
            }`}>
              Wird noch bekannt gegeben
            </div>
          ) : (
            <button
              onClick={() => onReserve(artwork)}
              className={`w-full py-2 px-4 rounded-full text-sm font-semibold transition-all duration-200 ${
                isLight
                  ? 'bg-gray-900 text-white hover:bg-gray-800 active:scale-[0.98]'
                  : 'bg-white text-gray-900 hover:bg-gray-100 active:scale-[0.98]'
              }`}
            >
              Reservieren
            </button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
