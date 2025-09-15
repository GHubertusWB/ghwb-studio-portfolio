'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const FloatingClouds = () => {
  const clouds = [
    {
      id: 1,
      src: '/images/portfolio/4.png',
      x: 5, // Ganz links
      y: 35, // 35% from top - responsive to container height
      size: 3.0,
      duration: 12, // Faster horizontal float duration
      delay: 0,
      opacity: 0.8,
      floatDistance: 25 // Increased movement across screen
    },
    {
      id: 2,
      src: '/images/portfolio/7.png',
      x: 45, // Mitte
      y: 50, // 50% from top - perfectly centered vertically
      size: 2.2,
      duration: 15,
      delay: 0.5,
      opacity: 0.9,
      floatDistance: 30 // Increased movement across screen
    },
    {
      id: 3,
      src: '/images/portfolio/8.png',
      x: 30, // Ganz rechts
      y: 40, // Zwischen den anderen beiden
      size: 3.8,
      duration: 18,
      delay: 1,
      opacity: 1,
      floatDistance: 20 // Increased movement
    }
  ];

  return (
    <>
      {/* Floating clouds - full screen container */}
      <div className="absolute inset-0 pointer-events-none z-10">
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className="absolute z-10"
          style={{
            left: `${cloud.x}%`,
            top: `${cloud.y}%`,
            filter: 'blur(0.5px)', // Subtle blur for softer look
          }}
          initial={{
            x: '-30%', // Start closer to screen, not fully outside
            opacity: 0,
            scale: 0.8
          }}
          animate={{
            x: [`-10%`, `${cloud.floatDistance}%`, `-10%`],
            y: ['0%', '-2%', '2%', '0%'], // Added subtle vertical floating
            opacity: cloud.opacity,
            scale: cloud.size
          }}
          transition={{
            x: {
              duration: cloud.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: cloud.delay + 2 // Reduced initial delay
            },
            y: {
              duration: cloud.duration * 0.7, // Slightly faster vertical movement
              repeat: Infinity,
              ease: "easeInOut",
              delay: cloud.delay + 1
            },
            opacity: {
              duration: 2,
              ease: "easeOut",
              delay: cloud.delay
            },
            scale: {
              duration: 2,
              ease: "easeOut",
              delay: cloud.delay
            }
          }}
        >
          <Image
            src={cloud.src}
            alt="Floating cloud"
            width={300}
            height={150}
            style={{
              width: 'auto !important',
              height: 'auto !important',
              maxWidth: '300px',
              objectFit: 'contain',
            }}
            priority={cloud.id === 1} // Erste Cloud als LCP optimieren
            suppressHydrationWarning
          />
        </motion.div>
      ))}
      </div>
    </>
  );
};

export default FloatingClouds;
