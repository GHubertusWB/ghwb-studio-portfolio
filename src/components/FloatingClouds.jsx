'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const FloatingClouds = () => {
  const clouds = [
    {
      id: 1,
      src: '/images/portfolio/4.png',
      x: 10, // Left side
      y: 20,
      size: 3.0,
      duration: 25, // Horizontal float duration
      delay: 0,
      opacity: 0.8,
      floatDistance: 15 // Movement across screen
    },
    {
      id: 2,
      src: '/images/portfolio/7.png',
      x: 50, // Center
      y: 40,
      size: 2.2,
      duration: 30,
      delay: 0.5,
      opacity: 0.9,
      floatDistance: 20 // Movement across screen
    },
    {
      id: 3,
      src: '/images/portfolio/8.png',
      x: 80, // Right side
      y: 60,
      size: 3.8,
      duration: 35,
      delay: 1,
      opacity: 1,
      floatDistance: 10 // Smaller movement on right
    }
  ];

  return (
    <>
      {/* Floating clouds - full screen container */}
      <div className="absolute inset-0 pointer-events-none z-10">
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className="absolute"
          initial={{
            x: '-30%', // Start closer to screen, not fully outside
            y: `${cloud.y}%`,
            opacity: 0,
            scale: 0.8
          }}
          animate={{
            x: [`${cloud.x}%`, `${Math.min(90, cloud.x + cloud.floatDistance)}%`, `${cloud.x}%`],
            y: `${cloud.y}%`,
            opacity: cloud.opacity,
            scale: cloud.size
          }}
          transition={{
            x: {
              duration: cloud.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: cloud.delay + 3 // Start floating after initial animation
            },
            y: {
              duration: 2,
              ease: "easeOut",
              delay: cloud.delay
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
          style={{
            filter: 'blur(0.5px)', // Subtle blur for softer look
          }}
        >
          <Image
            src={cloud.src}
            alt="Floating cloud"
            width={300}
            height={150}
            style={{
              width: 'auto',
              height: 'auto',
              maxWidth: '300px',
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

export default FloatingClouds;
