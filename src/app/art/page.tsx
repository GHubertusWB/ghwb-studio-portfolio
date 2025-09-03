'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Palette, Brush, Smartphone, Layers, Sparkles, Eye, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import { useState, useEffect, useRef } from 'react'

const ArtPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Kunstformen
  const artforms = [
    {
      icon: Layers,
      title: 'AR Canvas',
      description: 'Traditionelle Leinwandmalerei erweitert durch Augmented Reality - Kunst zum Leben erwecken'
    },
    {
      icon: Brush,
      title: 'Leinwände',
      description: 'Klassische Malerei mit Acryl, Öl und Mixed Media - zeitlose Kunstwerke auf Leinwand'
    },
    {
      icon: Palette,
      title: 'Papier',
      description: 'Aquarell, Tusche und Bleistift - filigrane Arbeiten auf verschiedenen Papierarten'
    },
    {
      icon: Smartphone,
      title: 'Digitale Kunst',
      description: 'Moderne digitale Kreationen - von Konzeptkunst bis hin zu interaktiven Installationen'
    },
    {
      icon: Sparkles,
      title: 'Tätowierungen',
      description: 'Individuelle Körperkunst - von minimalistischen Designs bis zu komplexen Kompositionen'
    },
    {
      icon: Eye,
      title: 'Auftragsarbeiten',
      description: 'Persönliche Kunstwerke nach Ihren Vorstellungen - einzigartig und maßgeschneidert'
    }
  ]

  // Prozess Schritte
  const process = [
    {
      step: '01',
      title: 'Inspiration',
      description: 'Ideen sammeln, Emotionen einfangen, Konzepte entwickeln',
      delay: 0
    },
    {
      step: '02',
      title: 'Skizzierung',
      description: 'Erste Entwürfe, Komposition festlegen, Proportionen definieren',
      delay: 0.2
    },
    {
      step: '03',
      title: 'Umsetzung',
      description: 'Technik wählen, Farben mischen, Schicht für Schicht aufbauen',
      delay: 0.4
    },
    {
      step: '04',
      title: 'Verfeinerung',
      description: 'Details ausarbeiten, Kontraste setzen, finale Akzente',
      delay: 0.6
    },
    {
      step: '05',
      title: 'AR-Integration',
      description: 'Digitale Ebenen hinzufügen, Interaktivität programmieren',
      delay: 0.8
    }
  ]

  // Carousel Serie
  const carouselWorks = [
    {
      title: 'Teilen #01',
      medium: 'AR Canvas',
      year: '2024',
      description: 'Gesellschaftliche Diskussionen - die Kunst des Zuhörens',
      image: 'https://www.sirhub.online/wp-content/uploads/go-x/u/5afb8e8c-63bb-49a1-84a3-3409e85b788e/l382,t0,w981,h1107/image-768x867.jpg',
      color: '#FF6B35'
    },
    {
      title: 'Teilen #02', 
      medium: 'AR Canvas',
      year: '2024',
      description: 'Perspektivenwechsel - beide Seiten der Medaille',
      image: 'https://www.sirhub.online/wp-content/uploads/go-x/u/6d78959b-2167-421b-b3cd-a9dc2264d797/l392,t111,w972,h1097/image-768x867.jpg',
      color: '#00FFE0'
    },
    {
      title: 'Teilen #03',
      medium: 'AR Canvas', 
      year: '2024',
      description: 'Wahrheit in Grautönen - jenseits von schwarz und weiß',
      image: 'https://www.sirhub.online/wp-content/uploads/go-x/u/75ee7181-f11c-4cf4-951f-075fdbb2b83a/l665,t99,w641,h723/image.jpg',
      color: '#FFE135'
    },
    {
      title: 'AR Interface',
      medium: 'Digital + AR',
      year: '2024', 
      description: 'Die unsichtbare Schicht - Technologie als Brücke zur Kunst',
      image: 'https://www.sirhub.online/wp-content/uploads/go-x/u/fcc6af23-951c-4d8c-aae6-399bcd2c5138/image.png',
      color: '#9D4EDD'
    }
  ]

  // Galerie Werke
  const galleryWorks = [
    {
      title: 'Reflexion',
      image: 'https://www.sirhub.online/wp-content/uploads/go-x/u/c99a89a5-5199-44ac-862d-a2c8af5552ee/l0,t195,w1500,h1610/image-768x824.jpg',
      medium: 'Canvas + AR'
    },
    {
      title: 'Abstraktion',
      image: 'https://www.sirhub.online/wp-content/uploads/go-x/u/fc335b8c-ea0a-46e1-84ef-bfc00563e4c5/l0,t442,w924,h993/image-768x825.png',
      medium: 'Mixed Media'
    },
    {
      title: 'Transformation',
      image: 'https://www.sirhub.online/wp-content/uploads/go-x/u/6d0e5337-5654-4519-8ed5-9995c0e6684a/l0,t27,w1125,h1442/image-768x984.jpg',
      medium: 'Canvas'
    },
    {
      title: 'Digital Dreams',
      image: 'https://www.sirhub.online/wp-content/uploads/go-x/u/58494139-2d4c-4995-bd10-8e6dd77241a1/l399,t402,w1025,h1367/image-768x1024.jpg',
      medium: 'Digital Art'
    },
    {
      title: 'Emotion',
      image: 'https://www.sirhub.online/wp-content/uploads/go-x/u/bb6c044e-bcfc-415a-84dd-0808484c51a2/l0,t195,w2000,h1697/image-768x652.jpg',
      medium: 'Acryl auf Leinwand'
    },
    {
      title: 'Kontrast',
      image: 'https://www.sirhub.online/wp-content/uploads/go-x/u/c943e5f8-e370-4061-ac57-f565b2689ecd/l195,t0,w1313,h2000/image-768x1170.jpg',
      medium: 'Mixed Media'
    }
  ]

  // Auto-play Carousel
  useEffect(() => {
    if (isAutoPlay) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselWorks.length)
      }, 4000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isAutoPlay, carouselWorks.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselWorks.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselWorks.length) % carouselWorks.length)
  }

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay)
  }

  return (
    <div className="pt-16 overflow-x-hidden">
      
      {/* Hero/Intro Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating geometric shapes */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-20 -left-20 w-40 h-40 border border-muted-foreground/10 rounded-full"
          />
          
          <motion.div
            animate={{
              rotate: -360,
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/3 right-20 w-20 h-20 bg-muted-foreground/5"
            style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
          />
          
          <motion.div
            animate={{
              x: [-30, 30, -30],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 left-10 w-32 h-32 border-2 border-muted-foreground/10 rotate-45"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-between items-center mb-20"
          >
            <Link 
              href="/"
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors group"
            >
              <motion.div
                whileHover={{ x: -4 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
              </motion.div>
              Zurück
            </Link>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-px w-32 bg-gradient-to-r from-transparent via-muted-foreground to-transparent"
            />
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-12 gap-8 items-center">
            
            {/* Left Column - Typography */}
            <div className="col-span-12 lg:col-span-7">
              
              {/* Small Label */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-light">
                  Creative Portfolio
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100 }}
                className="text-6xl lg:text-8xl font-light tracking-tight leading-none mb-8"
              >
                <motion.span
                  className="inline-block"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  Kunst
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="inline-block text-muted-foreground ml-4"
                >
                  &
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="inline-block text-muted-foreground/70 text-5xl lg:text-6xl"
                >
                  Technologie
                </motion.span>
              </motion.h1>

              {/* Philosophy Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="max-w-lg"
              >
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Wo traditionelle Maltechniken auf Augmented Reality treffen. 
                  Kunst, die nicht nur betrachtet, sondern erlebt wird - 
                  eine Fusion aus Emotion und Innovation.
                </p>
                
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "60px" }}
                  transition={{ duration: 1, delay: 1.6 }}
                  className="h-0.5 bg-foreground"
                />
              </motion.div>
            </div>

            {/* Right Column - Interactive Visual */}
            <div className="col-span-12 lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.2, delay: 0.6, type: "spring", stiffness: 80 }}
                className="relative"
              >
                
                {/* Central Art Icon */}
                <div className="relative w-64 h-64 mx-auto">
                  
                  {/* Outer Ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border border-muted-foreground/20 rounded-full"
                  />
                  
                  {/* Middle Ring */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-8 border border-muted-foreground/10 rounded-full"
                  />
                  
                  {/* Inner Circle with Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute inset-16 bg-gradient-to-br from-muted/30 to-muted/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-muted-foreground/20"
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Palette className="w-16 h-16 text-foreground" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Orbiting Elements */}
                  {[
                    { icon: Brush, angle: 0, delay: 0 },
                    { icon: Smartphone, angle: 120, delay: 0.5 },
                    { icon: Sparkles, angle: 240, delay: 1 }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="absolute top-1/2 left-1/2 w-8 h-8"
                      style={{
                        transformOrigin: '0 0'
                      }}
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        delay: item.delay
                      }}
                    >
                      <motion.div
                        className="absolute -top-4 -left-4 w-8 h-8 bg-background border border-muted-foreground/30 rounded-full flex items-center justify-center"
                        style={{
                          transform: `translate(${Math.cos((item.angle * Math.PI) / 180) * 100}px, ${Math.sin((item.angle * Math.PI) / 180) * 100}px)`
                        }}
                        animate={{
                          rotate: -360,
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                          delay: item.delay
                        }}
                      >
                        <item.icon className="w-3 h-3 text-muted-foreground" />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Stats/Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-col lg:flex-row justify-between items-center mt-20 pt-8 border-t border-muted-foreground/10"
          >
            <div className="flex space-x-12 mb-8 lg:mb-0">
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  className="text-2xl font-light text-foreground mb-1"
                >
                  AR
                </motion.div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Canvas
                </div>
              </div>
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="text-2xl font-light text-foreground mb-1"
                >
                  Mixed
                </motion.div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Media
                </div>
              </div>
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="text-2xl font-light text-foreground mb-1"
                >
                  Digital
                </motion.div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">
                  Art
                </div>
              </div>
            </div>
            
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-muted-foreground/50"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30"></div>
                <div className="w-8 h-px bg-muted-foreground/20"></div>
                <span className="text-xs uppercase tracking-widest">Scroll</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Kunstformen Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Kunstformen
            </h2>
            <p className="text-lg text-muted-foreground">
              Vielfalt in Technik und Ausdruck
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artforms.map((form, index) => {
              const Icon = form.icon
              return (
                <motion.div
                  key={form.title}
                  initial={{ opacity: 0, y: 50, rotateX: 45 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                  className="group p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1
                    }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4"
                  >
                    <Icon className="w-6 h-6 text-foreground" />
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-foreground/80 transition-colors">
                    {form.title}
                  </h3>
                  
                  <motion.p 
                    className="text-muted-foreground text-sm leading-relaxed"
                    initial={{ height: "auto" }}
                    whileHover={{ 
                      color: "hsl(var(--foreground))",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {form.description}
                  </motion.p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Prozess Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Mein Prozess
            </h2>
            <p className="text-lg text-muted-foreground">
              Von der Inspiration zum fertigen Kunstwerk
            </p>
          </motion.div>

          <div className="relative">
            
            {/* Process Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-muted via-foreground to-muted transform -translate-y-1/2 hidden lg:block"
            />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: step.delay,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="text-center relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground text-background text-lg font-bold mb-4 relative z-10"
                  >
                    <motion.span
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    >
                      {step.step}
                    </motion.span>
                  </motion.div>
                  
                  <h3 className="text-lg font-semibold mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-20 bg-muted/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Serie "Teilen"
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Augmented Reality Canvas - Gesellschaftskritische Kunstwerke
            </p>
          </motion.div>

          <div className="relative">
            
            {/* Carousel Container */}
            <div className="relative h-[600px] rounded-3xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img 
                    src={carouselWorks[currentSlide].image}
                    alt={carouselWorks[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                  
                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute bottom-0 left-0 right-0 p-8"
                  >
                    <div className="max-w-2xl">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100px" }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="h-1 rounded-full mb-4"
                        style={{ backgroundColor: carouselWorks[currentSlide].color }}
                      />
                      
                      <h3 className="text-3xl font-bold mb-2 text-foreground">
                        {carouselWorks[currentSlide].title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4">
                        {carouselWorks[currentSlide].medium} • {carouselWorks[currentSlide].year}
                      </p>
                      
                      <p className="text-lg leading-relaxed">
                        {carouselWorks[currentSlide].description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-8">
              
              {/* Prev/Next Buttons */}
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevSlide}
                  className="p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:border-border transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextSlide}
                  className="p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:border-border transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Indicators */}
              <div className="flex gap-2">
                {carouselWorks.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-foreground' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>

              {/* Auto-play Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleAutoPlay}
                className="p-3 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:border-border transition-colors"
              >
                {isAutoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Galerie Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Galerie
            </h2>
            <p className="text-lg text-muted-foreground">
              Vielfalt der Techniken und Stile
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryWorks.map((work, index) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 400 }
                }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-square bg-muted">
                  <motion.img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    loading="lazy"
                  />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6"
                  >
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        {work.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {work.medium}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground text-background mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-8 h-8" />
              </motion.div>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
              Lassen Sie uns zusammen erschaffen
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Haben Sie eine Vision, die Sie gerne in Kunst verwandeln möchten? 
              Ob traditionelle Malerei, digitale Kunst oder AR-Integration - 
              gemeinsam bringen wir Ihre Idee zum Leben.
            </p>
            
            <motion.a
              href="mailto:hello@ghwb.studio?subject=Kunstprojekt Anfrage"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
            >
              Projekt besprechen
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-2"
              >
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ArtPage
