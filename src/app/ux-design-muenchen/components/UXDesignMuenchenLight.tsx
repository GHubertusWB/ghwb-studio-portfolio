'use client'

import { motion } from 'framer-motion'
import { Zap, Users, Palette, CheckCircle, Award, Sparkles, ChevronDown, Lightbulb, Grid3x3, Eye } from 'lucide-react'
import { useEffect } from 'react'
import Footer from '@/components/Footer'
import FloatingClouds from '@/components/FloatingClouds'
import FloatingContactButton from '@/components/FloatingContactButton'
import { SpecialButton } from '@/components/ui/SpecialButton'

export default function UXDesignMuenchenLight() {

  useEffect(() => {
    const schemas = [
      {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        'name': 'GHWB Studio - UX Design München',
        'description': 'Professionelles UX Design, User Research und Design Systems für digitale Produkte in München. Strategische Nutzerorientierung für Enterprise und Scale-ups.',
        'url': 'https://ghwb.studio/ux-design-muenchen',
        'areaServed': ['München', 'Bayern', 'Deutschland'],
        'serviceType': 'UX Design & Strategy',
        'image': 'https://ghwb.studio/images/logo.png',
        'priceRange': '€€€€',
        'contactPoint': {
          '@type': 'ContactPoint',
          'contactType': 'Business',
          'email': 'kontakt@ghwb.studio'
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Was kostet professionelles UX Design in München?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Die Investition hängt von Projektumfang, Zielgruppe und Komplexität ab. Ein umfassendes UX-Projekt mit Research, Strategy und Design Systems liegt im mittleren bis hohen fünfstelligen Bereich.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Wie lange dauert ein UX Design Projekt?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Von Research und Strategy bis zur finalen Handoff rechnen Sie mit 10–20 Wochen, abhängig von Produktkomplexität, Team-Größe und Iterationsschleifen.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Warum ist strategisches UX Design wichtiger als reines Interface Design?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Strategisches UX Design validiert Annahmen durch User Research und stellt Nutzer in den Mittelpunkt der Entscheidungsfindung. Reines Gestalten ohne Forschung führt zu Lösungen, die nicht wirken. Strategie = messbarer ROI.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Arbeiten Sie auch mit Unternehmen außerhalb von München?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ja. Der Fokus liegt auf München und Bayern – digitale Zusammenarbeit ermöglicht jedoch auch überregionale Projekte mit Enterprise-Kunden bundesweit.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Welche Forschungsmethoden nutzen Sie im UX Design?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'User Interviews, Contextual Inquiry, Usability Testing, Card Sorting, Journey Mapping und quantitative Nutzungsdaten. Methoden richten sich nach Produktphase und Forschungszielen.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Bieten Sie auch Design System Services an?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Ja. Wir entwickeln Design Systems, die Konsistenz skalieren, Teams schneller arbeiten lassen und Wartung vereinfachen – von der Architektur bis zur Dokumentation in Figma.'
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
    { icon: Eye, title: 'User Research & Strategy', description: 'Nutzer verstehen, Ziele definieren und datengetriebene Strategie entwickeln – Grundlage für wirkungsvolles Design.' },
    { icon: Palette, title: 'UX/UI Design & Prototyping', description: 'Nachvollziehbare Interaktionskonzepte, Wireframes und interaktive Prototypen für schnelles Lernen und Validierung.' },
    { icon: Grid3x3, title: 'Design Systems & Komponenten', description: 'Skalierbare Design-Systeme und UI-Bibliotheken für Konsistenz, Wartbarkeit und Geschwindigkeit über Teams hinweg.' },
    { icon: CheckCircle, title: 'Usability Testing & Validation', description: 'Iteratives Testen mit echten Nutzern, um Designannahmen zu validieren und kontinuierlich zu optimieren.' },
  ];

  const process = [
    { step: '01', title: 'Research & Discovery', description: 'Wir beginnen mit User Research: Interviews, Daten-Analyse und Contextual Inquiry. Was brauchen Ihre Nutzer wirklich?' },
    { step: '02', title: 'Strategy & Definition', description: 'Wir definieren Ziele, erstellen User Personas, Journey Maps – eine konsensfähige UX-Roadmap für das Projekt.' },
    { step: '03', title: 'Design & Prototyping', description: 'Wireframes, visuelle Designs und interaktive Prototypen. Schnelle Iterationen mit stakeholder feedback.' },
    { step: '04', title: 'Testing & Validierung', description: 'Usability Tests mit Zielnutzern. Wir verfeinern, bis Metriken stimmen und Nutzerzufriedenheit messbar steigt.' },
    { step: '05', title: 'Handoff & Begleitung', description: 'Übergabe an Entwicklung mit Designspecs und Komponentendokumentation. Bei Bedarf Begleitung in der Umsetzung.' },
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
            <motion.p 
              className="text-base text-muted-foreground leading-7 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              User Experience Design • Strategische Produktentwicklung • München
            </motion.p>

            <motion.h1 
              className="text-6xl font-extrabold text-foreground leading-tight tracking-tight mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              UX Design München
            </motion.h1>

            <motion.p 
              className="text-base text-muted-foreground leading-7 max-w-2xl mx-auto mb-16"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              Strategisches User Experience Design für digitale Produkte: Nutzerforschung, Design Systems und validierte Lösungen für Enterprise und Scale-ups in München.
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
                Strategie-Gespräch
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
              Für Unternehmen mit Produktambition
            </h2>
            <p className="text-xl text-gray-600 leading-7 max-w-2xl mx-auto">
              Sie entwickeln digitale Produkte und wissen: Gutes UX Design unterscheidet Sie vom Wettbewerb. Strategische Nutzerorientierung ist kein Nice-to-Have – sie ist Geschäftsstrategie.
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
              Sie haben ein digitales Produkt, das Nutzern frustriert – oder Sie planen ein neues und wollen von Start an die richtige Richtung einschlagen. Sie suchen einen UX Partner, der nicht nur besser designt, sondern <strong>strategisch vorgeht</strong>: User Research statt Vermutungen, validierte Hypothesen statt Kreativität ohne Grund.
            </p>
            <p className="text-base mb-6">
              Als UX Designer und Strategist begleite ich <strong>Enterprise-Unternehmen und wachsende Scale-ups in München</strong> bei der Entwicklung digitaler Produkte: von der ersten User Research bis zum Design System, das Ihr Team schneller arbeiten lässt. Mit über 8 Jahren Erfahrung in komplexen Produktprojekten.
            </p>
            <p className="text-base">
              Wenn Sie Wert auf <strong>datengetriebenes Design, iteratives Arbeiten und messbaren Nutzer-Impact</strong> legen – dann sprechen wir die gleiche Sprache.
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
              Leistungen im UX Design
            </h2>
            <p className="text-xl text-gray-600 leading-7 max-w-2xl mx-auto">
              Von der strategischen Forschung bis zur skalierbaren Design-System – alles aus einer Hand für nachhaltige Produktlösungen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
              Der UX Design Prozess
            </h2>
            <p className="text-xl text-gray-600 leading-7 max-w-2xl mx-auto">
              Strukturiert, iterativ, nutzer-zentriert – so arbeiten wir bei jedem Projekt.
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
              Expertise, Methodik und Leidenschaft für nutzerzentriertes Design.
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">8+ Jahre UX-Expertise in Enterprise-Projekten</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Komplexe Produktprojekte bei Infineon, Bundesdruckerei und Medizinische Dienste. Diese Erfahrung bringt Struktur, Geschwindigkeit und Qualität in jedes Projekt – unabhängig von Größe.
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
                <Lightbulb className="w-8 h-8 flex-shrink-0 text-blue-700" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Design Thinking & strategische UX ist mehr als Ästhetik</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Wir folgen etablierten UX-Methoden: User Research, Persona Development, Journey Mapping und iteratives Testing. Jede Design-Entscheidung ist datengestützt, nicht intuitiv.
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
                <Grid3x3 className="w-8 h-8 flex-shrink-0 text-blue-700" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Design Systems für Skalierung und Geschwindigkeit</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Keine isolierten Designs. Wir konzipieren skalierbare Systeme – Komponenten-Bibliotheken, Design Guidelines und Figma-Handoff, die Ihren Teams später Zeit spart.
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Agile Zusammenarbeit ohne Agentur-Overhead</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Scrum Master & Product Owner Erfahrung aus Millionen-Euro-Projekten. Regelmäßige Check-ins, klare Meilensteine, direkter Austausch – ohne Bürokratie.
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
              Häufige Fragen zu UX Design
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
                <span>Was kostet professionelles UX Design in München?</span>
                <ChevronDown className="w-5 h-5 flex-shrink-0 ml-2" />
              </summary>
              <p className="px-6 pb-6 pt-0 text-gray-700 leading-relaxed">Die Investition hängt von Projektumfang, Zielgruppe und Komplexität ab. Ein umfassendes UX-Projekt mit Research, Strategy und Design Systems liegt im mittleren bis hohen fünfstelligen Bereich.</p>
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
                <span>Wie lange dauert ein UX Design Projekt?</span>
                <ChevronDown className="w-5 h-5 flex-shrink-0 ml-2" />
              </summary>
              <p className="px-6 pb-6 pt-0 text-gray-700 leading-relaxed">Von Research und Strategy bis zur finalen Handoff rechnen Sie mit 10–20 Wochen, abhängig von Produktkomplexität, Team-Größe und Iterationsschleifen.</p>
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
                <span>Warum ist strategisches UX Design wichtiger als reines Interface Design?</span>
                <ChevronDown className="w-5 h-5 flex-shrink-0 ml-2" />
              </summary>
              <p className="px-6 pb-6 pt-0 text-gray-700 leading-relaxed">Strategisches UX Design validiert Annahmen durch User Research und stellt Nutzer in den Mittelpunkt der Entscheidungsfindung. Reines Gestalten ohne Forschung führt zu Lösungen, die nicht wirken. Strategie = messbarer ROI.</p>
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
                <span>Arbeiten Sie auch mit Unternehmen außerhalb von München?</span>
                <ChevronDown className="w-5 h-5 flex-shrink-0 ml-2" />
              </summary>
              <p className="px-6 pb-6 pt-0 text-gray-700 leading-relaxed">Ja. Der Fokus liegt auf München und Bayern – digitale Zusammenarbeit ermöglicht jedoch auch überregionale Projekte mit Enterprise-Kunden bundesweit.</p>
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
                <span>Welche Forschungsmethoden nutzen Sie im UX Design?</span>
                <ChevronDown className="w-5 h-5 flex-shrink-0 ml-2" />
              </summary>
              <p className="px-6 pb-6 pt-0 text-gray-700 leading-relaxed">User Interviews, Contextual Inquiry, Usability Testing, Card Sorting, Journey Mapping und quantitative Nutzungsdaten. Methoden richten sich nach Produktphase und Forschungszielen.</p>
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
                <span>Bieten Sie auch Design System Services an?</span>
                <ChevronDown className="w-5 h-5 flex-shrink-0 ml-2" />
              </summary>
              <p className="px-6 pb-6 pt-0 text-gray-700 leading-relaxed">Ja. Wir entwickeln Design Systems, die Konsistenz skalieren, Teams schneller arbeiten lassen und Wartung vereinfachen – von der Architektur bis zur Dokumentation in Figma.</p>
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
            <h2 className="text-5xl font-bold mb-6 text-gray-900">Bereit für strategisches UX Design?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns in einem kostenlosen Strategie-Gespräch klären, wie UX Design Ihr Produkt und Geschäft voranbringt.
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
              <a href="/webdesign-holzkirchen" className="px-6 py-3 bg-white border border-gray-300 rounded-full text-gray-700 hover:border-blue-400 hover:text-blue-600 transition-colors">
                Webdesign
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
