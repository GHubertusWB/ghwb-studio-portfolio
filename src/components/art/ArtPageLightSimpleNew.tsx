'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import ArtHero from '@/components/art/ArtHero'
import ProcessSection from '@/components/art/ProcessSection'
import PortfolioGrid from '@/components/art/PortfolioGrid'
import CollaborationSection from '@/components/art/CollaborationSection'
import ContactSection from '@/components/art/ContactSection'

// Lazy load der FeaturedArtwork Komponente
const FeaturedArtwork = dynamic(() => import('@/components/art/FeaturedArtwork'), {
  loading: () => (
    <div className="py-32 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-gray-200 animate-pulse rounded-lg h-96"></div>
          <div className="space-y-4">
            <div className="bg-gray-200 animate-pulse rounded h-8 w-3/4"></div>
            <div className="bg-gray-200 animate-pulse rounded h-4 w-full"></div>
            <div className="bg-gray-200 animate-pulse rounded h-4 w-2/3"></div>
          </div>
        </div>
      </div>
    </div>
  ),
  ssr: false
})

export default function ArtPageLightSimpleNew() {
  const [selectedSubjectTag, setSelectedSubjectTag] = useState<string | undefined>(undefined)

  const scrollToContactForm = () => {
    const contactElement = document.getElementById('contact-form')
    if (contactElement) {
      contactElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const handleCardClick = (subject: string) => {
    setSelectedSubjectTag(subject)
    scrollToContactForm()
  }

  // Data constants
  const artwork = {
    title: "Teilen - AR Canvas Serie",
    medium: "Augmented Reality & Canvas",
    year: "2024",
    description: "Harmonie in der Gesellschaft wird schnell verdrängt, wenn es um stark diskutierte Themen geht. Die Serie 'Teilen' kritisiert dieses Verhalten und zeigt auf, dass eine bewusste Betrachtung beider Seiten erst das Gesamtbild erkennen gibt.",
    dimensions: "Variable Dimensionen"
  }

  const processSteps = [
    {
      step: "01",
      title: "Konzeption & Vision",
      description: "Entwicklung der kreativen Vision und technischen Machbarkeitsstudie"
    },
    {
      step: "02", 
      title: "Iteration & Verfeinerung",
      description: "Experimentelle Phase mit verschiedenen Ansätzen und Techniken"
    },
    {
      step: "03",
      title: "Umsetzung & Realisierung", 
      description: "Finale Ausarbeitung und technische Implementierung"
    },
    {
      step: "04",
      title: "Präsentation & Installation",
      description: "Aufbau und kuratorische Betreuung der finalen Installation"
    }
  ]

  const portfolioWorks = [
    {
      id: 1,
      title: "AR Canvas - Gesellschaftskritik",
      category: "Augmented Reality",
      medium: "Mixed Media & AR",
      year: "2024",
      image: "/images/art1.jpg",
      gridSpan: "col-span-1 row-span-1"
    },
    {
      id: 2,
      title: "Teilen - Dualität", 
      category: "Interactive Art",
      medium: "Canvas & Digital",
      year: "2024", 
      image: "/images/art2.jpg",
      gridSpan: "col-span-2 row-span-1"
    },
    {
      id: 3,
      title: "Bewusste Betrachtung",
      category: "Augmented Reality", 
      medium: "AR Installation",
      year: "2024",
      image: "/images/art3.jpg",
      gridSpan: "col-span-1 row-span-2"
    },
    {
      id: 4,
      title: "Gesellschaftliche Harmonie",
      category: "Mixed Media",
      medium: "Canvas & Technology", 
      year: "2024",
      image: "/images/art4.jpg", 
      gridSpan: "col-span-1 row-span-1"
    },
    {
      id: 5,
      title: "Diskurs und Dialog",
      category: "Contemporary Art",
      medium: "Interactive Installation",
      year: "2024",
      image: "/images/art5.jpg",
      gridSpan: "col-span-2 row-span-2"
    },
    {
      id: 6,
      title: "Kritische Reflexion",
      category: "Digital Art",
      medium: "AR & Traditional",
      year: "2024",
      image: "/images/art6.jpg",
      gridSpan: "col-span-1 row-span-1"
    },
    {
      id: 7,
      title: "Perspektivenwechsel",
      category: "Mixed Media",
      medium: "Canvas & AR",
      year: "2024",
      image: "/images/art7.jpg",
      gridSpan: "col-span-2 row-span-1"
    },
    {
      id: 8,
      title: "Soziale Reflexion",
      category: "Installation",
      medium: "Mixed Media", 
      year: "2024",
      image: "/images/art8.jpg",
      gridSpan: "col-span-1 row-span-1"
    },
    {
      id: 9,
      title: "Erweiterte Realität",
      category: "Augmented Reality",
      medium: "AR Installation", 
      year: "2024",
      image: "/images/art9.jpg",
      gridSpan: "col-span-1 row-span-1"
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <ArtHero onCollaborationClick={() => handleCardClick('Zusammenarbeit')} />
      <FeaturedArtwork artwork={artwork} />
      <ProcessSection steps={processSteps} />
      <PortfolioGrid works={portfolioWorks} />
      <CollaborationSection onCardClick={handleCardClick} />
      <ContactSection selectedSubjectTag={selectedSubjectTag} />
    </div>
  )
}
