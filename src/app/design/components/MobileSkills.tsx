'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'

interface MobileSkillsProps {
  isDark?: boolean
}

const skillsData = [
  { name: 'Accessibility', value: 8, description: 'WCAG-konforme Barrierefreiheit mit 3+ Jahren Spezialisierung', shortName: 'A11y' },
  { name: 'Product Owner', value: 6, description: 'Scrum Product Owner Erfahrung in 21 Mio. Euro Großprojekten', shortName: 'PO' },
  { name: 'Requirements Engineering', value: 8, description: 'User Research, Workshops und stakeholder-orientierte Analyse', shortName: 'RE' },
  { name: 'Wireframing', value: 10, description: 'Strukturierung und erste visuelle Konzepte für komplexe Systeme', shortName: 'Wire' },
  { name: 'Prototyping', value: 9, description: 'Interaktive Prototypen und User Testing für optimale UX', shortName: 'Proto' },
  { name: 'Design Systems', value: 10, description: 'Skalierbare Komponenten-Bibliotheken und Style Guides', shortName: 'DS' },
  { name: 'Development', value: 4, description: 'Frontend-Kenntnisse für bessere Designer-Developer Zusammenarbeit', shortName: 'Dev' },
  { name: 'Rollout Planning', value: 7, description: 'Strategische Einführung und Change Management für neue Systeme', shortName: 'Rollout' },
  { name: 'Workshops', value: 9, description: 'Moderation und Durchführung von Design Thinking Workshops', shortName: 'Work' },
  { name: 'UI Design', value: 9, description: 'Visuelle Gestaltung und Interface Design für digitale Produkte', shortName: 'UI' }
]

// Mobile-optimized Circle Diagram
const MobileSkillsDiagram = ({ activeSkill, isDark }: { activeSkill: number, isDark: boolean }) => {
  const size = 280 // Größe für mobile optimiert
  const center = size / 2
  const maxRadius = center - 40
  const minRadius = 60
  
  // Berechne Ringe pro Skill basierend auf value (1-10)
  const getSkillRings = (value: number) => {
    return Math.min(value, 10)
  }
  
  // Farben für Light/Dark Mode
  const getSegmentColor = (skillIndex: number, ringLevel: number, isActive: boolean) => {
    if (isDark) {
      if (isActive) {
        // Mint green gradient für aktives Segment
        const intensity = ringLevel / 10
        const r = Math.round(135 + intensity * (154 - 135)) // 135 to 154
        const g = Math.round(206 + intensity * (255 - 206)) // 206 to 255
        const b = Math.round(235 + intensity * (211 - 235)) // 235 to 211
        return `rgb(${r}, ${g}, ${b})`
      } else {
        // Graue Segmente für inaktive
        const intensity = ringLevel / 10
        return `rgba(75, 85, 99, ${0.3 + intensity * 0.4})`
      }
    } else {
      if (isActive) {
        // Blue gradient für Light Mode
        const intensity = ringLevel / 10
        const r = Math.round(135 - intensity * (135 - 45)) // 135 to 45
        const g = Math.round(206 - intensity * (206 - 55)) // 206 to 55
        const b = Math.round(235 - intensity * (235 - 72)) // 235 to 72
        return `rgb(${r}, ${g}, ${b})`
      } else {
        // Graue Segmente für inaktive
        const intensity = ringLevel / 10
        return `rgba(156, 163, 175, ${0.2 + intensity * 0.3})`
      }
    }
  }
  
  const totalSkills = skillsData.length
  const angleStep = (2 * Math.PI) / totalSkills
  
  // SVG path für Segmente erstellen
  const createSegmentPath = (skillIndex: number, ringLevel: number) => {
    const startAngle = skillIndex * angleStep - Math.PI / 2 // Start bei 12 Uhr
    const endAngle = (skillIndex + 1) * angleStep - Math.PI / 2
    
    const ringThickness = (maxRadius - minRadius) / 10
    const innerRadius = minRadius + (ringLevel - 1) * ringThickness
    const outerRadius = minRadius + ringLevel * ringThickness
    
    const x1 = center + innerRadius * Math.cos(startAngle)
    const y1 = center + innerRadius * Math.sin(startAngle)
    const x2 = center + outerRadius * Math.cos(startAngle)
    const y2 = center + outerRadius * Math.sin(startAngle)
    const x3 = center + outerRadius * Math.cos(endAngle)
    const y3 = center + outerRadius * Math.sin(endAngle)
    const x4 = center + innerRadius * Math.cos(endAngle)
    const y4 = center + innerRadius * Math.sin(endAngle)
    
    const largeArcFlag = angleStep > Math.PI ? 1 : 0
    
    return `
      M ${x1} ${y1}
      L ${x2} ${y2}
      A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x3} ${y3}
      L ${x4} ${y4}
      A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x1} ${y1}
      Z
    `
  }
  
  return (
    <div className="flex items-center justify-center">
      <svg width={size} height={size} className="drop-shadow-lg">
        {/* Alle Skill-Segmente */}
        {skillsData.map((skill, skillIndex) => {
          const isActive = skillIndex === activeSkill
          const rings = getSkillRings(skill.value)
          
          return (
            <g key={skillIndex}>
              {/* Ringe für diesen Skill */}
              {Array.from({ length: rings }, (_, ringIndex) => (
                <path
                  key={`${skillIndex}-${ringIndex}`}
                  d={createSegmentPath(skillIndex, ringIndex + 1)}
                  fill={getSegmentColor(skillIndex, ringIndex + 1, isActive)}
                  stroke={isDark ? '#1f2937' : '#ffffff'}
                  strokeWidth={1}
                  className={`transition-all duration-500 ${
                    isActive ? 'opacity-100' : 'opacity-40'
                  }`}
                  style={{
                    filter: isActive && isDark 
                      ? 'drop-shadow(0 0 8px rgba(154, 255, 211, 0.6))' 
                      : isActive 
                      ? 'drop-shadow(0 0 6px rgba(45, 55, 72, 0.4))'
                      : 'none'
                  }}
                />
              ))}
            </g>
          )
        })}
        
        {/* Zentrale Markierung */}
        <circle
          cx={center}
          cy={center}
          r={minRadius - 10}
          fill="none"
          stroke={isDark ? '#374151' : '#e5e7eb'}
          strokeWidth={2}
          className="opacity-30"
        />
        
        {/* Aktive Skill Anzeige im Zentrum */}
        <text
          x={center}
          y={center - 5}
          textAnchor="middle"
          className={`text-sm font-semibold fill-current ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}
        >
          {activeSkill + 1}
        </text>
        <text
          x={center}
          y={center + 15}
          textAnchor="middle"
          className={`text-xs fill-current ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          / {skillsData.length}
        </text>
      </svg>
    </div>
  )
}

export default function MobileSkills({ isDark = false }: MobileSkillsProps) {
  const [activeSkill, setActiveSkill] = useState(0)

  return (
    <div className={`py-16 ${isDark ? 'bg-[#1a1d23]' : 'bg-white'}`}>
      {/* Header */}
      <div className="text-center px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`text-3xl font-semibold mb-4 ${
            isDark ? 'text-white' : 'text-[#1f2d45]'
          }`}
        >
          Meine UX/UI Expertise
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-white/70' : 'text-[#737373]'
          }`}
        >
          Kompetenzprofil im UX/UI Design – von Research bis Rollout
        </motion.p>
      </div>

      {/* Mobile Diagram */}
      <div className="flex justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <MobileSkillsDiagram activeSkill={activeSkill} isDark={isDark} />
        </motion.div>
      </div>

      {/* Tab Navigation */}
      <div className="px-4 mb-8">
        <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto" 
             style={{ maxWidth: '100%' }}>
          {skillsData.map((skill, index) => (
            <Button
              key={index}
              variant={index === activeSkill ? "primary" : "default"}
              size="xs"
              onClick={() => setActiveSkill(index)}
              className={`whitespace-nowrap ${
                index === activeSkill
                  ? isDark 
                    ? 'bg-cyan-400 text-black shadow-lg shadow-cyan-400/30' 
                    : 'bg-[#2d3748] text-white shadow-lg'
                  : isDark
                    ? 'bg-gray-800/60 text-white/70 hover:bg-gray-800 hover:text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
              }`}
              style={{ 
                flex: '0 0 auto',
                maxWidth: '20%' // Maximal 5 Tabs pro Reihe (100% / 5 = 20%)
              }}
            >
              {skill.shortName}
            </Button>
          ))}
        </div>
      </div>

      {/* Skill Info */}
      <div className="px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSkill}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="text-center max-w-sm mx-auto"
          >
            <h3 className={`text-2xl font-semibold mb-3 ${
              isDark ? 'text-white' : 'text-[#1f2d45]'
            }`}>
              {skillsData[activeSkill].name}
            </h3>
            
            <p className={`text-sm font-medium mb-4 ${
              isDark ? 'text-cyan-400' : 'text-[#2d3748]'
            }`}>
              Erfahrungslevel: {skillsData[activeSkill].value}/10
            </p>
            
            <p className={`text-base leading-relaxed ${
              isDark ? 'text-white/80' : 'text-[#737373]'
            }`}>
              {skillsData[activeSkill].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
