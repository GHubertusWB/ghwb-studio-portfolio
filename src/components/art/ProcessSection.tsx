'use client'

import { motion } from 'framer-motion'

interface ProcessStep {
  step: string
  title: string
  description: string
}

interface ProcessSectionProps {
  steps: ProcessStep[]
}

export default function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-32 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight md:text-3xl mb-6">
            Kreativer Prozess
          </h2>
          <p className="text-base text-muted-foreground leading-7 max-w-2xl mx-auto">
            Von der ersten Idee bis zur finalen Installation – ein strukturierter Arbeitsablauf.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-foreground/5 flex items-center justify-center text-2xl font-bold text-foreground/60"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#f3f4f6"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {step.step}
              </motion.div>
              
              <h3 className="text-2xl font-semibold text-foreground leading-tight md:text-xl mb-4">
                {step.title}
              </h3>
              
              <p className="text-base text-muted-foreground leading-7">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
