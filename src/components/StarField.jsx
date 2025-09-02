'use client'

import { motion } from 'framer-motion'

const StarField = () => {
  // Generate fixed star positions to avoid hydration mismatch
  const stars = Array.from({ length: 320 }, (_, i) => {
    // Create better distribution across the entire screen
    // Use mathematical distribution for more even coverage
    const goldenAngle = 137.5; // Golden angle for natural distribution
    const radius = Math.sqrt(i / 320) * 50; // Spiral outward
    const angle = i * goldenAngle;
    
    // Convert polar to cartesian and center + spread across screen
    const baseX = 50 + radius * Math.cos(angle * Math.PI / 180);
    const baseY = 50 + radius * Math.sin(angle * Math.PI / 180);
    
    // Add deterministic but random-looking offset using index
    const offsetX = ((i * 17) % 40) - 20; // -20 to +20
    const offsetY = ((i * 23) % 40) - 20; // -20 to +20
    
    // Ensure stars stay within bounds (5% to 95%)
    const finalX = Math.max(5, Math.min(95, baseX + offsetX));
    const finalY = Math.max(5, Math.min(95, baseY + offsetY));
    
    const sizes = [0.4, 0.6, 0.8, 1.0, 1.2, 0.5, 0.7, 0.9, 1.1, 1.3];
    const opacities = [0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 0.55, 0.65, 0.75];
    const durations = [3, 4.2, 5.8, 6.3, 7.1, 8.7, 4.9, 5.4, 6.8, 7.9, 3.6, 4.8, 5.2, 6.9, 8.1];
    const delays = [0, 0.7, 1.3, 2.1, 2.9, 3.8, 4.6, 0.3, 1.1, 1.8, 2.6, 3.4, 4.2, 5.1, 0.9, 1.6, 2.3, 3.1, 3.9, 4.7];
    
    return {
      id: i,
      left: finalX,
      top: finalY,
      size: sizes[i % sizes.length],
      maxOpacity: opacities[i % opacities.length],
      duration: durations[i % durations.length] + ((i * 13) % 100) / 100, // Add 0-1s random variation
      delay: delays[i % delays.length] + ((i * 31) % 200) / 100 // Add 0-2s random variation
    };
  });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: '0px', // Sharp corners for crisp points
            boxShadow: `0 0 ${star.size * 5}px rgba(255,255,255,0.9)`, // Enhanced glow
          }}
          animate={{
            opacity: [0, star.maxOpacity, 0],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Twinkle effects - randomly distributed across all stars */}
      {Array.from({ length: 40 }, (_, i) => {
        // Select random stars from the main star array to twinkle
        const starIndex = (i * 7 + 11) % 320; // Updated for 320 stars
        const star = stars[starIndex];
        
        return (
          <motion.div
            key={`twinkle-${i}`}
            className="absolute bg-white"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: '0.4px',
              height: '0.4px',
              borderRadius: '0px',
              boxShadow: '0 0 1.5px 0.3px rgba(255,255,255,0.3)' // Very subtle glow
            }}
            animate={{
              opacity: [0, 0.2, 0],
              scale: [0, 0.6, 0],
            }}
            transition={{
              duration: 10 + (i % 12) + ((i * 19) % 50) / 10, // 10-21.9 seconds varied duration
              repeat: Infinity,
              delay: (i % 20) * 1.5 + ((i * 37) % 100) / 10, // 0-39.9 seconds varied delay
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

export default StarField;
