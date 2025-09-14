'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import * as d3 from 'd3'

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

    // Function to get color for ring level (1-10) from light blue to pink
    const getRingColor = (ringLevel: number) => {
      const ratio = (ringLevel - 1) / 9 // 0 to 1
      // Interpolate from light blue to pink
      const r = Math.round(135 + ratio * (255 - 135)) // 135 to 255
      const g = Math.round(206 - ratio * (206 - 192)) // 206 to 192
      const b = Math.round(235 - ratio * (235 - 203)) // 235 to 203
      return `rgb(${r}, ${g}, ${b})`
    }

    const width = 600
    const height = 600
    const centerX = width / 2
    const centerY = height / 2
    const innerRadius = 20 // Halbiert von 40 auf 20
    const maxRadius = 200
    const ringHeight = 16

    svg.attr('width', width).attr('height', height)

    // Create pie layout with padding for white space
    const pie = d3.pie<Skill>()
      .padAngle(0.06) // Increased padding for 2px white space
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

    // Create rings for each segment
    pieData.forEach((pieSlice, segmentIndex) => {
      const skill = pieSlice.data
      const segmentGroup = d3.select(segmentGroups.nodes()[segmentIndex])
      // Ensure exactly skill.value rings (max 10), each ring has exactly ringHeight size
      const skillRings = Math.min(skill.value, 10) // Max 10 rings
      
      console.log(`Segment ${segmentIndex}: ${skill.name}, value: ${skill.value}, rings: ${skillRings}`)

      for (let ringIndex = 0; ringIndex < skillRings; ringIndex++) {
        const ringInnerRadius = innerRadius + ringIndex * ringHeight
        const ringOuterRadius = innerRadius + (ringIndex + 1) * ringHeight
        
        const ringLevel = ringIndex + 1 // Ring level 1-10
        const ringColor = getRingColor(ringLevel)
        
        console.log(`Ring ${ringIndex}: inner=${ringInnerRadius}, outer=${ringOuterRadius}, level=${ringLevel}, color=${ringColor}`)

        const arc = d3.arc<any>()
          .innerRadius(ringInnerRadius)
          .outerRadius(ringOuterRadius)
          .startAngle(pieSlice.startAngle)
          .endAngle(pieSlice.endAngle)

        const pathData = arc({} as any)

        segmentGroup.append('path')
          .attr('class', `ring ring-${ringIndex}`)
          .attr('d', pathData)
          .attr('fill', ringColor)
          .attr('stroke', 'none')
          .style('opacity', 0.5) // 50% transparency by default
          .style('cursor', 'pointer')
          .transition()
          .delay(ringIndex * 150 + segmentIndex * 50) // Ring-für-Ring Animation
          .duration(600)
          .style('opacity', 0.5)
      }
    })

    // Add 10 black grid circles with alternating stroke widths (AFTER segments for proper layering)
    // Calculate exact grid radii to match ring positions: innerRadius + ringHeight * level
    const gridCircles = Array.from({length: 10}, (_, i) => innerRadius + ringHeight * (i + 1))
    gridCircles.forEach((radius, index) => {
      const strokeWidth = index % 2 === 0 ? 1 : 0.5 // Every second ring: 1px, between steps: 0.5px
      svg.append('circle')
        .attr('cx', centerX)
        .attr('cy', centerY)
        .attr('r', radius)
        .attr('fill', 'none')
        .attr('stroke', '#000000')
        .attr('stroke-width', strokeWidth)
        .style('pointer-events', 'none') // Grid should not interfere with interactions
    })

    // Add radial grid lines (1px black) AFTER segments
    skillsData.forEach((_, i) => {
      const angle = (i * 2 * Math.PI) / skillsData.length - Math.PI / 2
      const x1 = centerX + innerRadius * Math.cos(angle)
      const y1 = centerY + innerRadius * Math.sin(angle)
      const x2 = centerX + maxRadius * Math.cos(angle)
      const y2 = centerY + maxRadius * Math.sin(angle)
      
      svg.append('line')
        .attr('x1', x1)
        .attr('y1', y1)
        .attr('x2', x2)
        .attr('y2', y2)
        .attr('stroke', '#000000')
        .attr('stroke-width', 1)
        .style('pointer-events', 'none') // Grid should not interfere with interactions
    })

    // Add skill labels - positioned correctly at segment centers (only if not hidden)
    if (!hideLabels) {
      pieData.forEach((pieSlice, i) => {
        const skill = pieSlice.data
        
        // Calculate middle angle of the segment
        const middleAngle = (pieSlice.startAngle + pieSlice.endAngle) / 2 - Math.PI / 2
        const labelRadius = maxRadius + 30
        const x = centerX + labelRadius * Math.cos(middleAngle)
        const y = centerY + labelRadius * Math.sin(middleAngle)
        
        // Split skill name into words for two-line layout if needed
        const words = skill.shortName.split(' ')
        
        if (words.length === 1 || skill.shortName.length <= 12) {
          // Single line for short text
          svg.append('text')
            .attr('x', x)
            .attr('y', y)
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .style('font-size', '12px')
            .style('font-weight', '500')
            .style('fill', '#374151')
            .style('pointer-events', 'none')
            .text(skill.shortName)
        } else {
          // Two lines for longer text
          const midPoint = Math.ceil(words.length / 2)
          const firstLine = words.slice(0, midPoint).join(' ')
          const secondLine = words.slice(midPoint).join(' ')
          
          // First line (slightly above center)
          svg.append('text')
            .attr('x', x)
            .attr('y', y - 8)
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .style('font-size', '11px')
            .style('font-weight', '500')
            .style('fill', '#374151')
            .style('pointer-events', 'none')
            .text(firstLine)
          
          // Second line (slightly below center)
          svg.append('text')
            .attr('x', x)
            .attr('y', y + 8)
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'middle')
            .style('font-size', '11px')
            .style('font-weight', '500')
            .style('fill', '#374151')
            .style('pointer-events', 'none')
            .text(secondLine)
        }
      })
    }

    // Add center circle
    svg.append('circle')
      .attr('cx', centerX)
      .attr('cy', centerY)
      .attr('r', innerRadius)
      .attr('fill', '#f8fafc')
      .attr('stroke', '#000000')
      .attr('stroke-width', 1)

    // Create hover function for reuse
    const handleMouseEnter = function(event: any, d: any) {
      const index = skillsData.indexOf(d.data)
      if (onSegmentHover) onSegmentHover(index)
      
      // Find corresponding segment group and animate its rings
      const segmentGroup = d3.select(segmentGroups.nodes()[index])
      const rings = segmentGroup.selectAll('.ring')
      
      rings.each(function(_, ringIndex) {
        d3.select(this)
          .transition()
          .delay(ringIndex * 50) // Von innen nach außen
          .duration(200)
          .style('opacity', 1) // Remove transparency (0% opacity means fully visible)
      })
    }

    const handleMouseLeave = function(event: any, d: any) {
      const index = skillsData.indexOf(d.data)
      if (onSegmentHover) onSegmentHover(null)
      
      // Find corresponding segment group and return to normal transparency
      const segmentGroup = d3.select(segmentGroups.nodes()[index])
      const rings = segmentGroup.selectAll('.ring')
      
      rings.each(function(_, ringIndex) {
        d3.select(this)
          .transition()
          .delay(ringIndex * 50)
          .duration(200)
          .style('opacity', 0.5) // Back to 50% transparency
      })
    }

    // Add hover effects to invisible hover areas (full segments)
    hoverAreas
      .on('mouseenter', handleMouseEnter)
      .on('mouseleave', handleMouseLeave)

    // Add hover effects to segment groups (colored parts)
    segmentGroups
      .on('mouseenter', handleMouseEnter)
      .on('mouseleave', handleMouseLeave)
  }, [onSegmentHover])

  // Handle external hover state changes
  useEffect(() => {
    if (!svgRef.current) return
    
    const svg = d3.select(svgRef.current)
    const segmentGroups = svg.selectAll('.segment-group')
    
    segmentGroups.each(function(_, i) {
      const segmentGroup = d3.select(this)
      const rings = segmentGroup.selectAll('.ring')
      
      if (hoveredSkill === i) {
        // Apply hover state: full opacity from inside to outside
        rings.each(function(_, ringIndex) {
          d3.select(this)
            .transition()
            .delay(ringIndex * 50)
            .duration(200)
            .style('opacity', 1) // Full opacity
        })
      } else {
        // Return to normal state (50% transparency)
        rings.each(function() {
          d3.select(this)
            .transition()
            .duration(200)
            .style('opacity', 0.5) // Normal 50% transparency
        })
      }
    })
  }, [hoveredSkill])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="flex justify-center items-center"
    >
      <svg ref={svgRef} className="max-w-full h-auto" />
    </motion.div>
  )
}
