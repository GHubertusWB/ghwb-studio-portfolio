'use client'

import { useEffect, useRef } from 'react'
import { motion, px } from 'framer-motion'
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

    // All segments in orange like SpecialButton
    const getSkillColor = () => {
      return '#ffc800ff' // Same orange as SpecialButton
    }

    const width = 500
    const height = 500
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

    // Add skill labels - positioned correctly at segment centers (only if not hidden)
    if (!hideLabels) {
      pieData.forEach((pieSlice, i) => {
        const skill = pieSlice.data
        
        // Calculate middle angle of the segment
        const middleAngle = (pieSlice.startAngle + pieSlice.endAngle) / 2 - Math.PI / 2
        const labelRadius = innerRadius + segmentHeight + 75
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

    // Add lemonzest.png as background image behind the chart
    svg.append('image')
      .attr('href', '/images/Lemon and leafs/lemonzest.png')
      .attr('x', centerX - 220) // Center the image (assuming 440px width)
      .attr('y', centerY - 220) // Center the image (assuming 440px height)
      .attr('width', 440)
      .attr('height', 440)
      .style('opacity', 0.3) // Semi-transparent background
      .style('pointer-events', 'none')

    // Add center circle - ohne schwarze Border
    svg.append('circle')
      .attr('cx', centerX)
      .attr('cy', centerY)
      .attr('r', innerRadius)
      .attr('fill', '#ffffff')
      .attr('stroke', 'none')

    // Create hover function for reuse
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
      if (onSegmentHover) onSegmentHover(null)
      
      // Find corresponding segment and return to normal state
      const segmentGroup = d3.select(segmentGroups.nodes()[index])
      const segment = segmentGroup.select('.skill-segment')
      
      segment
        .transition()
        .duration(200)
        .style('opacity', 0.5) // Back to 50% transparency
        .style('filter', 'none') // Entferne Leuchten-Effekt
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
      const segment = segmentGroup.select('.skill-segment')
      
      if (hoveredSkill === i) {
        // Apply hover state
        segment
          .transition()
          .duration(200)
          .style('opacity', 1)
      } else {
        // Return to normal state
        segment
          .transition()
          .duration(200)
          .style('opacity', 0.5)
      }
    })
  }, [hoveredSkill])

  return (
    <div className="flex justify-center items-center">
      <svg ref={svgRef} className="max-w-full h-auto" />
    </div>
  )
}
