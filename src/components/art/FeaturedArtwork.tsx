'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

interface Artwork {
  title: string
  medium: string
  year: string
  description: string
  dimensions: string
}

interface FeaturedArtworkProps {
  artwork: Artwork
}

export default function FeaturedArtwork({ artwork }: FeaturedArtworkProps) {
  // Vereinfachte Container-Animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  }

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-32 px-6 bg-white relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Image */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-red-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image
                src="/images/featured-art.jpg"
                alt={artwork.title}
                width={600}
                height={600}
                className="relative z-10 w-full h-auto rounded-lg shadow-2xl"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHBsf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                style={{ width: 'auto !important', height: 'auto !important' }}
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            variants={itemVariants}
            className="space-y-8"
          >
            <div>
              <motion.div
                variants={itemVariants}
                className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4"
              >
                Featured Work
              </motion.div>

              <motion.h2 
                variants={itemVariants}
                className="text-4xl font-semibold text-foreground leading-tight tracking-tight md:text-3xl mb-6"
              >
                {artwork.title}
              </motion.h2>

              <motion.p 
                variants={itemVariants}
                className="text-base text-muted-foreground leading-7 mb-8"
              >
                {artwork.description}
              </motion.p>
            </div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 text-sm"
            >
              <div>
                <div className="text-foreground/70 mb-1">Medium</div>
                <div className="font-medium text-foreground">{artwork.medium}</div>
              </div>
              <div>
                <div className="text-foreground/70 mb-1">Jahr</div>
                <div className="font-medium text-foreground">{artwork.year}</div>
              </div>
              <div>
                <div className="text-foreground/70 mb-1">Dimensionen</div>
                <div className="font-medium text-foreground">{artwork.dimensions}</div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                variant="primary"
                size="base"
                className="bg-foreground text-background hover:bg-foreground/90"
                icon="right"
                iconElement={<ArrowRight className="w-4 h-4" />}
              >
                Mehr Details
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
