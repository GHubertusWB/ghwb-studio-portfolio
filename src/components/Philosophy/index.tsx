'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'

const Philosophy = () => {
  const { theme } = useTheme()
  
  const philosophyPoints = [
    {
      title: "Funktionalität trifft Ästhetik",
      description: "Jedes Design muss nicht nur schön aussehen, sondern auch seinen Zweck erfüllen. Form folgt Funktion, aber beide müssen harmonieren.",
      icon: "⚡"
    },
    {
      title: "Weniger ist mehr",
      description: "Klare Linien, bewusste Reduktion und fokussierte Inhalte schaffen Raum für das Wesentliche und verbessern die Benutzererfahrung.",
      icon: "✨"
    },
    {
      title: "Authentische Geschichten",
      description: "Jedes Projekt erzählt eine einzigartige Geschichte. Mein Ziel ist es, diese Geschichte visuell zu übersetzen und emotional erlebbar zu machen.",
      icon: "🎨"
    }
  ]

  return (
    <section className={`py-20 px-6 transition-colors duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900'
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Design Philosophie
          </motion.h2>
          
          <motion.p
            className={`font-sans text-lg md:text-xl max-w-2xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Drei Grundprinzipien, die mein kreatives Schaffen leiten
          </motion.p>
          
          <motion.div 
            className={`w-24 h-0.5 mx-auto mt-8 ${
              theme === 'dark' ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-gradient-to-r from-gray-800 to-gray-600'
            }`}
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Philosophy Points */}
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {philosophyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`group relative p-8 rounded-2xl border transition-all duration-500 hover:shadow-2xl ${
                theme === 'dark'
                  ? 'bg-gray-800/50 border-gray-700/50 hover:border-cyan-400/50 backdrop-blur-sm'
                  : 'bg-white/80 border-gray-200/50 hover:border-gray-400/50 shadow-lg backdrop-blur-sm'
              }`}
            >
              {/* Icon */}
              <motion.div 
                className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 text-2xl transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-cyan-400/20 to-blue-500/20 group-hover:from-cyan-400/30 group-hover:to-blue-500/30' 
                    : 'bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-gray-200 group-hover:to-gray-300'
                }`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {point.icon}
              </motion.div>
              
              {/* Number */}
              <div className={`absolute top-6 right-6 font-mono text-sm font-medium ${
                theme === 'dark' ? 'text-cyan-400/60' : 'text-gray-400'
              }`}>
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Content */}
              <h3 className={`font-serif text-2xl md:text-3xl font-medium mb-4 leading-tight ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {point.title}
              </h3>
              
              <p className={`font-sans text-base md:text-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {point.description}
              </p>

              {/* Hover Effect Line */}
              <motion.div
                className={`absolute bottom-0 left-8 right-8 h-0.5 ${
                  theme === 'dark' ? 'bg-gradient-to-r from-cyan-400 to-blue-500' : 'bg-gradient-to-r from-gray-800 to-gray-600'
                }`}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <motion.blockquote 
            className={`font-serif text-2xl md:text-3xl lg:text-4xl font-light italic leading-relaxed max-w-4xl mx-auto ${
              theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
            }`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            "Gutes Design ist unsichtbar – es funktioniert einfach und berührt die Seele."
          </motion.blockquote>
          
          <motion.cite 
            className={`block mt-6 font-sans text-sm tracking-wider uppercase ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          >
            Design Maxime
          </motion.cite>
        </motion.div>
      </div>
    </section>
  )
}

export default Philosophy
