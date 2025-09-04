'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface PortfolioWork {
  id: number
  title: string
  category: string
  medium: string
  year: string
  image: string
  gridSpan: string
}

interface PortfolioGridProps {
  works: PortfolioWork[]
}

export default function PortfolioGrid({ works }: PortfolioGridProps) {
  return (
    <motion.section 
      id="portfolio-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-32 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight md:text-3xl mb-6">
            Portfolio
          </h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-base text-muted-foreground leading-7"
          >
            Eine kleine Auswahl meiner Werke
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-4 gap-4 auto-rows-[200px]">
            {works.map((work, index) => 
              <motion.div
                key={work.id}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className={`${work.gridSpan} relative group cursor-pointer overflow-hidden rounded-lg bg-gray-100`}
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Bauhaus Color Overlay on Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-br from-red-500/80 via-blue-600/80 to-yellow-500/80 flex items-center justify-center p-6"
                >
                  <div className="text-center space-y-3 text-white">
                    <h3 className="text-2xl font-semibold text-foreground leading-tight md:text-xl text-white">{work.title}</h3>
                    <div className="text-label space-y-1 text-white">
                      <p className="font-medium">{work.category}</p>
                      <p>{work.medium}</p>
                      <p className="font-bold">{work.year}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
