'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Palette, Zap, PenTool, FileText, Users } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function TechStackSection() {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { 
      id: 0, 
      label: 'Design', 
      icon: Palette,
      tools: [
        { name: 'Figma', logo: '/icons/tools/Figma.png' },
        { name: 'Sketch', logo: '/icons/tools/sketch.png' },
        { name: 'Illustrator', logo: '/icons/tools/illustrator.png' },
        { name: 'Photoshop', logo: '/icons/tools/Photoshop.png' },
        { name: 'Balsamiq', logo: '/icons/tools/balsamiq_logomark.png' }
      ]
    },
    { 
      id: 1, 
      label: 'Prototyping', 
      icon: Zap,
      tools: [
        { name: 'Figma', logo: '/icons/tools/Figma.png' },
        { name: 'ProtoPie', logo: '/icons/tools/protopie.svg' },
        { name: 'HTML/CSS/JS', logo: '/icons/tools/Html-5.svg' },
        { name: 'Sketch', logo: '/icons/tools/sketch.png' },
        { name: 'Framer', logo: '/icons/tools/black-mark.png' }
      ]
    },
    { 
      id: 2, 
      label: 'Whiteboarding', 
      icon: PenTool,
      tools: [
        { name: 'FigJam', logo: '/icons/tools/Figma.png' }, // FigJam nutzt Figma Icon
        { name: 'Miro', logo: '/icons/tools/Miro_Miro_Icon_1.png' },
        { name: 'Milanote', logo: '/icons/tools/Milanote.svg' },
        { name: 'Canva', logo: '/icons/tools/canva.svg' }
      ]
    },
    { 
      id: 3, 
      label: 'Dokumentation', 
      icon: FileText,
      tools: [
        { name: 'Figma', logo: '/icons/tools/Figma.png' },
        { name: 'Storybook', logo: '/icons/tools/storybook.svg' },
        { name: 'Confluence', logo: '/icons/tools/Confluence.png' },
        { name: 'SharePoint', logo: '/icons/tools/Microsoft-SharePoint.png' }
      ]
    },
    { 
      id: 4, 
      label: 'Coop', 
      icon: Users,
      tools: [
        { name: 'Jira', logo: '/icons/tools/Jirk.png' },
        { name: 'Teams', logo: '/icons/tools/Microsoft_Office_Teams.png' },
        { name: 'Webex', logo: '/icons/tools/webex.png' },
        { name: 'Miro', logo: '/icons/tools/Miro_Miro_Icon_1.png' }
      ]
    }
  ]

  return (
    <section className="py-32 px-6 relative z-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-semibold text-foreground leading-tight tracking-tight mb-6 md:text-3xl">
            Mein Tech-Stack
          </h2>
          <p className="text-xl text-muted-foreground leading-7 max-w-prose mx-auto">
            Professionelle Tools für jeden Bereich des Design-Prozesses
          </p>
        </motion.div>

        {/* Tabs Navigation mit globaler Button Komponente */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {tabs.map((tab) => {
            const IconComponent = tab.icon
            return (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "primary" : "secondary"}
                size="sm"
                onClick={() => setActiveTab(tab.id)}
                icon="left"
                iconElement={<IconComponent className="w-4 h-4" />}
              >
                {tab.label}
              </Button>
            )
          })}
        </motion.div>

        {/* Tools Grid - vertikal zentriert mit unsichtbaren Cards */}
        <div className="flex items-center justify-center min-h-[300px]">
          <motion.div
            key={activeTab} // Key für Re-Animation bei Tab-Wechsel
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-8"
          >
            {tabs[activeTab].tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative p-8 text-center cursor-pointer"
                whileHover={{ y: -5 }}
              >
                {/* Logo - wird beim Hover ausgeblendet */}
                <motion.div
                  className="flex items-center justify-center mb-2 group-hover:opacity-0 transition-opacity duration-300"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <img 
                    src={tool.logo} 
                    alt={tool.name}
                    className="h-16 w-auto object-contain"
                  />
                </motion.div>

                {/* Name - erscheint beim Hover */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.9 }}
                  whileHover={{ scale: 1 }}
                >
                  <h3 className="font-semibold text-foreground text-lg px-2">{tool.name}</h3>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
