'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Palette, Zap, PenTool, FileText, Users } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function TechStackSectionDark() {
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
        { name: 'FigJam', logo: '/icons/tools/Figma.png' },
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
    <section className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-semibold text-white leading-tight tracking-tight md:text-3xl mb-6">
            Tech-Stack Command Center
          </h2>
          <p className="text-lg text-white/70 max-w-prose mx-auto">
            Professionelle Interface-Tools für jeden Bereich des Design-Prozesses
          </p>
        </motion.div>

        {/* Tabs Navigation mit globaler Button Komponente - Dark Mode angepasst */}
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
                className={`transition-all duration-300 ${
                  activeTab === tab.id 
                    ? 'bg-orange-500/20 text-orange-400 border-orange-400/30 shadow-lg shadow-orange-400/20' 
                    : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                {tab.label}
              </Button>
            )
          })}
        </motion.div>

        {/* Tools Grid - vertikal zentriert mit Dark Mode Styling */}
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
                className="group relative p-8 text-center cursor-pointer rounded-lg w-32 
                          bg-white/[0.02] border border-white/10 
                          hover:border-white/30 hover:bg-white/[0.05]
                          transition-all duration-300"
                style={{ 
                  boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {/* Animated border effect - SpecialButtonDark style */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-lg border border-white/20 animate-pulse" />
                  <div className="absolute -inset-[1px] rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Animated corner lines - SpecialButtonDark style */}
                <>
                  {/* Top-Left Corner */}
                  <motion.div
                    className="absolute pointer-events-none"
                    style={{
                      top: '-2px',
                      left: '-2px',
                      borderTop: '2px solid rgba(255, 255, 255, 0.6)',
                      borderLeft: '2px solid rgba(255, 255, 255, 0.6)',
                      filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.4))',
                    }}
                    initial={{ width: '8px', height: '8px' }}
                    animate={{ width: '8px', height: '8px' }}
                    whileHover={{
                      width: '50%',
                      height: '50%'
                    }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />

                  {/* Top-Right Corner */}
                  <motion.div
                    className="absolute pointer-events-none"
                    style={{
                      top: '-2px',
                      right: '-2px',
                      borderTop: '2px solid rgba(255, 255, 255, 0.6)',
                      borderRight: '2px solid rgba(255, 255, 255, 0.6)',
                      filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.4))',
                    }}
                    initial={{ width: '8px', height: '8px' }}
                    animate={{ width: '8px', height: '8px' }}
                    whileHover={{
                      width: '50%',
                      height: '50%'
                    }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />

                  {/* Bottom-Left Corner */}
                  <motion.div
                    className="absolute pointer-events-none"
                    style={{
                      bottom: '-2px',
                      left: '-2px',
                      borderBottom: '2px solid rgba(255, 255, 255, 0.6)',
                      borderLeft: '2px solid rgba(255, 255, 255, 0.6)',
                      filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.4))',
                    }}
                    initial={{ width: '8px', height: '8px' }}
                    animate={{ width: '8px', height: '8px' }}
                    whileHover={{
                      width: '50%',
                      height: '50%'
                    }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />

                  {/* Bottom-Right Corner */}
                  <motion.div
                    className="absolute pointer-events-none"
                    style={{
                      bottom: '-2px',
                      right: '-2px',
                      borderBottom: '2px solid rgba(255, 255, 255, 0.6)',
                      borderRight: '2px solid rgba(255, 255, 255, 0.6)',
                      filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.4))',
                    }}
                    initial={{ width: '8px', height: '8px' }}
                    animate={{ width: '8px', height: '8px' }}
                    whileHover={{
                      width: '50%',
                      height: '50%'
                    }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  />
                </>

                {/* Logo - wird beim Hover ausgeblendet */}
                <motion.div
                  className="flex items-center justify-center mb-2 group-hover:opacity-0 transition-opacity duration-300 relative z-10"
                >
                  <img 
                    src={tool.logo} 
                    alt={tool.name}
                    className="h-16 w-auto object-contain filter brightness-110"
                    style={{ 
                      filter: 'brightness(1.1) contrast(1.1) drop-shadow(0 0 10px rgba(255, 255, 255, 0.1))'
                    }}
                  />
                </motion.div>

                {/* Name - erscheint beim Hover */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                >
                  <h3 className="font-semibold text-white text-lg px-2" style={{ 
                    textShadow: '0 0 20px rgba(255, 255, 255, 0.5)' 
                  }}>
                    {tool.name}
                  </h3>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
