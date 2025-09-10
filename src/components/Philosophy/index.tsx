'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'

const Philosophy = () => {
  const { theme } = useTheme()
  
  const philosophyPoints = [
    {
      title: "Funktionalität trifft Ästhetik",
      description: "Jedes Design muss nicht nur schön aussehen, sondern auch seinen Zweck erfüllen. Form folgt Funktion, aber beide müssen harmonieren."
    },
    {
      title: "Weniger ist mehr",
      description: "Klare Linien, bewusste Reduktion und fokussierte Inhalte schaffen Raum für das Wesentliche und verbessern die Benutzererfahrung."
    },
    {
      title: "Authentische Geschichten",
      description: "Jedes Projekt erzählt eine einzigartige Geschichte. Mein Ziel ist es, diese Geschichte visuell zu übersetzen und emotional erlebbar zu machen."
    }
  ]

  return (
    <section className={`py-16 px-6 transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-gray-900 text-white' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Design Philosophie
          </h2>
          <div className={`w-20 h-1 mx-auto ${
            theme === 'dark' ? 'bg-cyan-400' : 'bg-gray-900'
          }`}></div>
        </motion.div>

        {/* Philosophy Points */}
        <div className="grid md:grid-cols-3 gap-8">
          {philosophyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg border transition-all duration-300 hover:shadow-lg ${
                theme === 'dark'
                  ? 'bg-gray-800 border-gray-700 hover:border-cyan-400'
                  : 'bg-white border-gray-200 hover:border-gray-900'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                theme === 'dark' ? 'bg-cyan-400/10' : 'bg-gray-900/10'
              }`}>
                <span className={`text-xl font-bold ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-gray-900'
                }`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              
              <h3 className={`text-xl font-semibold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {point.title}
              </h3>
              
              <p className={`leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <blockquote className={`text-xl md:text-2xl font-light italic ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            "Gutes Design ist unsichtbar – es funktioniert einfach."
          </blockquote>
          <cite className={`block mt-4 text-sm ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            – Design Prinzip
          </cite>
        </motion.div>
      </div>
    </section>
  )
}

export default Philosophy
