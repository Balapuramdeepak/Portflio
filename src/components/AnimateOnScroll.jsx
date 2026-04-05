import { motion } from 'framer-motion'

export default function AnimateOnScroll({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  once = true,
}) {
  const initial = {
    opacity: 0,
    y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
    x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    scale: direction === 'scale' ? 0.9 : 1,
  }

  const animate = {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay,
    },
  }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin: '-80px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
