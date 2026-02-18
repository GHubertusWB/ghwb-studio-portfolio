'use client'

import { motion } from 'framer-motion'
import { Monitor, Zap, Users, Eye, Palette, CheckCircle, MapPin, Clock, Award, ArrowRight, Sparkles, ChevronDown } from 'lucide-react'
import { useEffect } from 'react'
import Footer from '@/components/Footer'
import FloatingContactButton from '@/components/FloatingContactButton'
import { SpecialButtonDark } from '@/components/ui/SpecialButtonDark'

export default function WebdesignHolzkirchenDark() {
  
  useEffect(() => {
    // JSON-LD Schema werden nur im Light Mode injected (Duplikate vermeiden)
  }, []);

  const benefits = [
    { icon: Eye, title: 'Nutzerzentrierte Gestaltung', description: 'UX-Research und datenbasierte Designentscheidungen' },
    { icon: Zap, title: 'Performance & Ladezeiten', description: 'Optimierte Performance für bessere Conversion' },
    { icon: Users, title: 'Barrierefreiheit (BFSG)', description: 'WCAG-konforme Umsetzung' },
  ];

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
    <div className="min-h-screen text-white relative overflow-hidden" style={{ background: 'linear-gradient(to bottom right, var(--background), var(--background), rgba(42, 47, 54, 0.2))' }}>
      <style jsx>{`
        details {
          transition: all 0.3s ease;
        }
        details:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15) !important;
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
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />

        {/* HUD Overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 15 }}>
          <motion.div 
            className="relative w-full h-full" 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 0.4, scale: 1 }} 
            transition={{ duration: 2, delay: 1 }}
          >
            <svg width="100vw" height="100vh" viewBox="0 0 1920 1080" className="drop-shadow-lg" style={{ filter: `drop-shadow(0 0 20px white)` }}>
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
            </svg>
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
              className="text-base text-cyan-400/80 leading-7 mb-2 tracking-widest font-mono"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              GHWB.WEBDESIGN.SYSTEM:
            </motion.p>

            <motion.p 
              className="text-base text-gray-400 leading-7 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              <MapPin className="w-4 h-4 inline mr-2" />
              Holzkirchen • München Oberland
            </motion.p>

            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.4)' }}
            >
              Webdesign Holzkirchen –<br/>
              Strategisches UX/UI für Ihr Unternehmen
            </motion.h1>

            <motion.p 
              className="text-base text-gray-400 leading-7 max-w-2xl mx-auto mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              Professionelles Webdesign, barrierefreie Umsetzung und Performance-Optimierung für Unternehmen im Raum Holzkirchen, Miesbach, Tegernsee und München Oberland. Strategisch, technisch fundiert, nutzerorientiert.
            </motion.p>

            {/* Benefits Pills */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-10"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-full text-sm text-gray-300">
                    <Icon className="w-4 h-4" style={{ color: '#3b82f6' }} />
                    <span className="font-medium">{benefit.title}</span>
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <SpecialButtonDark 
                variant="primary"
                size="base"
                onClick={() => { 
                  const event = new CustomEvent('openContactModal');
                  window.dispatchEvent(event);
                }}
              >
                <Sparkles className="w-4 h-4" />
                Projekt anfragen
              </SpecialButtonDark>

              <SpecialButtonDark 
                variant="secondary"
                size="base"
                onClick={() => { 
                  const leistungen = document.getElementById('leistungen-section');
                  if (leistungen) leistungen.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Leistungen ansehen
              </SpecialButtonDark>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* FÜR WEN SECTION */}
      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-white leading-tight tracking-tight mb-6">
              Für etablierte Unternehmen mit Qualitätsanspruch
            </h2>
            <p className="text-xl text-gray-400 leading-7 max-w-2xl mx-auto">
              Sie wissen: Ihre Website ist mehr als digitale Visitenkarte. Sie ist strategisches Werkzeug für Vertrauen, Sichtbarkeit und Conversion. Genau hier setzt professionelles Webdesign an.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none text-gray-300 leading-relaxed"
          >
            <p className="text-base mb-6">
              Sie benötigen einen <strong className="text-white">Website-Relaunch</strong>, weil Ihre aktuelle Präsenz nicht mehr zeitgemäß ist – technisch veraltet, visuell überholt oder strukturell unübersichtlich. Oder Sie planen eine komplett neue Website, die Ihre Marke professionell repräsentiert und messbare Ergebnisse liefert.
            </p>
            <p className="text-base mb-6">
              Als UX/UI Designer und Webentwickler begleite ich Unternehmen im Raum <strong className="text-white">Holzkirchen, Miesbach, Tegernsee und München Oberland</strong> bei strategischen Webprojekten: von der ersten Konzeption über nutzerzentriertes Design bis zur technisch fundierten Umsetzung. Mit Fokus auf <strong className="text-white">Barrierefreiheit (BFSG/WCAG)</strong>, Performance und nachhaltiger Wartbarkeit.
            </p>
            <p className="text-base">
              Wenn Sie Wert auf durchdachte Prozesse, klare Kommunikation und hochwertige Ergebnisse legen – dann sprechen wir die gleiche Sprache.
            </p>
          </motion.div>
        </div>
      </section>

      {/* LEISTUNGEN SECTION */}
      <section id="leistungen-section" className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-white leading-tight tracking-tight mb-6">
              Leistungen für Ihr Webprojekt
            </h2>
            <p className="text-xl text-gray-400 leading-7 max-w-2xl mx-auto">
              Von der strategischen Konzeption bis zum technischen Go-Live – alles aus einer Hand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="p-6 bg-gray-800/40 border border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <Icon className="w-8 h-8 flex-shrink-0 text-blue-400" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABLAUF SECTION */}
      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-white leading-tight tracking-tight mb-6">
              Der Ablauf: Von der Idee zum Launch
            </h2>
            <p className="text-xl text-gray-400 leading-7 max-w-2xl mx-auto">
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
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-400">{item.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WARUM GHWB SECTION */}
      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-white leading-tight tracking-tight mb-6">
              Warum GHWB Studio?
            </h2>
            <p className="text-xl text-gray-400 leading-7 max-w-2xl mx-auto">
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
            <div className="p-6 bg-gray-800/40 border border-gray-700">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 flex-shrink-0 text-blue-400" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Langjährige Erfahrung in Enterprise-Projekten</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Über 8 Jahre UX/UI-Erfahrung in Großprojekten für Unternehmen wie Infineon, Bundesdruckerei und Medizinische Dienste. Diese Erfahrung fließt in jedes Projekt ein – egal ob Mittelstand oder Großunternehmen.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-800/40 border border-gray-700">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 flex-shrink-0 text-blue-400" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Barrierefreiheit als Standard</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Mit über 3 Jahren Spezialisierung auf digitale Barrierefreiheit (WCAG 2.1 AA, BFSG-konform) sind inklusive, gesetzeskonforme Websites keine Zusatzleistung – sondern integraler Bestandteil jedes Projekts.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-800/40 border border-gray-700">
              <div className="flex items-start gap-4">
                <Zap className="w-8 h-8 flex-shrink-0 text-blue-400" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Moderne Technologien & Performance</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Einsatz zukunftssicherer, performanceoptimierter Technologien (Next.js, React, semantisches HTML). Websites, die nicht nur gut aussehen, sondern auch technisch überzeugen – messbar schnell, SEO-optimiert, wartbar.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gray-800/40 border border-gray-700">
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 flex-shrink-0 text-blue-400" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Agile Methodik & transparente Kommunikation</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Scrum Product Owner & Master-Erfahrung aus 21-Millionen-Euro-Projekten. Sie erhalten regelmäßige Updates, klare Meilensteine und direkten Austausch – ohne Agentur-Overhead.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-white leading-tight tracking-tight mb-6">
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
              background: 'rgba(20, 25, 35, 0.6)',
              backdropFilter: 'blur(20px) saturate(150%)',
              WebkitBackdropFilter: 'blur(20px) saturate(150%)',
              border: '1px solid rgba(100, 150, 200, 0.3)',
              borderRadius: '0',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 1px 4px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}>
              <summary className="text-lg font-semibold text-white cursor-pointer flex justify-between items-center w-full p-6">
                <span>Was kostet professionelles Webdesign in Holzkirchen?</span>
                <ChevronDown className="w-5 h-5 flex-shrink-0 ml-2" />
              </summary>
              <p className="px-6 pb-6 pt-0 text-gray-400 leading-relaxed">Die Investition hängt von Umfang und Anforderungen ab. Ein Website-Relaunch mit modernem Design, Barrierefreiheit und Performance-Optimierung startet bei Projekten im mittleren fünfstelligen Bereich.</p>
            </details>

            <details style={{
              background: 'rgba(20, 25, 35, 0.6)',
              backdropFilter: 'blur(20px) saturate(150%)',
              WebkitBackdropFilter: 'blur(20px) saturate(150%)',
              border: '1px solid rgba(100, 150, 200, 0.3)',
              borderRadius: '0',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 1px 4px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}>
              <summary className="text-lg font-semibold text-white cursor-pointer flex justify-between items-center w-full p-6">
                <span>Wie lange dauert ein Website-Projekt?</span>
                <ChevronDown className="w-5 h-5 flex-shrink-0 ml-2" />
              </summary>
              <p className="px-6 pb-6 pt-0 text-gray-400 leading-relaxed">Von Konzept bis Launch rechnen Sie mit 8–16 Wochen, abhängig von Komplexität, Inhaltsumfang und Abstimmungsprozessen.</p>
            </details>

            <details style={{
              background: 'rgba(20, 25, 35, 0.6)',
              backdropFilter: 'blur(20px) saturate(150%)',
              WebkitBackdropFilter: 'blur(20px) saturate(150%)',
              border: '1px solid rgba(100, 150, 200, 0.3)',
              borderRadius: '0',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 1px 4px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}>
              <summary className="text-lg font-semibold text-white cursor-pointer flex justify-between items-center w-full p-6">
                <span>Warum ist Barrierefreiheit wichtig?</span>
                <ChevronDown className="w-5 h-5 flex-shrink-0 ml-2" />
              </summary>
              <p className="px-6 pb-6 pt-0 text-gray-400 leading-relaxed">Seit dem Barrierefreiheitsstärkungsgesetz (BFSG) sind barrierefreie Websites ab 2025 Pflicht. Gleichzeitig verbessern Sie Reichweite, SEO und Nutzererlebnis für alle Besucher.</p>
            </details>

            <details style={{
              background: 'rgba(20, 25, 35, 0.6)',
              backdropFilter: 'blur(20px) saturate(150%)',
              WebkitBackdropFilter: 'blur(20px) saturate(150%)',
              border: '1px solid rgba(100, 150, 200, 0.3)',
              borderRadius: '0',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 1px 4px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}>
              <summary className="text-lg font-semibold text-white cursor-pointer flex justify-between items-center w-full p-6">
                <span>Arbeiten Sie auch mit Unternehmen außerhalb von Holzkirchen?</span>
                <ChevronDown className="w-5 h-5 flex-shrink-0 ml-2" />
              </summary>
              <p className="px-6 pb-6 pt-0 text-gray-400 leading-relaxed">Ja. Der Fokus liegt auf dem Raum Holzkirchen, Miesbach, Tegernsee, Rosenheim und München Oberland – digitale Zusammenarbeit ermöglicht jedoch auch überregionale Projekte.</p>
            </details>

            <details style={{
              background: 'rgba(20, 25, 35, 0.6)',
              backdropFilter: 'blur(20px) saturate(150%)',
              WebkitBackdropFilter: 'blur(20px) saturate(150%)',
              border: '1px solid rgba(100, 150, 200, 0.3)',
              borderRadius: '0',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 1px 4px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}>
              <summary className="text-lg font-semibold text-white cursor-pointer flex justify-between items-center w-full p-6">
                <span>Welche Technologien nutzen Sie für Webprojekte?</span>
                <ChevronDown className="w-5 h-5 flex-shrink-0 ml-2" />
              </summary>
              <p className="px-6 pb-6 pt-0 text-gray-400 leading-relaxed">Moderne, performanceoptimierte Technologien wie Next.js, React und semantisches HTML – stets auf Zukunftssicherheit, Barrierefreiheit und Skalierbarkeit ausgelegt.</p>
            </details>

            <details style={{
              background: 'rgba(20, 25, 35, 0.6)',
              backdropFilter: 'blur(20px) saturate(150%)',
              WebkitBackdropFilter: 'blur(20px) saturate(150%)',
              border: '1px solid rgba(100, 150, 200, 0.3)',
              borderRadius: '0',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 1px 4px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}>
              <summary className="text-lg font-semibold text-white cursor-pointer flex justify-between items-center w-full p-6">
                <span>Bieten Sie auch laufende Website-Betreuung an?</span>
                <ChevronDown className="w-5 h-5 flex-shrink-0 ml-2" />
              </summary>
              <p className="px-6 pb-6 pt-0 text-gray-400 leading-relaxed">Nach Launch unterstütze ich Sie bei Updates, Performance-Monitoring und kontinuierlicher Optimierung – entweder projektbasiert oder als fortlaufende Zusammenarbeit.</p>
            </details>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6 text-white">Bereit für Ihr Website-Projekt?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns in einem unverbindlichen Erstgespräch klären, wie professionelles Webdesign Ihr Unternehmen voranbringt.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SpecialButtonDark 
                variant="primary"
                size="base"
                onClick={() => { 
                  const event = new CustomEvent('openContactModal');
                  window.dispatchEvent(event);
                }}
              >
                <Sparkles className="w-4 h-4" />
                Jetzt Kontakt aufnehmen
              </SpecialButtonDark>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer mit internen Links */}
      <section className="relative py-16 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Weitere Leistungen</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/design" className="px-6 py-3 bg-gray-800/60 border border-gray-700 rounded-full text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-colors">
                UX/UI Design
              </a>
              <a href="/ai-integration" className="px-6 py-3 bg-gray-800/60 border border-gray-700 rounded-full text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-colors">
                AI Integration
              </a>
              <a href="/photography" className="px-6 py-3 bg-gray-800/60 border border-gray-700 rounded-full text-gray-300 hover:border-blue-500 hover:text-blue-400 transition-colors">
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
