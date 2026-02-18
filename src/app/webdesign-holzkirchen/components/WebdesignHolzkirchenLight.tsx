'use client'

import { motion } from 'framer-motion'
import { Monitor, Zap, Users, Palette, CheckCircle, Award, Sparkles, ChevronDown } from 'lucide-react'
import { useEffect } from 'react'
import Footer from '@/components/Footer'
import FloatingClouds from '@/components/FloatingClouds'
import FloatingContactButton from '@/components/FloatingContactButton'
import { SpecialButton } from '@/components/ui/SpecialButton'

export default function WebdesignHolzkirchenLight() {

  useEffect(() => {
    // JSON-LD Schemas für SEO
    const schemas = [
      {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'name': 'GHWB Studio - Webdesign Holzkirchen',
        'description': 'Professionelles Webdesign und UX/UI Design für Unternehmen im Raum Holzkirchen, Miesbach, Tegernsee und München Oberland',
        'url': 'https://ghwb.studio/webdesign-holzkirchen',
        'telephone': '+49',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Holzkirchen',
          'addressLocality': 'Holzkirchen',
          'addressRegion': 'Bayern',
          'addressCountry': 'DE'
        },
        'areaServed': ['Holzkirchen', 'Miesbach', 'Tegernsee', 'München Oberland'],
        'image': 'https://ghwb.studio/images/logo.png',
        'sameAs': ['https://linkedin.com', 'https://instagram.com']
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Was kostet professionelles Webdesign in Holzkirchen?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Die Investition hängt von Umfang und Anforderungen ab. Ein Website-Relaunch mit modernem Design, Barrierefreiheit und Performance-Optimierung startet bei Projekten im mittleren fünfstelligen Bereich.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Wie lange dauert ein Website-Projekt?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Von Konzept bis Launch rechnen Sie mit 8–16 Wochen, abhängig von Komplexität, Inhaltsumfang und Abstimmungsprozessen.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Warum ist Barrierefreiheit wichtig?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Seit dem Barrierefreiheitsstärkungsgesetz (BFSG) sind barrierefreie Websites ab 2025 Pflicht. Gleichzeitig verbessern Sie Reichweite, SEO und Nutzererlebnis für alle Besucher.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Arbeiten Sie auch mit Unternehmen außerhalb von Holzkirchen?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ja. Der Fokus liegt auf dem Raum Holzkirchen, Miesbach, Tegernsee, Rosenheim und München Oberland – digitale Zusammenarbeit ermöglicht jedoch auch überregionale Projekte.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Welche Technologien nutzen Sie für Webprojekte?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Moderne, performanceoptimierte Technologien wie Next.js, React und semantisches HTML – stets auf Zukunftssicherheit, Barrierefreiheit und Skalierbarkeit ausgelegt.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Bieten Sie auch laufende Website-Betreuung an?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Nach Launch unterstütze ich Sie bei Updates, Performance-Monitoring und kontinuierlicher Optimierung – entweder projektbasiert oder als fortlaufende Zusammenarbeit.'
            }
          }
        ]
      }
    ];

    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, []);

  const services = [
    { icon: Palette, title: 'UX/UI Design', description: 'Von der Konzeption über Wireframes bis zum finalen Interface-Design – nutzerfreundlich, modern und markenkonform.' },
    { icon: Monitor, title: 'Webentwicklung', description: 'Technisch saubere Umsetzung mit modernen Frameworks, semantischem Code und optimierter Performance.' },
    { icon: CheckCircle, title: 'Barrierefreiheit', description: 'WCAG 2.1 AA-konforme Implementierung für gesetzeskonforme und inklusive Websites.' },
    { icon: Zap, title: 'Performance-Optimierung', description: 'Core Web Vitals-Optimierung, schnelle Ladezeiten und SEO-Readiness für bessere Rankings.' },
  ];

  const process = [
    { step: '01', title: 'Analyse & Strategie', description: 'Wir klären Ihre Ziele, Zielgruppen und technischen Anforderungen. Aus diesem Verständnis entsteht ein klares Projektfundament.' },
    { step: '02', title: 'Konzept & Struktur', description: 'Informationsarchitektur, User Flows und Wireframes bilden die Basis. Hier entsteht die Struktur Ihrer Website – logisch, nutzerfreundlich, durchdacht.' },
    { step: '03', title: 'Design & Prototyping', description: 'Visuelles Interface-Design im Einklang mit Ihrer Marke. Interaktive Prototypen ermöglichen frühes Feedback und Iteration vor der Entwicklung.' },
    { step: '04', title: 'Entwicklung & Testing', description: 'Umsetzung mit modernen Technologien, semantischem Code und barrierefreier Struktur. Umfassende Tests garantieren Qualität über alle Geräte und Browser hinweg.' },
    { step: '05', title: 'Launch & Optimierung', description: 'Koordinierter Go-Live mit Performance-Monitoring. Anschließend kontinuierliche Optimierung auf Basis realer Nutzerdaten.' },
  ];

  return (
    <div className="min-h-screen text-gray-900 relative overflow-hidden bg-white">
      <style jsx>{`
        details {
          transition: all 0.3s ease;
        }
        details:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8) !important;
        }
        details summary {
          list-style: none;
          transition: opacity 0.2s ease;
        }
        details summary::-webkit-details-marker {
          display: none;
        }
        details summary:hover {
          opacity: 0.9;
        }
        details summary :global(svg) {
          transition: transform 0.3s ease;
          transform: rotate(0deg);
        }
        details[open] summary :global(svg) {
          transform: rotate(180deg) !important;
        }
      `}</style>

      {/* HERO SECTION - EXACTLY LIKE OTHER LIGHT PAGES */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ zIndex: 20 }}
      >
        {/* Floating Clouds */}
        <FloatingClouds />
        {/* Background gradient - matching other pages */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-200 to-white" />

        {/* Subtle geometric background elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 5 }}>
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.06, scale: 1 }}
            transition={{ duration: 3, delay: 1 }}
          >
            {/* Minimale geometrische Formen */}
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
            
            <motion.div 
              className="absolute top-32 right-20 w-40 h-1 bg-gray-200"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 1.8 }}
            />
            <motion.div 
              className="absolute bottom-40 left-32 w-1 h-40 bg-gray-200"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.5, delay: 2.2 }}
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
            {/* Subtitle */}
            <motion.p 
              className="text-base text-muted-foreground leading-7 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Webdesign • UX/UI • Barrierefreiheit
            </motion.p>

            {/* Main Title */}
            <motion.h1 
              className="text-6xl font-extrabold text-foreground leading-tight tracking-tight mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              Webdesign Holzkirchen
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-base text-muted-foreground leading-7 max-w-2xl mx-auto mb-16"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              Professionelles Webdesign, barrierefreie Umsetzung und Performance-Optimierung für Unternehmen im Raum Holzkirchen, Miesbach, Tegernsee und München Oberland.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <SpecialButton 
                variant="secondary"
                size="sm"
                onClick={() => { const leistungen = document.getElementById('leistungen-section'); if (leistungen) leistungen.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Leistungen
              </SpecialButton>

              <SpecialButton 
                variant="primary"
                size="sm"
                onClick={() => { 
                  const event = new CustomEvent('openContactModal');
                  window.dispatchEvent(event);
                }}
              >
                Projekt anfragen
              </SpecialButton>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* FÜR WEN SECTION */}
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
              Für etablierte Unternehmen mit Qualitätsanspruch
            </h2>
            <p className="text-xl text-gray-600 leading-7 max-w-2xl mx-auto">
              Sie wissen: Ihre Website ist mehr als digitale Visitenkarte. Sie ist strategisches Werkzeug für Vertrauen, Sichtbarkeit und Conversion. Genau hier setzt professionelles Webdesign an.
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
              Sie benötigen einen <strong>Website-Relaunch</strong>, weil Ihre aktuelle Präsenz nicht mehr zeitgemäß ist – technisch veraltet, visuell überholt oder strukturell unübersichtlich. Oder Sie planen eine komplett neue Website, die Ihre Marke professionell repräsentiert und messbare Ergebnisse liefert.
            </p>
            <p className="text-base mb-6">
              Als UX/UI Designer und Webentwickler begleite ich Unternehmen im Raum <strong>Holzkirchen, Miesbach, Tegernsee und München Oberland</strong> bei strategischen Webprojekten: von der ersten Konzeption über nutzerzentriertes Design bis zur technisch fundierten Umsetzung. Mit Fokus auf <strong>Barrierefreiheit (BFSG/WCAG)</strong>, Performance und nachhaltiger Wartbarkeit.
            </p>
            <p className="text-base">
              Wenn Sie Wert auf durchdachte Prozesse, klare Kommunikation und hochwertige Ergebnisse legen – dann sprechen wir die gleiche Sprache.
            </p>
          </motion.div>
        </div>
      </section>

      {/* LEISTUNGEN SECTION */}
      <section id="leistungen-section" className="relative py-32 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-gray-900 leading-tight tracking-tight mb-6">
              Leistungen für Ihr Webprojekt
            </h2>
            <p className="text-xl text-gray-600 leading-7 max-w-2xl mx-auto">
              Von der strategischen Konzeption bis zum technischen Go-Live – alles aus einer Hand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <Icon className="w-10 h-10 text-blue-600" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABLAUF SECTION */}
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
              Der Ablauf: Von der Idee zum Launch
            </h2>
            <p className="text-xl text-gray-600 leading-7 max-w-2xl mx-auto">
              Strukturiert, transparent und effizient – so läuft ein Webprojekt bei GHWB Studio ab.
            </p>
          </motion.div>

          <div className="space-y-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-6 items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center" style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.8)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
                }}>
                  <span className="text-2xl font-bold text-blue-700">{item.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WARUM GHWB SECTION */}
      <section className="relative py-32 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-gray-900 leading-tight tracking-tight mb-6">
              Warum GHWB Studio?
            </h2>
            <p className="text-xl text-gray-600 leading-7 max-w-2xl mx-auto">
              Expertise, Methodik und Qualitätsanspruch für nachhaltige Webprojekte.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              borderRadius: '24px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
              padding: '24px'
            }}>
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 flex-shrink-0 text-blue-700" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Langjährige Erfahrung in Enterprise-Projekten</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Über 8 Jahre UX/UI-Erfahrung in Großprojekten für Unternehmen wie Infineon, Bundesdruckerei und Medizinische Dienste. Diese Erfahrung fließt in jedes Projekt ein – egal ob Mittelstand oder Großunternehmen.
                  </p>
                </div>
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              borderRadius: '24px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
              padding: '24px'
            }}>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 flex-shrink-0 text-blue-700" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Barrierefreiheit als Standard</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Mit über 3 Jahren Spezialisierung auf digitale Barrierefreiheit (WCAG 2.1 AA, BFSG-konform) sind inklusive, gesetzeskonforme Websites keine Zusatzleistung – sondern integraler Bestandteil jedes Projekts.
                  </p>
                </div>
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              borderRadius: '24px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
              padding: '24px'
            }}>
              <div className="flex items-start gap-4">
                <Zap className="w-8 h-8 flex-shrink-0 text-blue-700" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Moderne Technologien & Performance</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Einsatz zukunftssicherer, performanceoptimierter Technologien (Next.js, React, semantisches HTML). Websites, die nicht nur gut aussehen, sondern auch technisch überzeugen – messbar schnell, SEO-optimiert, wartbar.
                  </p>
                </div>
              </div>
            </div>

            <div style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              borderRadius: '24px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
              padding: '24px'
            }}>
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 flex-shrink-0 text-blue-700" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Agile Methodik & transparente Kommunikation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Scrum Product Owner & Master-Erfahrung aus 21-Millionen-Euro-Projekten. Sie erhalten regelmäßige Updates, klare Meilensteine und direkten Austausch – ohne Agentur-Overhead.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
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
            <details style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              borderRadius: '24px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
            }}>
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer flex justify-between items-center w-full p-6">
                <span>Was kostet professionelles Webdesign in Holzkirchen?</span>
                <ChevronDown className="w-5 h-5 flex-shrink-0 ml-2" />
              </summary>
              <p className="px-6 pb-6 pt-0 text-gray-700 leading-relaxed">Die Investition hängt von Umfang und Anforderungen ab. Ein Website-Relaunch mit modernem Design, Barrierefreiheit und Performance-Optimierung startet bei Projekten im mittleren fünfstelligen Bereich.</p>
            </details>

            <details style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              borderRadius: '24px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
            }}>
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer flex justify-between items-center w-full p-6">
                <span>Wie lange dauert ein Website-Projekt?</span>
                <ChevronDown className="w-5 h-5 flex-shrink-0 ml-2" />
              </summary>
              <p className="px-6 pb-6 pt-0 text-gray-700 leading-relaxed">Von Konzept bis Launch rechnen Sie mit 8–16 Wochen, abhängig von Komplexität, Inhaltsumfang und Abstimmungsprozessen.</p>
            </details>

            <details style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              borderRadius: '24px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
            }}>
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer flex justify-between items-center w-full p-6">
                <span>Warum ist Barrierefreiheit wichtig?</span>
                <ChevronDown className="w-5 h-5 flex-shrink-0 ml-2" />
              </summary>
              <p className="px-6 pb-6 pt-0 text-gray-700 leading-relaxed">Seit dem Barrierefreiheitsstärkungsgesetz (BFSG) sind barrierefreie Websites ab 2025 Pflicht. Gleichzeitig verbessern Sie Reichweite, SEO und Nutzererlebnis für alle Besucher.</p>
            </details>

            <details style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              borderRadius: '24px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
            }}>
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer flex justify-between items-center w-full p-6">
                <span>Arbeiten Sie auch mit Unternehmen außerhalb von Holzkirchen?</span>
                <ChevronDown className="w-5 h-5 flex-shrink-0 ml-2" />
              </summary>
              <p className="px-6 pb-6 pt-0 text-gray-700 leading-relaxed">Ja. Der Fokus liegt auf dem Raum Holzkirchen, Miesbach, Tegernsee, Rosenheim und München Oberland – digitale Zusammenarbeit ermöglicht jedoch auch überregionale Projekte.</p>
            </details>

            <details style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              borderRadius: '24px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
            }}>
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer flex justify-between items-center w-full p-6">
                <span>Welche Technologien nutzen Sie für Webprojekte?</span>
                <ChevronDown className="w-5 h-5 flex-shrink-0 ml-2" />
              </summary>
              <p className="px-6 pb-6 pt-0 text-gray-700 leading-relaxed">Moderne, performanceoptimierte Technologien wie Next.js, React und semantisches HTML – stets auf Zukunftssicherheit, Barrierefreiheit und Skalierbarkeit ausgelegt.</p>
            </details>

            <details style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              borderRadius: '24px',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08), 0 1px 4px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
            }}>
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer flex justify-between items-center w-full p-6">
                <span>Bieten Sie auch laufende Website-Betreuung an?</span>
                <ChevronDown className="w-5 h-5 flex-shrink-0 ml-2" />
              </summary>
              <p className="px-6 pb-6 pt-0 text-gray-700 leading-relaxed">Nach Launch unterstütze ich Sie bei Updates, Performance-Monitoring und kontinuierlicher Optimierung – entweder projektbasiert oder als fortlaufende Zusammenarbeit.</p>
            </details>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="relative py-32 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6 text-gray-900">Bereit für Ihr Website-Projekt?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns in einem unverbindlichen Erstgespräch klären, wie professionelles Webdesign Ihr Unternehmen voranbringt.
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
                  const event = new CustomEvent('openContactModal');
                  window.dispatchEvent(event);
                }}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Jetzt Kontakt aufnehmen
              </SpecialButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer mit internen Links */}
      <section className="relative py-16 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Weitere Leistungen</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/design" className="px-6 py-3 bg-white border border-gray-300 rounded-full text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-colors">
                UX/UI Design
              </a>
              <a href="/ai-integration" className="px-6 py-3 bg-white border border-gray-300 rounded-full text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-colors">
                AI Integration
              </a>
              <a href="/photography" className="px-6 py-3 bg-white border border-gray-300 rounded-full text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-colors">
                Fotografie
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <FloatingContactButton />
      <Footer />
    </div>
  );
}
