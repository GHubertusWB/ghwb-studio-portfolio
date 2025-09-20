'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, px } from 'framer-motion'
import * as d3 from 'd3'
import SpecialButton from '@/components/ui/SpecialButton'

type Skill = {
  name: string
  value: number
  shortName: string
}

interface SkillsCircleChartProps {
  onSegmentHover?: (index: number | null) => void;
  hoveredSkill?: number | null;
  hideLabels?: boolean;
}

export default function SkillsCircleChart({ onSegmentHover, hoveredSkill, hideLabels = false }: SkillsCircleChartProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [selectedSkill, setSelectedSkill] = useState<number>(0) // Start with first segment

  const skillsData = [
    { name: 'Accessibility', value: 8, shortName: 'Accessibility' },
    { name: 'Product Owner', value: 6, shortName: 'Product Owner' },
    { name: 'Requirements Engineering', value: 8, shortName: 'RE' },
    { name: 'Wireframing', value: 10, shortName: 'Wireframing' },
    { name: 'Prototyping', value: 9, shortName: 'Prototyping' },
    { name: 'Design Systems', value: 10, shortName: 'Design Systems' },
    { name: 'Development', value: 4, shortName: 'Development' },
    { name: 'Rollout Planning', value: 7, shortName: 'Rollout Planning' },
    { name: 'Workshops', value: 9, shortName: 'Workshops' },
    { name: 'UI Design', value: 9, shortName: 'UI' }
  ]

  useEffect(() => {
    if (!svgRef.current) return

    const svg = d3.select(svgRef.current)
    svg.selectAll("*").remove()

    // All segments in orange like SpecialButton
    const getSkillColor = () => {
      return '#ffc800ff' // Same orange as SpecialButton
    }

    const width = 450
    const height = 450
    const centerX = width / 2
    const centerY = height / 2
    const innerRadius = 30 // Etwas größerer Innenradius
    const maxRadius = 200 // Größerer Außenradius
    const segmentHeight = 150 // Größere Segmente

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
      .attr('data-index', (d: any, i: number) => i)

    // Create segment groups
    const segmentGroups = svg.selectAll('.segment-group')
      .data(pieData)
      .enter()
      .append('g')
      .attr('class', 'segment-group')
      .attr('transform', `translate(${centerX}, ${centerY})`)
      .attr('data-index', (d: any, i: number) => i)

    // Create segments for each skill - background + filled segment
    pieData.forEach((pieSlice, segmentIndex) => {
      const skill = pieSlice.data
      const segmentGroup = d3.select(segmentGroups.nodes()[segmentIndex])
      
      // Calculate the radius based on skill level (0-10)
      const skillRadius = innerRadius + (skill.value / 10) * segmentHeight
      const maxSkillRadius = innerRadius + segmentHeight // Maximum radius for background
      const segmentColor = getSkillColor()
      
      console.log(`Segment ${segmentIndex}: ${skill.name}, value: ${skill.value}, radius: ${skillRadius}`)

      // Background segment (hellblau, 10% opacity, max radius)
      const backgroundArc = d3.arc<any>()
        .innerRadius(innerRadius)
        .outerRadius(maxSkillRadius)
        .startAngle(pieSlice.startAngle)
        .endAngle(pieSlice.endAngle)
        .cornerRadius(16) // Stärkere Abrundung

      const backgroundPathData = backgroundArc({} as any)

      segmentGroup.append('path')
        .attr('class', 'background-segment')
        .attr('d', backgroundPathData)
        .attr('fill', '#ebde87ff') // Light blue background
        .attr('stroke', '#ffffff') // White border
        .attr('stroke-width', 3)
        .style('opacity', 0.25) // 10% opacity
        .style('pointer-events', 'none')

      // Foreground segment (orange, skill-based radius)
      const foregroundArc = d3.arc<any>()
        .innerRadius(innerRadius)
        .outerRadius(skillRadius)
        .startAngle(pieSlice.startAngle)
        .endAngle(pieSlice.endAngle)
        .cornerRadius(16) // Stärkere Abrundung

      const foregroundPathData = foregroundArc({} as any)

      segmentGroup.append('path')
        .attr('class', 'skill-segment')
        .attr('d', foregroundPathData)
        .attr('fill', segmentColor)
        .attr('stroke', '#ffffff') // White border for orange segment
        .attr('stroke-width', 3)
        .style('opacity', 0.5) // 50% opacity by default
        .style('cursor', 'pointer')
        .transition()
        .delay(segmentIndex * 100) // Staggered animation
        .duration(800)
        .style('opacity', 0.5)
    })

    // Entferne gestrichelte Kreise komplett

    // Entferne radiale Linien für cleaneren Look wie im Referenzbild
    // Das Referenzbild hat keine sichtbaren Trennlinien zwischen Segmenten

    // Add skill labels - positioned on segment centers (only if not hidden)
    if (!hideLabels) {
      // Mobile-style abbreviated labels
      const mobileLabels = [
        'A11Y',        // Accessibility
        'PO',          // Product Owner
        'RE',          // Requirements Engineering
        'Wire',        // Wireframing
        'Proto',       // Prototyping
        'DS',          // Design Systems
        'Dev',         // Development
        'Roll',        // Rollout Planning
        'Work',        // Workshops
        'UI'           // UI Design
      ]

      pieData.forEach((pieSlice, i) => {
        const skill = pieSlice.data
        
        // Calculate middle angle and position in center of the actual skill segment (orange part)
        const middleAngle = (pieSlice.startAngle + pieSlice.endAngle) / 2 - Math.PI / 2
        const skillRadius = innerRadius + (skill.value / 10) * segmentHeight
        
        // Position label in the middle of the filled (orange) segment
        const labelRadius = innerRadius + (skillRadius - innerRadius) * 0.5
        const x = centerX + labelRadius * Math.cos(middleAngle)
        const y = centerY + labelRadius * Math.sin(middleAngle)
        
        // Calculate rotation angle in degrees (convert from radians) + 90 degrees
        const rotationAngle = (middleAngle + Math.PI / 2) * (180 / Math.PI) + 90
        
        // Adjust rotation for better readability (flip text if it would be upside down)
        const adjustedRotation = rotationAngle > 90 && rotationAngle < 270 
          ? rotationAngle + 180 
          : rotationAngle
        
        // Single line with mobile abbreviation
        svg.append('text')
          .attr('x', x)
          .attr('y', y)
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle')
          .attr('transform', `rotate(${adjustedRotation}, ${x}, ${y})`)
          .style('font-family', 'Poppins, sans-serif')
          .style('font-size', '16px')
          .style('font-weight', 'bold')
          .style('fill', '#ffffff')
          .style('pointer-events', 'none')
          .text(mobileLabels[i])
      })
    }

    // Add lemonzest.png as background image behind the chart
    svg.append('image')
      .attr('href', '/images/Lemon and leafs/lemonzest.png')
      .attr('x', centerX - 220) // Center the image (assuming 440px width)
      .attr('y', centerY - 220) // Center the image (assuming 440px height)
      .attr('width', 440)
      .attr('height', 440)
      .style('opacity', 0.8) // Semi-transparent background
      .style('pointer-events', 'none')

    // Add center circle - ohne schwarze Border
    svg.append('circle')
      .attr('cx', centerX)
      .attr('cy', centerY)
      .attr('r', innerRadius)
      .attr('fill', '#ffffff')
      .attr('stroke', 'none')

    // Create click and hover functions
    const handleClick = function(event: any, d: any) {
      const index = skillsData.indexOf(d.data)
      setSelectedSkill(index)
      if (onSegmentHover) onSegmentHover(index)
    }

    const handleMouseEnter = function(event: any, d: any) {
      const index = skillsData.indexOf(d.data)
      if (onSegmentHover) onSegmentHover(index)
      
      // Find corresponding segment and animate it
      const segmentGroup = d3.select(segmentGroups.nodes()[index])
      const segment = segmentGroup.select('.skill-segment')
      
      segment
        .transition()
        .duration(200)
        .style('opacity', 1) // 100% opacity on hover
        .style('filter', 'drop-shadow(0 0 20px rgba(255, 174, 0, 0.6))') // Leuchten-Effekt
    }

    const handleMouseLeave = function(event: any, d: any) {
      const index = skillsData.indexOf(d.data)
      // Keep selected skill highlighted
      if (index !== selectedSkill) {
        if (onSegmentHover) onSegmentHover(selectedSkill)
        
        // Find corresponding segment and return to normal state
        const segmentGroup = d3.select(segmentGroups.nodes()[index])
        const segment = segmentGroup.select('.skill-segment')
        
        segment
          .transition()
          .duration(200)
          .style('opacity', 0.5) // Back to 50% transparency
          .style('filter', 'none') // Entferne Leuchten-Effekt
      }
    }

    // Add click and hover effects to invisible hover areas (full segments)
    hoverAreas
      .on('click', handleClick)
      .on('mouseenter', handleMouseEnter)
      .on('mouseleave', handleMouseLeave)

    // Add click and hover effects to segment groups (colored parts)
    segmentGroups
      .on('click', handleClick)
      .on('mouseenter', handleMouseEnter)
      .on('mouseleave', handleMouseLeave)

    // Initialize first segment as selected
    if (selectedSkill !== null) {
      const segmentGroup = d3.select(segmentGroups.nodes()[selectedSkill])
      const segment = segmentGroup.select('.skill-segment')
      
      segment
        .style('opacity', 1)
        .style('filter', 'drop-shadow(0 0 20px rgba(255, 174, 0, 0.6))')
    }
  }, [onSegmentHover])

  // Handle external hover state changes
  useEffect(() => {
    if (!svgRef.current) return
    
    const svg = d3.select(svgRef.current)
    const segmentGroups = svg.selectAll('.segment-group')
    
    segmentGroups.each(function(_, i) {
      const segmentGroup = d3.select(this)
      const segment = segmentGroup.select('.skill-segment')
      
      if (hoveredSkill === i || selectedSkill === i) {
        // Apply hover/selected state
        segment
          .transition()
          .duration(200)
          .style('opacity', 1)
          .style('filter', 'drop-shadow(0 0 20px rgba(255, 174, 0, 0.6))')
      } else {
        // Return to normal state
        segment
          .transition()
          .duration(200)
          .style('opacity', 0.5)
          .style('filter', 'none')
      }
    })
  }, [hoveredSkill, selectedSkill])

  // Initialize first skill on mount
  useEffect(() => {
    if (onSegmentHover) onSegmentHover(selectedSkill)
  }, [])

  const navigateSkills = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? (selectedSkill + 1) % skillsData.length
      : (selectedSkill - 1 + skillsData.length) % skillsData.length
    
    setSelectedSkill(newIndex)
    if (onSegmentHover) onSegmentHover(newIndex)
  }

  const skillsInfo = [
    { name: 'Accessibility', level: '8/10', description: 'WCAG-konforme Barrierefreiheit mit 3+ Jahren Spezialisierung in digitaler Inklusion. Erfahrung in ARIA-Standards, Screenreader-Optimierung und benutzerfreundlichen Interfaces für Menschen mit Behinderungen.' },
    { name: 'Product Owner', level: '6/10', description: 'Scrum Product Owner Erfahrung in 21 Mio. Euro Großprojekten mit Fokus auf agile Produktentwicklung. Verantwortung für Backlog-Management, Stakeholder-Kommunikation und strategische Roadmap-Planung.' },
    { name: 'Requirements Engineering', level: '8/10', description: 'User Research, Workshops und stakeholder-orientierte Analyse mit systematischer Herangehensweise. Expertise in der Erhebung, Dokumentation und Validierung von Anforderungen durch verschiedene Methoden.' },
    { name: 'Wireframing', level: '10/10', description: 'Strukturierung und erste visuelle Konzepte für komplexe Systeme mit präziser Informationsarchitektur. Expertise in Low-Fi und High-Fi Wireframes, User Journey Mapping und Navigation Design.' },
    { name: 'Prototyping', level: '9/10', description: 'Interaktive Prototypen und User Testing für optimale UX mit fokussiertem Feedback-Management. Erfahrung in Rapid Prototyping, A/B Testing und Usability Studies für bessere Nutzererfahrungen.' },
    { name: 'Design Systems', level: '10/10', description: 'Skalierbare Komponenten-Bibliotheken und Style Guides für konsistente Markenführung. Aufbau von Design Tokens, UI-Komponenten und Dokumentation für cross-funktionale Teams.' },
    { name: 'Development', level: '4/10', description: 'Frontend-Kenntnisse für bessere Designer-Developer Zusammenarbeit mit Grundlagen in HTML, CSS und JavaScript. Verständnis für technische Constraints und Machbarkeit von Design-Entscheidungen.' },
    { name: 'Rollout Planning', level: '7/10', description: 'Strategische Einführung und Change Management für neue Systeme mit strukturierter Herangehensweise. Erfahrung in Pilot-Programmen, Schulungskonzepten und sukzessiver Feature-Einführung.' },
    { name: 'Workshops', level: '9/10', description: 'Moderation und Durchführung von Design Thinking Workshops mit kreativen Problemlösungsansätzen. Erfahrung in der Leitung von interdisziplinären Teams und Collaborative Design Sprints.' },
    { name: 'UI Design', level: '9/10', description: 'Visuelle Gestaltung und Interface Design für digitale Produkte mit modernen Design-Trends. Expertise in Typography, Color Theory, Layout-Prinzipien und Visual Hierarchy für verschiedene Plattformen.' }
  ]

  const currentSkill = skillsInfo[hoveredSkill !== null && hoveredSkill !== undefined ? hoveredSkill : selectedSkill]

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-16">
      {/* Chart */}
      <div className="flex justify-center items-center">
        <svg ref={svgRef} className="max-w-full h-auto" />
      </div>
      
      {/* Info Panel - responsive height */}
      <div className="w-full lg:w-80 lg:pt-4 lg:pb-4" >
        <div className="bg-white border-1 border-black shadow-sm flex flex-col relative h-auto lg:h-[410px] min-h-[300px]">
          <div className="p-6 pb-20 flex-1 overflow-hidden">
            <h3 className="text-2xl font-medium text-gray-900 mb-2 text-left">
              {currentSkill.name}
            </h3>
            
            <p className="text-sm text-orange-400 font-medium mb-4 tracking-wide text-left">
              Erfahrungslevel: {currentSkill.level}
            </p>
            
            <p className="text-base text-gray-600 leading-relaxed text-left">
              {currentSkill.description}
            </p>
          </div>
          
          {/* Navigation Buttons - fixed at bottom */}
          <div className="absolute left-6 right-6 flex justify-between gap-4" style={{ bottom: '22px' }}>
            <SpecialButton
              variant="secondary"
              size="sm"
              onClick={() => navigateSkills('prev')}
              className="flex-1"
            >
              ← Vorherige
            </SpecialButton>
            <SpecialButton
              variant="primary"
              size="sm"
              onClick={() => navigateSkills('next')}
              className="flex-1"
            >
              Nächste →
            </SpecialButton>
          </div>
        </div>
      </div>
    </div>
  )
}
