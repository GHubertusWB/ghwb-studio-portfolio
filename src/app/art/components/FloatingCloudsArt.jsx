'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const FloatingCloudsArt = () => {
  const clouds = [
    {
      id: 1,
      src: '/images/portfolio/4.png',
      x: 25, // Links, aber nicht ganz am Rand
      y: 40, // Höher positioniert
      size: 2.5,
      duration: 14, 
      delay: 0,
      opacity: 0.7,
      floatDistance: 35
    },
    {
      id: 2,
      src: '/images/portfolio/7.png',
      x: 50, // Rechts von der Mitte
      y: 45, // Tiefer positioniert
      size: 3.2,
      duration: 16,
      delay: 1,
      opacity: 0.85,
      floatDistance: 25
    },
    {
      id: 3,
      src: '/images/portfolio/8.png',
      x: 35, // Links-Mitte
      y: 45, // Ganz unten
      size: 2.8,
      duration: 20,
      delay: 2,
      opacity: 0.9,
      floatDistance: 40
    },
    {
      id: 4,
      src: '/images/portfolio/4.png',
      x: 65, // Ganz rechts
      y: 35, // Mittlere Höhe
      size: 2.0,
      duration: 18,
      delay: 0.5,
      opacity: 0.6,
      floatDistance: 20
    }
  ];

  return (
    <>
      {/* Floating clouds for Art Page - different configuration */}
      <div className="absolute inset-0 pointer-events-none z-10">
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className="absolute z-10"
          style={{
            left: `${cloud.x}%`,
            top: `${cloud.y}%`,
            filter: 'blur(1px)', // Etwas mehr Unschärfe für Kunstseite
          }}
          initial={{
            x: '-40%', // Starten weiter außerhalb
            opacity: 0,
            scale: 0.6
          }}
          animate={{
            x: [`-15%`, `${cloud.floatDistance}%`, `-15%`],
            y: ['0%', '-3%', '3%', '0%'], // Etwas mehr vertikale Bewegung
            opacity: cloud.opacity,
            scale: cloud.size
          }}
          transition={{
            x: {
              duration: cloud.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: cloud.delay + 1.5
            },
            y: {
              duration: cloud.duration * 0.6, // Schnellere vertikale Bewegung
              repeat: Infinity,
              ease: "easeInOut",
              delay: cloud.delay + 0.8
            },
            opacity: {
              duration: 2.5,
              ease: "easeOut",
              delay: cloud.delay
            },
            scale: {
              duration: 2.5,
              ease: "easeOut",
              delay: cloud.delay
            }
          }}
        >
          <Image
            src={cloud.src}
            alt="Floating cloud"
            width={280}
            height={140}
            style={{
              width: 'auto',
              height: 'auto',
              maxWidth: '280px',
              objectFit: 'contain',
            }}
            priority={false}
          />
        </motion.div>
      ))}
      </div>
    </>
  );
};

export default FloatingCloudsArt;
