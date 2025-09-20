'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SpecialButton from '@/components/ui/SpecialButton'
import SpecialButtonDark from '@/components/ui/SpecialButtonDark'
import * as d3 from 'd3'

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

// Mobile-optimized Circle Diagram using Desktop design
const MobileSkillsDiagram = ({ activeSkill, isDark }: { activeSkill: number, isDark: boolean }) => {
  const svgRef = useRef<SVGSVGElement>(null)

  type Skill = {
    name: string
    value: number
    shortName: string
    description: string
  }

  useEffect(() => {
    if (!svgRef.current) return

    const svg = d3.select(svgRef.current)
    svg.selectAll("*").remove()

    // Color based on dark mode - mint green for dark, orange for light
    const getSkillColor = () => {
      return isDark ? '#9AFFB5' : '#ffc800ff' // Mint green for dark mode, orange for light
    }

    const width = 300 // Smaller size for mobile
    const height = 300
    const centerX = width / 2
    const centerY = height / 2
    const innerRadius = 20 // Smaller inner radius
    const maxRadius = 100 // Smaller outer radius
    const segmentHeight = 80 // Smaller segments

    svg.attr('width', width).attr('height', height)

    // Create pie layout with padding for white space
    const pie = d3.pie<Skill>()
      .padAngle(0.08) // Increased padding for 2px white space
      .value(() => 1) // Equal segments
      .sort(null)

    const pieData = pie(skillsData)

    // Create invisible full-segment areas for hover detection
    const hoverAreas = svg.selectAll('.hover-area')
      .data(pieData)
      .enter()
      .append('path')
      .attr('class', 'hover-area')
      .attr('transform', `translate(${centerX}, ${centerY})`)
      .attr('d', (d: any) => {
        const fullArc = d3.arc<any>()
          .innerRadius(innerRadius)
          .outerRadius(maxRadius)
          .startAngle(d.startAngle)
          .endAngle(d.endAngle)
        return fullArc(d)
      })
      .attr('fill', 'transparent')
      .attr('stroke', 'none')
      .style('cursor', 'pointer')

    // Create segment groups
    const segmentGroups = svg.selectAll('.segment-group')
      .data(pieData)
      .enter()
      .append('g')
      .attr('class', 'segment-group')
      .attr('transform', `translate(${centerX}, ${centerY})`)

    // Create segments for each skill - background + filled segment
    pieData.forEach((pieSlice, segmentIndex) => {
      const skill = pieSlice.data
      const segmentGroup = d3.select(segmentGroups.nodes()[segmentIndex])
      
      // Calculate the radius based on skill level (0-10)
      const skillRadius = innerRadius + (skill.value / 10) * segmentHeight
      const maxSkillRadius = innerRadius + segmentHeight // Maximum radius for background
      const segmentColor = getSkillColor()
      
      // Background segment - dark gray for dark mode, light yellow for light mode
      const backgroundArc = d3.arc<any>()
        .innerRadius(innerRadius)
        .outerRadius(maxSkillRadius)
        .startAngle(pieSlice.startAngle)
        .endAngle(pieSlice.endAngle)
        .cornerRadius(12) // Smaller corner radius

      const backgroundPathData = backgroundArc({} as any)

      segmentGroup.append('path')
        .attr('class', 'background-segment')
        .attr('d', backgroundPathData)
        .attr('fill', isDark ? '#374151' : '#ebde87ff') // Dark gray for dark mode, light yellow for light mode
        .attr('stroke', isDark ? '#1f2937' : '#ffffff') // Dark border for dark mode, white for light mode
        .attr('stroke-width', isDark ? 3 : 2) // Thicker border for dark mode
        .style('opacity', 0.25) // 25% opacity
        .style('pointer-events', 'none')

      // Foreground segment - mint green for dark mode, orange for light mode
      const foregroundArc = d3.arc<any>()
        .innerRadius(innerRadius)
        .outerRadius(skillRadius)
        .startAngle(pieSlice.startAngle)
        .endAngle(pieSlice.endAngle)
        .cornerRadius(12) // Smaller corner radius

      const foregroundPathData = foregroundArc({} as any)

      const isActive = segmentIndex === activeSkill

      segmentGroup.append('path')
        .attr('class', 'skill-segment')
        .attr('d', foregroundPathData)
        .attr('fill', segmentColor)
        .attr('stroke', isDark ? '#1f2937' : '#ffffff') // Dark border for dark mode, white for light mode
        .attr('stroke-width', isDark ? 3 : 2) // Thicker border for dark mode
        .style('opacity', isActive ? 1 : 0.5) // Full opacity for active, 50% for others
        .style('cursor', 'pointer')
        .style('filter', isActive ? 
          (isDark ? 'drop-shadow(0 0 15px rgba(154, 255, 181, 0.6))' : 'drop-shadow(0 0 15px rgba(255, 174, 0, 0.6))') 
          : 'none')
        .transition()
        .delay(segmentIndex * 100) // Staggered animation
        .duration(800)
    })

    // Add lemonzest.png as background image behind the chart (only in light mode)
    if (!isDark) {
      svg.append('image')
        .attr('href', '/images/Lemon and leafs/lemonzest.png')
        .attr('x', centerX - 150) // Center the image (300px width)
        .attr('y', centerY - 150) // Center the image (300px height)
        .attr('width', 300)
        .attr('height', 300)
        .style('opacity', 0.8) // Semi-transparent background
        .style('pointer-events', 'none')
    }

    // Add center circle with dark mode support
    svg.append('circle')
      .attr('cx', centerX)
      .attr('cy', centerY)
      .attr('r', innerRadius)
      .attr('fill', isDark ? '#1a1d23' : '#ffffff') // Dark background for dark mode
      .attr('stroke', isDark ? '#374151' : 'none') // Dark border for dark mode
      .attr('stroke-width', isDark ? 2 : 0)

  }, [activeSkill])

  return (
    <div className="flex items-center justify-center">
      <svg ref={svgRef} className="max-w-full h-auto drop-shadow-lg" />
    </div>
  )
}

export default function MobileSkills({ isDark = false }: MobileSkillsProps) {
  const [activeSkill, setActiveSkill] = useState(0)

  return (
    <div className={`py-16 ${isDark ? '' : 'bg-white'}`}>
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
      <div className="flex justify-center py-2">
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
        <div className="flex flex-wrap gap-2 justify-center max-w-4xl mx-auto">
          {skillsData.map((skill, index) => {
            if (isDark) {
              return (
                <SpecialButtonDark
                  key={index}
                  variant={index === activeSkill ? "primary" : "secondary"}
                  size="sm"
                  onClick={() => setActiveSkill(index)}
                  className="whitespace-nowrap"
                >
                  {skill.shortName}
                </SpecialButtonDark>
              )
            } else {
              return (
                <SpecialButton
                  key={index}
                  variant={index === activeSkill ? "primary" : "secondary"}
                  size="xs"
                  onClick={() => setActiveSkill(index)}
                  className="whitespace-nowrap"
                >
                  {skill.shortName}
                </SpecialButton>
              )
            }
          })}
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
