'use client'

import { motion } from 'framer-motion'
import { Camera, Heart, MapPin, Sun, CheckCircle, Award, Sparkles, ChevronDown } from 'lucide-react'
import { useEffect } from 'react'
import Footer from '@/components/Footer'
import FloatingContactButton from '@/components/FloatingContactButton'
import { SpecialButtonDark } from '@/components/ui/SpecialButtonDark'

export default function HundefotografieHolzkirchenDark() {

  useEffect(() => {
    // JSON-LD Schemas nur im Light Mode injected (Duplikate vermeiden)
  }, []);

  const services = [
    { icon: Sun, title: 'Outdoor-Shootings', description: 'In Wäldern, auf Wiesen und an Seen – natürliches Licht, authentische Momente, keine Studioatmosphäre.' },
    { icon: Camera, title: 'Natürliche Portraits', description: 'Kein Posieren. Ich beobachte, warte und halte den Charakter Ihres Hundes im richtigen Augenblick fest.' },
    { icon: Heart, title: 'Mensch & Hund', description: 'Die Verbindung zwischen Ihnen und Ihrem Hund ist das Schönste, was ich fotografieren kann – und das sieht man.' },
    { icon: Sparkles, title: 'Welpen-Shootings', description: 'Die ersten Wochen vergehen schnell. Welpenfotos halten den Anfang fest – verspielt, weich und voller Leben.' },
  ];

  const process = [
    { step: '01', title: 'Erstkontakt & Abstimmung', description: 'Sie schreiben mir, erzählen mir von Ihrem Hund – Rasse, Alter, Temperament. Wir klären Ort, Zeit und Ihre Wünsche für das Shooting.' },
    { step: '02', title: 'Location & Timing', description: 'Gemeinsam wählen wir eine passende Location und den richtigen Zeitpunkt – Lichtverhältnisse, Jahreszeit und die Energie Ihres Hundes spielen dabei eine Rolle.' },
    { step: '03', title: 'Das Shooting', description: 'Kein Stress, kein Druck. Ich nehme mir die Zeit, die Ihr Hund braucht – bis er entspannt ist und sich wohlfühlt. Echte Momente entstehen nicht auf Kommando.' },
    { step: '04', title: 'Bildauswahl & Bearbeitung', description: 'Sie erhalten eine kuratierte Auswahl sorgfältig bearbeiteter Bilder – zurückhaltend retouchiert, mit Fokus auf Atmosphäre und Authentizität.' },
    { step: '05', title: 'Übergabe', description: 'Ihre fertigen Bilder erhalten Sie als hochauflösende Dateien – bereit zum Drucken, Rahmen oder einfach zum Anschauen.' },
  ];

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(20px) saturate(180%)',
    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '24px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3), 0 1px 4px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
    padding: '24px'
  };

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

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ zIndex: 20 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />

        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 15 }}>
          <motion.div
            className="relative w-full h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 2, delay: 1 }}
          >
            <svg width="100vw" height="100vh" viewBox="0 0 1920 1080" className="drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))' }}>
              <motion.circle
                cx="960" cy="540" r="380"
                fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.15" strokeDasharray="8,16"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 3, delay: 1.5 }}
              />
              <motion.circle
                cx="960" cy="540" r="280"
                fill="none" stroke="white" strokeWidth="0.8" strokeOpacity="0.08"
                initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2, delay: 2 }}
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
              className="text-base text-muted-foreground leading-7 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Hundefotografie • Outdoor-Shooting • Natürliche Portraits
            </motion.p>

            <motion.h1
              className="text-6xl font-extrabold text-white leading-tight tracking-tight mb-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              Hundefotografie Holzkirchen
            </motion.h1>

            <motion.p
              className="text-base text-muted-foreground leading-7 max-w-2xl mx-auto mb-16"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              Authentische Hundefotos, die den Charakter Ihres Hundes einfangen. Natürliche Outdoor-Shootings im Raum Holzkirchen, Tegernsee, Miesbach, Rosenheim und München Süd.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <SpecialButtonDark
                variant="secondary"
                size="sm"
                onClick={() => { const el = document.getElementById('leistungen-section-dark'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Leistungen
              </SpecialButtonDark>

              <SpecialButtonDark
                variant="primary"
                size="sm"
                onClick={() => {
                  const event = new CustomEvent('openContactModal');
                  window.dispatchEvent(event);
                }}
              >
                Shooting anfragen
              </SpecialButtonDark>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* INTRO */}
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
              Manche Momente verdienen mehr als ein Handyfoto
            </h2>
            <p className="text-xl text-gray-400 leading-7 max-w-2xl mx-auto">
              Ihr Hund ist nicht einfach ein Tier. Er ist Begleiter, Vertrauter, ein lebendiger Teil Ihres Alltags – und dieser Zeit.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-300 leading-relaxed"
          >
            <p className="text-base">
              Hunde altern schneller als wir wahrhaben wollen. Der Welpe, der noch taumelt. Die Energie des zweiten Jahres. Die Würde des alten Hundes, der Sie mit ruhigem Blick ansieht. Jede Phase ist einmalig – und geht irgendwann still vorbei.
            </p>
            <p className="text-base">
              Professionelle <strong className="text-white">Hundefotografie in Holzkirchen</strong> bedeutet für mich: nicht inszenieren, sondern beobachten. Das Ergebnis sind Bilder, die sich wahr anfühlen – die man Jahre später noch anschaut und lächelt.
            </p>
            <p className="text-base">
              Ich fotografiere im gesamten Raum <strong className="text-white">Holzkirchen, Tegernsee, Miesbach, Rosenheim und München Süd</strong>. Immer mit Geduld, Ruhe und einem Auge für das Wesentliche.
            </p>
          </motion.div>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section id="leistungen-section-dark" className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-semibold text-white leading-tight tracking-tight mb-6">
              Leistungen der Hundefotografie
            </h2>
            <p className="text-xl text-gray-400 leading-7 max-w-2xl mx-auto">
              Jedes Shooting ist individuell – angepasst an Ihren Hund, seine Energie und die Geschichte, die Sie festhalten möchten.
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
                    <Icon className="w-10 h-10 text-blue-400" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { src: '/images/hundefotografie/hund-outdoor-bewegung.jpg', alt: 'Hund läuft frei durch Natur – Outdoor Hundefotografie Holzkirchen', label: 'Outdoor • Bewegung' },
              { src: '/images/hundefotografie/hund-portrait-see.jpg', alt: 'Hundeportrait im Abendlicht am See – emotionale Hundefotografie Tegernsee', label: 'Portrait • Charakter' },
              { src: '/images/hundefotografie/mensch-hund-shooting.jpg', alt: 'Frau mit Hund – Mensch-Hund-Shooting Holzkirchen', label: 'Mensch & Hund' },
            ].map((img, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)' }}>
                  <span className="text-xs font-medium text-white tracking-widest uppercase">{img.label}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* VAIANA FEATURE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 max-w-6xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden" style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
          }}>
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Bild */}
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[420px] overflow-hidden">
                <img
                  src="/images/hundefotografie/vaiana-feature.jpg"
                  alt="Vaiana the Whippet – Hundefotografie Holzkirchen"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Text */}
              <div className="flex flex-col justify-center p-10 md:p-14">
                <p className="text-sm font-medium tracking-widest uppercase text-blue-400 mb-4">
                  Zu Besuch bei
                </p>
                <h3 className="text-3xl font-bold text-white leading-tight mb-4">
                  @vaianathewhippet
                </h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Vaiana ist ein Whippet mit einem Blick, der alles sagt. Ihr Instagram-Kanal zeigt, wie viel Persönlichkeit in einem Windhund steckt – verspielt, elegant, lebendig. Genau die Art von Charakter, die ich mit der Kamera einfangen möchte.
                </p>
                <a
                  href="https://www.instagram.com/vaianathewhippet"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 self-start px-6 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-80"
                  style={{ background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)' }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Profil ansehen
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FÜR WEN */}
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
              Für wen ist ein Hundeshooting das Richtige?
            </h2>
            <p className="text-xl text-gray-400 leading-7 max-w-2xl mx-auto">
              Für alle, die wissen, dass dieser Moment nicht wiederkehrt – und ihn nicht dem Zufall überlassen möchten.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-300 leading-relaxed"
          >
            <p className="text-base">
              Ein <strong className="text-white">Hundeshooting in Holzkirchen</strong> ist das Richtige für Sie, wenn Ihr Hund ein besonderer Teil Ihres Lebens ist – und Sie Bilder möchten, die das widerspiegeln. Nicht gestellt, nicht austauschbar, sondern echt.
            </p>
            <p className="text-base">
              Besonders beliebt sind Shootings zu besonderen Anlässen: der neue Welpe, der erste Geburtstag, ein langjähriger Begleiter, der langsam älter wird. Aber auch einfach so – weil dieser Frühling, dieser Hund, dieser Blick es verdient.
            </p>
            <p className="text-base">
              Keine Erfahrung nötig, kein perfekt gehorchender Hund, keine aufwändige Vorbereitung. Ich bringe die Geduld mit – Sie kommen einfach so, wie Sie sind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ABLAUF */}
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
              Ablauf: So läuft ein Hundeshooting ab
            </h2>
            <p className="text-xl text-gray-400 leading-7 max-w-2xl mx-auto">
              Entspannt, transparent und ganz im Rhythmus Ihres Hundes.
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
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)'
                }}>
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

      {/* WARUM GHWB */}
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
              Geduld, Blick und eine natürliche Ästhetik, die Ihren Hund so zeigt, wie er wirklich ist.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              { icon: Award, title: 'Geduld im Umgang mit Hunden', text: 'Hunde sind keine Models. Sie haben eigene Rhythmen, eigene Momente – und die besten Bilder entstehen dann, wenn man wartet, statt zu drängen. Ich nehme mir die Zeit, die es braucht.' },
              { icon: Camera, title: 'Blick für den entscheidenden Moment', text: 'Fotografie ist Beobachtung. Ich halte keine Posen fest, sondern echte Augenblicke – das leise Aufschauen, das Rennen durch hohes Gras, den Blick, der alles sagt.' },
              { icon: CheckCircle, title: 'Natürliche Ästhetik ohne Kitsch', text: 'Kein übersättigtes Filter-Look, keine gestellten Kulissen. Meine Bilder haben eine ruhige, zeitlose Qualität – atmosphärisch, ehrlich, haltbar.' },
              { icon: MapPin, title: 'Verwurzelung im Oberland', text: 'Ich kenne die Landschaft rund um Holzkirchen, Tegernsee und Miesbach. Diese Natur ist keine Kulisse – sie ist Teil des Bildes.' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} style={cardStyle}>
                  <div className="flex items-start gap-4">
                    <Icon className="w-8 h-8 flex-shrink-0 text-blue-400" />
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* REGION */}
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
              Hundefotografie im Raum Holzkirchen & Umgebung
            </h2>
            <p className="text-xl text-gray-400 leading-7 max-w-2xl mx-auto">
              Ich komme zu Ihnen – in die Orte und Natur, die Sie und Ihr Hund schon kennen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div style={{ ...cardStyle, padding: '32px' }}>
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-8 h-8 flex-shrink-0 text-blue-400" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Mein Einzugsgebiet</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Ich fotografiere Hunde im gesamten Raum <strong className="text-white">Holzkirchen, Miesbach, Tegernsee, Rosenheim und München Süd</strong>. Das Voralpenland bietet dafür eine außergewöhnliche Kulisse: Wälder, Seen, Wiesen und Licht, das man sich kaum schöner wünschen kann.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                {['Holzkirchen', 'Miesbach', 'Tegernsee', 'Rosenheim', 'München Süd', 'Bad Wiessee', 'Otterfing', 'Gmund', 'Weyarn', 'Feldkirchen-Westerham'].map(ort => (
                  <span key={ort} className="px-4 py-2 rounded-full text-sm text-gray-300" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                    {ort}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
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
            {[
              { q: 'Was kostet ein Hundeshooting bei GHWB Studio?', a: 'Die genauen Preise teile ich Ihnen im unverbindlichen Erstgespräch mit. Shootings beginnen mit einem Outdoor-Paket für ca. 90 Minuten. Anfragen gern per Kontaktformular.' },
              { q: 'Wie läuft ein Hundeshooting ab?', a: 'Wir beginnen mit einem kurzen Gespräch über Ihren Hund, wählen gemeinsam einen passenden Location-Typ aus und nehmen uns dann Zeit – ohne Stress, ganz im Rhythmus Ihres Hundes. Das Shooting dauert in der Regel 60–120 Minuten.' },
              { q: 'Wo finden die Shootings statt?', a: 'Ich fotografiere im gesamten Raum Holzkirchen, Tegernsee, Miesbach, Rosenheim und München Süd – in Wäldern, auf Wiesen, an Seen oder an für Sie bedeutsamen Orten.' },
              { q: 'Wie bereite ich meinen Hund auf das Shooting vor?', a: 'Kein aufwändiges Training notwendig. Lieblingsspielzeug oder Leckerlis helfen, natürliche Reaktionen zu zeigen. Ein kurzer Spaziergang vorab damit der Hund entspannt ist – mehr braucht es nicht.' },
              { q: 'Können Welpen ebenfalls fotografiert werden?', a: 'Ja, gerade Welpen-Shootings sind besonders schöne Momente. Ich passe Tempo und Dauer immer dem Alter und der Energie des Hundes an – Wohlbefinden hat dabei oberste Priorität.' },
              { q: 'Können wir als Mensch-Hund-Duo gemeinsam fotografiert werden?', a: 'Unbedingt. Gemeinsame Portraits von Ihnen und Ihrem Hund zählen zu den emotionalsten und wertvollsten Bildern eines Shootings – und sind fester Bestandteil meines Angebots.' },
            ].map(({ q, a }) => (
              <details key={q} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '24px',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)'
              }}>
                <summary className="text-lg font-semibold text-white cursor-pointer flex justify-between items-center w-full p-6">
                  <span>{q}</span>
                  <ChevronDown className="w-5 h-5 flex-shrink-0 ml-2 text-gray-400" />
                </summary>
                <p className="px-6 pb-6 pt-0 text-gray-300 leading-relaxed">{a}</p>
              </details>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6 text-white">Bereit für echte Hundefotos?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Schreiben Sie mir. Ich freue mich darauf, von Ihrem Hund zu hören – und ihn dann kennenzulernen.
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <SpecialButtonDark
                variant="primary"
                size="sm"
                onClick={() => {
                  const event = new CustomEvent('openContactModal');
                  window.dispatchEvent(event);
                }}
              >
                <Heart className="w-4 h-4 mr-2" />
                Shooting anfragen
              </SpecialButtonDark>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER TEASER */}
      <section className="relative py-16 px-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
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
              {[
                { label: 'Fotografie', href: '/photography' },
                { label: 'UX/UI Design', href: '/design' },
                { label: 'Webdesign Holzkirchen', href: '/webdesign-holzkirchen' },
                { label: 'AI Integration', href: '/ai-integration' },
              ].map(link => (
                <a key={link.href} href={link.href} className="px-6 py-3 rounded-full text-gray-300 transition-colors" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <FloatingContactButton />
      <Footer />
    </div>
  );
}
