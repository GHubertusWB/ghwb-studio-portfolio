'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Camera, User, Package, Home, Heart, Eye } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/Footer'

const PhotographyPage = () => {
  const services = [
    {
      icon: User,
      title: 'Porträtfotografie',
      description: 'Individuelle Porträts, die die Persönlichkeit und Ausstrahlung jedes Menschen einfangen.'
    },
    {
      icon: Heart,
      title: 'Haustierfotografie',
      description: 'Liebevolle Aufnahmen Ihrer vierbeinigen Familienmitglieder in natürlicher Umgebung.'
    },
    {
      icon: Package,
      title: 'Produktfotografie',
      description: 'Professionelle Produktbilder, die Ihre Artikel ins beste Licht rücken.'
    },
    {
      icon: Home,
      title: 'Ambientfotografie',
      description: 'Atmosphärische Aufnahmen von Räumen, Locations und Stimmungen.'
    }
  ]

  const portfolio = [
    {
      category: 'Porträt',
      title: 'Business Porträts',
      description: 'Professionelle Unternehmensporträts mit natürlichem Licht'
    },
    {
      category: 'Haustiere',
      title: 'Familienhunde im Park',
      description: 'Spielerische Momente zwischen Mensch und Tier'
    },
    {
      category: 'Produkt',
      title: 'Schmuck Kollektion',
      description: 'Elegante Produktpräsentation mit dramatischen Schatten'
    },
    {
      category: 'Ambient',
      title: 'Café Atmosphäre',
      description: 'Gemütliche Stimmung eines lokalen Cafés am Morgen'
    },
    {
      category: 'Porträt',
      title: 'Künstlerporträts',
      description: 'Kreative Menschen in ihrem natürlichen Element'
    },
    {
      category: 'Produkt',
      title: 'Fashion Shooting',
      description: 'Modische Accessoires in minimalistischem Setup'
    }
  ]

  const approach = [
    {
      icon: Eye,
      title: 'Authentische Momente',
      description: 'Ich fange echte Emotionen und natürliche Ausdrücke ein, keine gestellten Posen.'
    },
    {
      icon: Heart,
      title: 'Persönlicher Ansatz',
      description: 'Jedes Shooting ist individuell auf Sie und Ihre Wünsche abgestimmt.'
    },
    {
      icon: Camera,
      title: 'Technische Perfektion',
      description: 'Modernste Ausrüstung und jahrelange Erfahrung für beste Qualität.'
    }
  ]

  return (
    <div className="pt-16 overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Link 
              href="/"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Startseite
            </Link>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-8"
            >
              <Camera className="w-10 h-10 text-foreground" />
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6">
              Fotografie
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ich halte die besonderen Momente des Lebens fest – von intimen Porträts 
              bis hin zu lebendigen Produktaufnahmen. Jedes Bild erzählt eine Geschichte 
              und weckt Emotionen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
              Meine Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vielfältige Fotografie-Dienstleistungen für jeden Bedarf
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-2xl bg-background border border-border/50 hover:border-border transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-6">
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
              Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Eine Auswahl meiner fotografischen Arbeiten
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-2xl bg-muted mb-6 aspect-[4/3]">
                  <div className="w-full h-full bg-gradient-to-br from-muted via-muted/50 to-background flex items-center justify-center">
                    <Camera className="w-12 h-12 text-muted-foreground/50" />
                  </div>
                </div>
                <div className="space-y-3">
                  <span className="text-sm font-medium text-muted-foreground">{item.category}</span>
                  <h3 className="text-xl font-semibold group-hover:text-foreground/80 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
              Mein Ansatz
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Was meine Fotografie besonders macht
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approach.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background border border-border/50 mb-6">
                    <Icon className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
              Lassen Sie uns Ihre Geschichte erzählen
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ob Porträts, Produktfotos oder Ambientaufnahmen – gemeinsam schaffen wir 
              Bilder, die im Gedächtnis bleiben und Emotionen wecken.
            </p>
            <motion.a
              href="mailto:hello@ghwb.studio"
              className="inline-flex items-center px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Shooting anfragen
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PhotographyPage
