'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import * as d3 from 'd3'

interface SkillsCircleChartDarkProps {
  onSegmentHover?: (index: number | null) => void;
  hoveredSkill?: number | null;
}

export default function SkillsCircleChartDark({ onSegmentHover, hoveredSkill }: SkillsCircleChartDarkProps) {
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

    const width = 500
    const height = 500
    const centerX = width / 2
    const centerY = height / 2
    const maxRadius = 200
    const innerRadius = 40

    svg.attr('width', width).attr('height', height)

    // Create gradient for dark mode - radialer Verlauf von der Mitte des gesamten Diagramms
    const defs = svg.append('defs')
    const gradient = defs.append('radialGradient')
      .attr('id', 'skillGradientDark')
      .attr('cx', centerX)
      .attr('cy', centerY)
      .attr('r', maxRadius)
      .attr('gradientUnits', 'userSpaceOnUse')

    gradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', '#ffffff')
      .attr('stop-opacity', 0.9)

    gradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#7dd3fc')
      .attr('stop-opacity', 1)

    // Create transparent gradient for default state
    const transparentGradient = defs.append('radialGradient')
      .attr('id', 'skillGradientDarkTransparent')
      .attr('cx', centerX)
      .attr('cy', centerY)
      .attr('r', maxRadius)
      .attr('gradientUnits', 'userSpaceOnUse')

    transparentGradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', '#ffffff')
      .attr('stop-opacity', 0.2)

    transparentGradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#7dd3fc')
      .attr('stop-opacity', 0.4)

    // Configuration for rings
    const numRings = 10
    const ringHeight = (maxRadius - innerRadius) / numRings

    // Draw concentric circles (grid) for dark mode
    for (let i = 1; i <= numRings; i++) {
      const radius = innerRadius + (maxRadius - innerRadius) * (i / numRings)
      svg.append('circle')
        .attr('cx', centerX)
        .attr('cy', centerY)
        .attr('r', radius)
        .attr('fill', 'none')
        .attr('stroke', 'rgba(255, 255, 255, 0.2)')
        .attr('stroke-width', 1)
    }

    // Create pie generator
    const pie = d3.pie<any>()
      .value(1) // Equal segments
      .sort(null)

    // Create pie data
    const pieData = pie(skillsData)

    // Create segments with ring-by-ring structure
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
      const maxSkillRadius = innerRadius + (maxRadius - innerRadius) * (skill.value / 10)
      const skillRings = Math.ceil((maxSkillRadius - innerRadius) / ringHeight)
      
      console.log(`Dark Segment ${segmentIndex}: ${skill.name}, value: ${skill.value}, rings: ${skillRings}, maxRadius: ${maxSkillRadius}`)

      for (let ringIndex = 0; ringIndex < skillRings; ringIndex++) {
        const ringInnerRadius = innerRadius + ringIndex * ringHeight
        const ringOuterRadius = Math.min(innerRadius + (ringIndex + 1) * ringHeight, maxSkillRadius)
        
        if (ringOuterRadius <= ringInnerRadius) continue

        console.log(`Dark Ring ${ringIndex}: inner=${ringInnerRadius}, outer=${ringOuterRadius}, start=${pieSlice.startAngle}, end=${pieSlice.endAngle}`)

        const arc = d3.arc<any>()
          .innerRadius(ringInnerRadius)
          .outerRadius(ringOuterRadius)
          .startAngle(pieSlice.startAngle)
          .endAngle(pieSlice.endAngle)

        segmentGroup.append('path')
          .attr('class', `ring ring-${ringIndex}`)
          .attr('d', arc)
          .attr('fill', 'url(#skillGradientDarkTransparent)')
          .attr('stroke', '#000')
          .attr('stroke-width', 1)
          .style('opacity', 0)
          .style('cursor', 'pointer')
          .transition()
          .delay(ringIndex * 150 + segmentIndex * 50) // Ring-für-Ring Animation
          .duration(600)
          .style('opacity', 1)
      }
    })

    // Add hover effects to segment groups
    segmentGroups
      .on('mouseenter', function(event: any, d: any) {
        const index = skillsData.indexOf(d.data)
        if (onSegmentHover) onSegmentHover(index)
        
        // Animate hover effect from inside to outside
        const segmentGroup = d3.select(this)
        const rings = segmentGroup.selectAll('.ring')
        
        rings.each(function(_, ringIndex) {
          d3.select(this)
            .transition()
            .delay(ringIndex * 50) // Von innen nach außen
            .duration(200)
            .attr('fill', 'url(#skillGradientDark)')
            .attr('stroke-width', 2)
        })
      })
      .on('mouseleave', function(event: any, d: any) {
        if (onSegmentHover) onSegmentHover(null)
        
        // Zurück zum transparenten Zustand
        const segmentGroup = d3.select(this)
        const rings = segmentGroup.selectAll('.ring')
        
        rings
          .transition()
          .duration(200)
          .attr('fill', 'url(#skillGradientDarkTransparent)')
          .attr('stroke-width', 1)
      })



    // Add radial lines between segments
    skillsData.forEach((_, i) => {
      const angle = (i * 2 * Math.PI) / skillsData.length - Math.PI / 2
      const x1 = centerX + Math.cos(angle) * innerRadius
      const y1 = centerY + Math.sin(angle) * innerRadius
      const x2 = centerX + Math.cos(angle) * maxRadius
      const y2 = centerY + Math.sin(angle) * maxRadius

      svg.append('line')
        .attr('x1', x1)
        .attr('y1', y1)
        .attr('x2', x2)
        .attr('y2', y2)
        .attr('stroke', 'rgba(255, 255, 255, 0.3)')
        .attr('stroke-width', 1)
    })

    // Add labels - mittig zu den Segmenten positioniert
    skillsData.forEach((skill, i) => {
      // Berechne die mittlere Position des Segments
      const startAngle = (i * 2 * Math.PI) / skillsData.length - Math.PI / 2
      const endAngle = ((i + 1) * 2 * Math.PI) / skillsData.length - Math.PI / 2
      const midAngle = (startAngle + endAngle) / 2
      
      const labelRadius = maxRadius + 30
      const x = centerX + Math.cos(midAngle) * labelRadius
      const y = centerY + Math.sin(midAngle) * labelRadius

      svg.append('text')
        .attr('x', x)
        .attr('y', y)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .style('font-family', 'Poppins, sans-serif')
        .style('font-size', '12px')
        .style('font-weight', '500')
        .style('fill', 'rgba(255, 255, 255, 0.9)')
        .text(skill.shortName)
        .style('opacity', 0)
        .transition()
        .delay(1000 + i * 100) // Langsamerer Aufbau der Labels
        .duration(800)
        .style('opacity', 1)
    })

    // Add center circle for dark mode
    svg.append('circle')
      .attr('cx', centerX)
      .attr('cy', centerY)
      .attr('r', innerRadius)
      .attr('fill', '#1a1a1a')
      .attr('stroke', 'rgba(255, 255, 255, 0.2)')
      .attr('stroke-width', 2)

  }, [])

  // Separate useEffect for handling external hover changes
  useEffect(() => {
    if (!svgRef.current) return

    const svg = d3.select(svgRef.current)
    const segmentGroups = svg.selectAll('.segment-group')

    // Update segment highlighting based on external hover state
    if (hoveredSkill !== null) {
      segmentGroups.each(function(d: any, i: number) {
        const isHovered = skillsData.indexOf(d.data) === hoveredSkill
        const segmentGroup = d3.select(this)
        const rings = segmentGroup.selectAll('.ring')
        
        if (isHovered) {
          rings.each(function(_, ringIndex) {
            d3.select(this)
              .transition()
              .delay(ringIndex * 50)
              .duration(200)
              .attr('fill', 'url(#skillGradientDark)')
              .attr('stroke-width', 2)
          })
        } else {
          rings
            .transition()
            .duration(200)
            .attr('fill', 'url(#skillGradientDarkTransparent)')
            .attr('stroke-width', 1)
        }
      })
    } else {
      segmentGroups.selectAll('.ring')
        .transition()
        .duration(200)
        .attr('fill', 'url(#skillGradientDarkTransparent)')
        .attr('stroke-width', 1)
    }
  }, [hoveredSkill])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="flex justify-center">
        <svg ref={svgRef} className="w-full h-auto max-w-[500px]" />
      </div>
    </motion.div>
  )
}
