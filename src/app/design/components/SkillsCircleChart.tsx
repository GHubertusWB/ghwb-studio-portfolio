'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import * as d3 from 'd3'

export default function SkillsCircleChart() {
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

    // Create gradient
    const defs = svg.append('defs')
    const gradient = defs.append('radialGradient')
      .attr('id', 'skillGradient')
      .attr('cx', '50%')
      .attr('cy', '50%')
      .attr('r', '50%')

    gradient.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', '#06b6d4')
      .attr('stop-opacity', 0.3)

    gradient.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', '#06b6d4')
      .attr('stop-opacity', 0.8)

    // Draw concentric circles (grid)
    const numRings = 10
    for (let i = 1; i <= numRings; i++) {
      const radius = innerRadius + (maxRadius - innerRadius) * (i / numRings)
      svg.append('circle')
        .attr('cx', centerX)
        .attr('cy', centerY)
        .attr('r', radius)
        .attr('fill', 'none')
        .attr('stroke', 'rgba(0, 0, 0, 0.1)')
        .attr('stroke-width', 1)
    }

    // Create pie generator
    const pie = d3.pie<any>()
      .value(1) // Equal segments
      .sort(null)

    const arc = d3.arc<any>()
      .innerRadius(innerRadius)
      .outerRadius((d: any, i: number) => {
        const skill = skillsData[i]
        return innerRadius + (maxRadius - innerRadius) * (skill.value / 10)
      })

    // Create segments
    const segments = svg.selectAll('.segment')
      .data(pie(skillsData))
      .enter()
      .append('g')
      .attr('class', 'segment')
      .attr('transform', `translate(${centerX}, ${centerY})`)

    // Add segment paths with animation
    segments.append('path')
      .attr('d', arc)
      .attr('fill', 'url(#skillGradient)')
      .attr('stroke', '#fff')
      .attr('stroke-width', 2)
      .style('opacity', 0)
      .transition()
      .delay((d: any, i: number) => i * 100)
      .duration(800)
      .style('opacity', 1)

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
        .attr('stroke', 'rgba(0, 0, 0, 0.2)')
        .attr('stroke-width', 1)
    })

    // Add labels
    skillsData.forEach((skill, i) => {
      const angle = (i * 2 * Math.PI) / skillsData.length - Math.PI / 2
      const labelRadius = maxRadius + 30
      const x = centerX + Math.cos(angle) * labelRadius
      const y = centerY + Math.sin(angle) * labelRadius

      svg.append('text')
        .attr('x', x)
        .attr('y', y)
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .style('font-family', 'Poppins, sans-serif')
        .style('font-size', '12px')
        .style('font-weight', '500')
        .style('fill', 'rgba(0, 0, 0, 0.8)')
        .text(skill.shortName)
        .style('opacity', 0)
        .transition()
        .delay(500 + i * 50)
        .duration(600)
        .style('opacity', 1)

      // Add value labels inside segments
      const valueRadius = innerRadius + (maxRadius - innerRadius) * (skill.value / 10) * 0.7
      const valueX = centerX + Math.cos(angle) * valueRadius
      const valueY = centerY + Math.sin(angle) * valueRadius

      if (skill.value > 3) { // Only show values for larger segments
        svg.append('text')
          .attr('x', valueX)
          .attr('y', valueY)
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'middle')
          .style('font-family', 'Poppins, sans-serif')
          .style('font-size', '14px')
          .style('font-weight', '600')
          .style('fill', '#fff')
          .text(skill.value.toString())
          .style('opacity', 0)
          .transition()
          .delay(800 + i * 50)
          .duration(600)
          .style('opacity', 1)
      }
    })

    // Add center circle
    svg.append('circle')
      .attr('cx', centerX)
      .attr('cy', centerY)
      .attr('r', innerRadius)
      .attr('fill', '#f8fafc')
      .attr('stroke', 'rgba(0, 0, 0, 0.1)')
      .attr('stroke-width', 2)

  }, [])

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
      
      {/* Skill Level Legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        viewport={{ once: true }}
        className="mt-8 text-center"
      >
        <p className="text-sm text-muted-foreground mb-4">
          Skill Level Bewertung (1-10 Skala)
        </p>
        <div className="flex justify-center items-center gap-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-200"></div>
            <span>1-3 Grundlagen</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cyan-300"></div>
            <span>4-7 Fortgeschritten</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cyan-600"></div>
            <span>8-10 Expert</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
