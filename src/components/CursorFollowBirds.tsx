'use client'

import { useEffect, useState, useRef } from 'react'
import Lottie from 'lottie-react'
import { motion } from 'framer-motion'

const CursorFollowBirds = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const birdsRef = useRef<any>(null)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Lottie Animation Data (die Vögel aus cursor-follow.json)
  const birdsAnimationData = {
    "v": "5.9.0",
    "fr": 29.9700012207031,
    "ip": 0,
    "op": 179.000007290819,
    "w": 1920,
    "h": 1080,
    "nm": "Birdies",
    "ddd": 0,
    "assets": [],
    "layers": [
      {
        "ddd": 0,
        "ind": 1,
        "ty": 4,
        "nm": "Layer 1 Outlines 12",
        "sr": 1,
        "ks": {
          "o": { "a": 0, "k": 100, "ix": 11 },
          "r": { "a": 0, "k": 0, "ix": 10 },
          "p": {
            "a": 1,
            "k": [
              { "i": { "x": 0.833, "y": 0.833 }, "o": { "x": 0.167, "y": 0.167 }, "t": 0, "s": [975.9, 512.75, 0], "to": [42.023, -5.833, 0], "ti": [115.463, 37.444, 0] },
              { "i": { "x": 0.833, "y": 0.833 }, "o": { "x": 0.167, "y": 0.167 }, "t": 91, "s": [1039.039, 365.75, 0], "to": [-222.702, -72.222, 0], "ti": [-175.965, 48.355, 0] },
              { "t": 176.000007168627, "s": [975.9, 512.75, 0] }
            ],
            "ix": 2,
            "l": 2
          },
          "a": { "a": 0, "k": [1168.414, 360.312, 0], "ix": 1, "l": 2 },
          "s": { "a": 0, "k": [-48, 48, 100], "ix": 6, "l": 2 }
        },
        "ao": 0,
        "shapes": [
          {
            "ty": "gr",
            "it": [
              {
                "ind": 0,
                "ty": "sh",
                "ix": 1,
                "ks": {
                  "a": 0,
                  "k": {
                    "i": [[-2.686, 2.865], [9.723, 12.806], [15.381, 1.018], [-1.422, -0.474], [0.888, -5.651], [-0.788, -2.853], [-3.288, -3.938], [-1.896, -0.08]],
                    "o": [[3.639, -3.881], [-9.723, -12.806], [-5.928, -0.392], [1.423, 0.474], [-0.522, 3.313], [0.814, 2.944], [3.401, 4.073], [4.31, 0.181]],
                    "v": [[25.168, 21.732], [22.885, 3.663], [-26.68, -30.013], [-25.02, -24.795], [-7.944, -1.081], [-7.056, 13.677], [-1.864, 23.747], [7.253, 30.224]],
                    "c": true
                  },
                  "ix": 2
                },
                "nm": "Path 1",
                "mn": "ADBE Vector Shape - Group",
                "hd": false
              },
              {
                "ty": "fl",
                "c": { "a": 0, "k": [1, 1, 1, 1], "ix": 4 },
                "o": { "a": 0, "k": 100, "ix": 5 },
                "r": 1,
                "bm": 0,
                "nm": "Fill 1",
                "mn": "ADBE Vector Graphic - Fill",
                "hd": false
              },
              {
                "ty": "tr",
                "p": { "a": 0, "k": [1165.566, 363.856], "ix": 2 },
                "a": { "a": 0, "k": [18.059, 28.371], "ix": 1 },
                "s": {
                  "a": 1,
                  "k": [
                    { "i": { "x": [0.833, 0.833], "y": [0.833, 0.833] }, "o": { "x": [0.167, 0.167], "y": [0.167, 0.167] }, "t": 1, "s": [100, -79] },
                    { "i": { "x": [0.833, 0.833], "y": [0.833, 0.833] }, "o": { "x": [0.167, 0.167], "y": [0.167, 0.167] }, "t": 7, "s": [100, 100] },
                    { "i": { "x": [0.833, 0.833], "y": [0.833, 0.833] }, "o": { "x": [0.167, 0.167], "y": [0.167, 0.167] }, "t": 10, "s": [100, -79] },
                    { "i": { "x": [0.833, 0.833], "y": [0.833, 0.833] }, "o": { "x": [0.167, 0.167], "y": [0.167, 0.167] }, "t": 16, "s": [100, 100] },
                    { "t": 244.000009938324, "s": [100, 100] }
                  ],
                  "ix": 3
                },
                "r": {
                  "a": 1,
                  "k": [
                    { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 1, "s": [-33] },
                    { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 7, "s": [0] },
                    { "t": 244.000009938324, "s": [0] }
                  ],
                  "ix": 6
                },
                "o": { "a": 0, "k": 100, "ix": 7 },
                "sk": {
                  "a": 1,
                  "k": [
                    { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 1, "s": [16] },
                    { "i": { "x": [0.833], "y": [0.833] }, "o": { "x": [0.167], "y": [0.167] }, "t": 7, "s": [0] },
                    { "t": 244.000009938324, "s": [0] }
                  ],
                  "ix": 4
                },
                "sa": { "a": 0, "k": 0, "ix": 5 },
                "nm": "Transform"
              }
            ],
            "nm": "Group 16",
            "np": 2,
            "cix": 2,
            "bm": 0,
            "ix": 1,
            "mn": "ADBE Vector Group",
            "hd": false
          }
        ],
        "ip": 0,
        "op": 8990.00036617021,
        "st": 0,
        "bm": 0
      }
    ],
    "markers": []
  }

  return (
    <motion.div
      className="fixed pointer-events-none z-50"
      style={{
        left: mousePosition.x - 50, // Offset um die Vögel zu zentrieren
        top: mousePosition.y - 50,
        opacity: isVisible ? 1 : 0,
      }}
      animate={{
        left: mousePosition.x - 50,
        top: mousePosition.y - 50,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.5,
      }}
    >
      <Lottie
        lottieRef={birdsRef}
        animationData={birdsAnimationData}
        loop={true}
        autoplay={true}
        style={{
          width: 100,
          height: 100,
          filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
        }}
      />
    </motion.div>
  )
}

export default CursorFollowBirds
