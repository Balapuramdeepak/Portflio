import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [sparks, setSparks] = useState([])
  const sparkId = useRef(0)

  // Raw mouse position
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Dot follows instantly
  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 50 })
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 50 })

  // Glow orb follows with lag
  const orbX = useSpring(mouseX, { stiffness: 120, damping: 20 })
  const orbY = useSpring(mouseY, { stiffness: 120, damping: 20 })

  // Outer ring with more lag
  const ringX = useSpring(mouseX, { stiffness: 60, damping: 18 })
  const ringY = useSpring(mouseY, { stiffness: 60, damping: 18 })

  useEffect(() => {
    let lastX = 0, lastY = 0, sparkTimer = null

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)

      // Spawn sparks when moving fast enough
      const dx = e.clientX - lastX
      const dy = e.clientY - lastY
      const speed = Math.sqrt(dx * dx + dy * dy)

      if (speed > 6) {
        spawnSpark(e.clientX, e.clientY)
      }

      lastX = e.clientX
      lastY = e.clientY
    }

    const spawnSpark = (x, y) => {
      const id = sparkId.current++
      const angle = Math.random() * 360
      const dist = 8 + Math.random() * 14
      const size = 2 + Math.random() * 3
      const colors = ['#a78bfa', '#818cf8', '#60a5fa', '#c4b5fd', '#e879f9', '#ffffff']
      const color = colors[Math.floor(Math.random() * colors.length)]

      setSparks(prev => [
        ...prev.slice(-18), // keep max 18 sparks
        { id, x, y, angle, dist, size, color }
      ])

      // Remove spark after animation
      setTimeout(() => {
        setSparks(prev => prev.filter(s => s.id !== id))
      }, 600)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp   = () => setIsClicking(false)

    const handleHoverStart = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover]')) {
        setIsHovering(true)
      }
    }
    const handleHoverEnd = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover]')) {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mouseover', handleHoverStart)
    window.addEventListener('mouseout', handleHoverEnd)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mouseover', handleHoverStart)
      window.removeEventListener('mouseout', handleHoverEnd)
      if (sparkTimer) clearTimeout(sparkTimer)
    }
  }, [])

  return (
    <>
      {/* Spark trail particles */}
      {sparks.map((spark) => (
        <motion.div
          key={spark.id}
          initial={{
            x: spark.x,
            y: spark.y,
            scale: 1,
            opacity: 0.9,
          }}
          animate={{
            x: spark.x + Math.cos((spark.angle * Math.PI) / 180) * spark.dist,
            y: spark.y + Math.sin((spark.angle * Math.PI) / 180) * spark.dist,
            scale: 0,
            opacity: 0,
          }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            width: spark.size,
            height: spark.size,
            borderRadius: '50%',
            backgroundColor: spark.color,
            boxShadow: `0 0 ${spark.size * 3}px ${spark.color}`,
            pointerEvents: 'none',
            zIndex: 9998,
            translateX: '-50%',
            translateY: '-50%',
          }}
        />
      ))}

      {/* Outer glow ring — biggest, most lag */}
      <motion.div
        style={{
          position: 'fixed',
          left: ringX,
          top: ringY,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
          zIndex: 9996,
        }}
      >
        <motion.div
          animate={{
            width:   isHovering ? 56 : isClicking ? 30 : 44,
            height:  isHovering ? 56 : isClicking ? 30 : 44,
            opacity: isHovering ? 0.5 : 0.25,
          }}
          transition={{ duration: 0.25 }}
          style={{
            borderRadius: '50%',
            border: '1.5px solid rgba(167, 139, 250, 0.6)',
            boxShadow: '0 0 12px rgba(124,58,237,0.3)',
          }}
        />
      </motion.div>

      {/* Middle glow orb */}
      <motion.div
        style={{
          position: 'fixed',
          left: orbX,
          top: orbY,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
          zIndex: 9997,
        }}
      >
        <motion.div
          animate={{
            width:   isHovering ? 36 : isClicking ? 18 : 24,
            height:  isHovering ? 36 : isClicking ? 18 : 24,
            opacity: isHovering ? 0.8 : 0.5,
          }}
          transition={{ duration: 0.2 }}
          style={{
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(167,139,250,0.9) 0%, rgba(96,165,250,0.4) 60%, transparent 100%)',
            boxShadow: isHovering
              ? '0 0 20px rgba(167,139,250,0.9), 0 0 40px rgba(124,58,237,0.5)'
              : '0 0 10px rgba(167,139,250,0.6), 0 0 24px rgba(124,58,237,0.3)',
            filter: 'blur(1px)',
          }}
        />
      </motion.div>

      {/* Center dot — snappy */}
      <motion.div
        style={{
          position: 'fixed',
          left: dotX,
          top: dotY,
          translateX: '-50%',
          translateY: '-50%',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      >
        <motion.div
          animate={{
            width:   isHovering ? 6 : isClicking ? 3 : 5,
            height:  isHovering ? 6 : isClicking ? 3 : 5,
            opacity: 1,
          }}
          transition={{ duration: 0.15 }}
          style={{
            borderRadius: '50%',
            background: 'white',
            boxShadow: '0 0 6px rgba(255,255,255,0.9), 0 0 12px rgba(167,139,250,1)',
          }}
        />
      </motion.div>
    </>
  )
}
