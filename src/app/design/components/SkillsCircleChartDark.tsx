'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import * as d3 from 'd3'
import SpecialButtonDark from '@/components/ui/SpecialButtonDark'

type Skill = {
  name: string
  value: number
  shortName: string
}

interface SkillsCircleChartDarkProps {
  onSegmentHover?: (index: number | null) => void;
  hoveredSkill?: number | null;
  hideLabels?: boolean;
}

export default function SkillsCircleChartDark({ onSegmentHover, hoveredSkill, hideLabels = false }: SkillsCircleChartDarkProps) {
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

    // All segments in mint green for dark mode
    const getSkillColor = () => {
      return '#9AFFB5' // Mint green for dark mode
    }

    const width = 450
    const height = 450
    const centerX = width / 2
    const centerY = height / 2
    const innerRadius = 30
    const maxRadius = 200
    const segmentHeight = 150

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
      
      // Background segment (dark gray, 25% opacity, max radius)
      const backgroundArc = d3.arc<any>()
        .innerRadius(innerRadius)
        .outerRadius(maxSkillRadius)
        .startAngle(pieSlice.startAngle)
        .endAngle(pieSlice.endAngle)
        .cornerRadius(16)

      const backgroundPathData = backgroundArc({} as any)

      segmentGroup.append('path')
        .attr('class', 'background-segment')
        .attr('d', backgroundPathData)
        .attr('fill', '#374151') // Dark gray background for dark mode
        .attr('stroke', '#1f2937') // Dark border
        .attr('stroke-width', 3)
        .style('opacity', 0.25) // 25% opacity
        .style('pointer-events', 'none')

      // Foreground segment (mint green, skill-based radius)
      const foregroundArc = d3.arc<any>()
        .innerRadius(innerRadius)
        .outerRadius(skillRadius)
        .startAngle(pieSlice.startAngle)
        .endAngle(pieSlice.endAngle)
        .cornerRadius(16)

      const foregroundPathData = foregroundArc({} as any)

      segmentGroup.append('path')
        .attr('class', 'skill-segment')
        .attr('d', foregroundPathData)
        .attr('fill', segmentColor)
        .attr('stroke', '#1f2937') // Dark border for mint segments
        .attr('stroke-width', 3)
        .style('opacity', 0.5) // 50% opacity by default
        .style('cursor', 'pointer')
        .transition()
        .delay(segmentIndex * 100) // Staggered animation
        .duration(800)
        .style('opacity', 0.5)
    })

    // Create white border overlay segments - these will be on top of all other segments
    const whiteBorderGroups = svg.selectAll('.white-border-group')
      .data(pieData)
      .enter()
      .append('g')
      .attr('class', 'white-border-group')
      .attr('transform', `translate(${centerX}, ${centerY})`)
      .style('pointer-events', 'none') // Don't interfere with interactions

    pieData.forEach((pieSlice, segmentIndex) => {
      const skill = pieSlice.data
      const whiteBorderGroup = d3.select(whiteBorderGroups.nodes()[segmentIndex])
      
      const skillRadius = innerRadius + (skill.value / 10) * segmentHeight
      const maxSkillRadius = innerRadius + segmentHeight

      // White border for background segment
      const backgroundArc = d3.arc<any>()
        .innerRadius(innerRadius)
        .outerRadius(maxSkillRadius)
        .startAngle(pieSlice.startAngle)
        .endAngle(pieSlice.endAngle)
        .cornerRadius(16)

      whiteBorderGroup.append('path')
        .attr('class', 'white-background-border')
        .attr('d', backgroundArc({} as any))
        .attr('fill', 'none')
        .attr('stroke', '#1f2937') // Start with dark border
        .attr('stroke-width', 2)
        .style('opacity', 0)

      // White border for skill segment
      const foregroundArc = d3.arc<any>()
        .innerRadius(innerRadius)
        .outerRadius(skillRadius)
        .startAngle(pieSlice.startAngle)
        .endAngle(pieSlice.endAngle)
        .cornerRadius(16)

      whiteBorderGroup.append('path')
        .attr('class', 'white-skill-border')
        .attr('d', foregroundArc({} as any))
        .attr('fill', 'none')
        .attr('stroke', '#1f2937') // Start with dark border
        .attr('stroke-width', 2)
        .style('opacity', 0)
    })

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
        
        // Calculate middle angle and position in center of the actual skill segment (mint part)
        const middleAngle = (pieSlice.startAngle + pieSlice.endAngle) / 2 - Math.PI / 2
        const skillRadius = innerRadius + (skill.value / 10) * segmentHeight
        
        // Position label in the middle of the filled (mint) segment
        const labelRadius = innerRadius + (skillRadius - innerRadius) * 0.5
        const x = centerX + labelRadius * Math.cos(middleAngle)
        const y = centerY + labelRadius * Math.sin(middleAngle)
        
        // Calculate rotation angle in degrees (convert from radians) + 90 degrees
        const rotationAngle = (middleAngle + Math.PI / 2) * (180 / Math.PI) + 90
        
        // Adjust rotation for better readability (flip text if it would be upside down)
        const adjustedRotation = rotationAngle > 90 && rotationAngle < 270 
          ? rotationAngle + 180 
          : rotationAngle
        
        // Single line with mobile abbreviation - black text for contrast on mint background
        svg.append('text')
          .attr('x', x)
          .attr('y', y)
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle')
          .attr('transform', `rotate(${adjustedRotation}, ${x}, ${y})`)
          .style('font-family', 'Poppins, sans-serif')
          .style('font-size', '16px')
          .style('font-weight', 'bold')
          .style('fill', '#000000') // Black text for contrast on mint background
          .style('pointer-events', 'none')
          .text(mobileLabels[i])
      })
    }

    
    // Create click and hover functions
    const handleClick = function(event: any, d: any) {
      const index = skillsData.indexOf(d.data)
      setSelectedSkill(index)
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
        .style('filter', 'drop-shadow(0 0 20px rgba(154, 255, 181, 0.6))') // Mint glow effect
    }

    const handleMouseLeave = function(event: any, d: any) {
      if (onSegmentHover) onSegmentHover(null)
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
      const backgroundSegment = segmentGroup.select('.background-segment')
      
      // Get corresponding white border group
      const whiteBorderGroup = d3.select(whiteBorderGroups.nodes()[selectedSkill])
      const whiteBackgroundBorder = whiteBorderGroup.select('.white-background-border')
      const whiteSkillBorder = whiteBorderGroup.select('.white-skill-border')
      
      segment
        .style('opacity', 1)
        .style('filter', 'drop-shadow(0 0 20px rgba(154, 255, 181, 0.6))')
      
      // Show background segment at full opacity
      backgroundSegment
        .style('opacity', 1)
      
      // Initialize white borders on top layer
      whiteBackgroundBorder
        .attr('stroke', '#ffffff')
        .style('opacity', 1)
      
      whiteSkillBorder
        .attr('stroke', '#ffffff')
        .style('opacity', 1)
    }
  }, [onSegmentHover, selectedSkill])

  // Handle external hover state changes
  useEffect(() => {
    if (!svgRef.current) return
    
    const svg = d3.select(svgRef.current)
    const segmentGroups = svg.selectAll('.segment-group')
    const whiteBorderGroups = svg.selectAll('.white-border-group')
    
    segmentGroups.each(function(_, i) {
      const segmentGroup = d3.select(this)
      const segment = segmentGroup.select('.skill-segment')
      const backgroundSegment = segmentGroup.select('.background-segment')
      
      // Get corresponding white border group
      const whiteBorderGroup = d3.select(whiteBorderGroups.nodes()[i])
      const whiteBackgroundBorder = whiteBorderGroup.select('.white-background-border')
      const whiteSkillBorder = whiteBorderGroup.select('.white-skill-border')
      
      // Priority: hoveredSkill if exists, otherwise selectedSkill
      const activeSkill = hoveredSkill !== null && hoveredSkill !== undefined ? hoveredSkill : selectedSkill
      
      if (i === activeSkill) {
        // Apply hover/selected state
        segment
          .transition()
          .duration(300)
          .style('opacity', 1)
          .style('filter', 'drop-shadow(0 0 20px rgba(154, 255, 181, 0.6))')
        
        // Show background segment at full opacity
        backgroundSegment
          .transition()
          .duration(300)
          .style('opacity', 1)
        
        // Animate white borders on top layer
        whiteBackgroundBorder
          .transition()
          .duration(400)
          .attr('stroke', '#ffffff')
          .style('opacity', 1)
        
        whiteSkillBorder
          .transition()
          .duration(400)
          .attr('stroke', '#ffffff')
          .style('opacity', 1)
      } else {
        // Return to normal state
        segment
          .transition()
          .duration(300)
          .style('opacity', 0.5)
          .style('filter', 'none')
        
        // Return background segment to normal opacity
        backgroundSegment
          .transition()
          .duration(300)
          .style('opacity', 0.25)
        
        // Hide white borders smoothly
        whiteBackgroundBorder
          .transition()
          .duration(400)
          .attr('stroke', '#1f2937')
          .style('opacity', 0)
        
        whiteSkillBorder
          .transition()
          .duration(400)
          .attr('stroke', '#1f2937')
          .style('opacity', 0)
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
      {/* Chart with HUD Background */}
      <div className="flex justify-center items-center relative">
        {/* HUD Background SVG */}
        <div className="absolute inset-0 pointer-events-none flex justify-center items-center">
          <svg 
            width="450" 
            height="450" 
            viewBox="0 0 450 450" 
            className="drop-shadow-lg opacity-30"
            style={{ filter: 'drop-shadow(0 0 10px rgba(154, 255, 181, 0.3))' }}
          >
            {/* Outer HUD Ring */}
            <motion.circle
              cx="225"
              cy="225"
              r="210"
              fill="none"
              stroke="#9AFFB5"
              strokeWidth="1"
              strokeDasharray="8,12"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "225px 225px" }}
            />
            
            {/* Inner HUD Ring */}
            <motion.circle
              cx="225"
              cy="225"
              r="195"
              fill="none"
              stroke="#ffffff"
              strokeWidth="0.5"
              strokeOpacity="0.4"
              strokeDasharray="4,8"
              initial={{ rotate: 0 }}
              animate={{ rotate: -360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "225px 225px" }}
            />

            {/* Corner Brackets */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M 37 37 L 37 75 M 37 37 L 75 37" stroke="#9AFFB5" strokeWidth="2" fill="none" />
              <path d="M 37 413 L 37 375 M 37 413 L 75 413" stroke="#9AFFB5" strokeWidth="2" fill="none" />
              <path d="M 413 37 L 413 75 M 413 37 L 375 37" stroke="#9AFFB5" strokeWidth="2" fill="none" />
              <path d="M 413 413 L 413 375 M 413 413 L 375 413" stroke="#9AFFB5" strokeWidth="2" fill="none" />
            </motion.g>

            {/* Scanning Lines */}
            <motion.line
              x1="56"
              y1="225"
              x2="394"
              y2="225"
              stroke="#ffffff"
              strokeWidth="0.5"
              strokeOpacity="0.3"
              strokeDasharray="2,4"
              initial={{ x1: 56, x2: 56 }}
              animate={{ x1: 394, x2: 394 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            {/* Data Points */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <circle cx="90" cy="90" r="2" fill="#9AFFB5" />
              <circle cx="360" cy="90" r="2" fill="#9AFFB5" />
              <circle cx="90" cy="360" r="2" fill="#9AFFB5" />
              <circle cx="360" cy="360" r="2" fill="#9AFFB5" />
            </motion.g>

            {/* Crosshair Center */}
            <motion.g
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ scale: [0.8, 1, 0.8], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "225px 225px" }}
            >
              <line x1="215" y1="225" x2="235" y2="225" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.6" />
              <line x1="225" y1="215" x2="225" y2="235" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.6" />
              <circle cx="225" cy="225" r="8" fill="none" stroke="#9AFFB5" strokeWidth="1" strokeOpacity="0.4" />
            </motion.g>

            {/* Side Readouts */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <rect x="15" y="112" width="30" height="2" fill="#9AFFB5" opacity="0.6" />
              <rect x="15" y="120" width="22" height="2" fill="#ffffff" opacity="0.4" />
              <rect x="15" y="128" width="26" height="2" fill="#9AFFB5" opacity="0.6" />
              
              <rect x="405" y="112" width="30" height="2" fill="#9AFFB5" opacity="0.6" />
              <rect x="413" y="120" width="22" height="2" fill="#ffffff" opacity="0.4" />
              <rect x="409" y="128" width="26" height="2" fill="#9AFFB5" opacity="0.6" />
            </motion.g>

            {/* Status Indicators */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <circle cx="60" cy="60" r="3" fill="#9AFFB5" opacity="0.8" />
              <circle cx="390" cy="60" r="3" fill="#ffffff" opacity="0.6" />
              <circle cx="60" cy="390" r="3" fill="#9AFFB5" opacity="0.8" />
              <circle cx="390" cy="390" r="3" fill="#ffffff" opacity="0.6" />
            </motion.g>
          </svg>
        </div>

        {/* Skills Chart on top of HUD */}
        <div className="relative z-10">
          <svg ref={svgRef} className="max-w-full h-auto" />
        </div>
      </div>
      
      {/* Info Panel - responsive height */}
      <div className="w-full lg:w-80 lg:pt-4 lg:pb-4" >
        <div 
          className="flex flex-col relative h-auto lg:h-[410px] min-h-[300px]"
          style={{
            background: 'rgba(20, 25, 35, 0.6)',
            backdropFilter: 'blur(20px) saturate(150%)',
            WebkitBackdropFilter: 'blur(20px) saturate(150%)',
            border: '1px solid rgba(100, 150, 200, 0.3)',
            borderRadius: '0',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3), 0 1px 4px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            filter: 'drop-shadow(0 12px 60px rgba(0, 150, 255, 0.15))'
          }}
        >
          <div className="p-6 pb-20 flex-1 overflow-hidden">
            <h3 className="text-2xl font-bold text-white mb-2 text-left">
              {currentSkill.name}
            </h3>
            
            <p className="text-sm text-white/70 font-medium mb-4 tracking-wide text-left">
              Erfahrungslevel: {currentSkill.level}
            </p>
            
            <p className="text-base text-white/70 leading-relaxed text-left">
              {currentSkill.description}
            </p>
          </div>
          
          {/* Navigation Buttons - fixed at bottom */}
          <div className="absolute left-6 right-6 flex justify-between gap-4" style={{ bottom: '22px' }}>
            <SpecialButtonDark
              variant="secondary"
              size="sm"
              onClick={() => navigateSkills('prev')}
              className="flex-1"
            >
              ← Vorherige
            </SpecialButtonDark>
            <SpecialButtonDark
              variant="primary"
              size="sm"
              onClick={() => navigateSkills('next')}
              className="flex-1"
            >
              Nächste →
            </SpecialButtonDark>
          </div>
        </div>
      </div>
    </div>
  )
}
