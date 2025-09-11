'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

export default function SkillsRadarChartDark() {
  const data = {
    labels: [
      'Accessibility',
      'Product Owner',
      'Requirements Engineering',
      'Wireframing',
      'Prototyping',
      'Design Systems',
      'Development',
      'Rollout Planung'
    ],
    datasets: [
      {
        label: 'Skill Level',
        data: [9, 8, 9, 10, 10, 9, 7, 8], // Skill-Werte 1-10
        backgroundColor: 'rgba(6, 182, 212, 0.3)',
        borderColor: 'rgba(6, 182, 212, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(6, 182, 212, 1)',
        pointBorderColor: '#000',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverBackgroundColor: '#000',
        pointHoverBorderColor: 'rgba(6, 182, 212, 1)',
        pointHoverRadius: 7,
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#000',
        bodyColor: '#000',
        borderColor: 'rgba(6, 182, 212, 1)',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: function(context: any) {
            return `${context.parsed.r}/10`
          }
        }
      }
    },
    scales: {
      r: {
        beginAtZero: true,
        min: 0,
        max: 10,
        ticks: {
          stepSize: 2,
          font: {
            size: 12,
            family: 'Poppins'
          },
          color: 'rgba(255, 255, 255, 0.6)',
          backdropColor: 'transparent'
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
          lineWidth: 1
        },
        angleLines: {
          color: 'rgba(255, 255, 255, 0.2)',
          lineWidth: 1
        },
        pointLabels: {
          font: {
            size: 14,
            family: 'Poppins',
            weight: 500
          },
          color: 'rgba(255, 255, 255, 0.9)',
          padding: 20
        }
      }
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart' as const,
      delay: (context: any) => {
        return context.dataIndex * 200
      }
    },
    elements: {
      line: {
        tension: 0.1
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      viewport={{ once: true }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="relative w-full" style={{ height: '500px' }}>
        <Radar data={data} options={options} />
      </div>
      
      {/* Skill Level Legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        viewport={{ once: true }}
        className="mt-8 text-center"
      >
        <p className="text-sm text-white/70 mb-4">
          Skill Level Bewertung (1-10 Skala)
        </p>
        <div className="flex justify-center items-center gap-6 text-xs text-white/60">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-white/20"></div>
            <span>Grundlagen</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
            <span>Fortgeschritten</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
            <span>Expert</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
