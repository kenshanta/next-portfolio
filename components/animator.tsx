'use client'

import { motion, AnimatePresence, useSpring, useScroll } from 'framer-motion'

export const PageAnimation = ({ children }: any) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50, x: 100 }}
        animate={{
          opacity: 5,
          y: 10,
          x: 0,
        }}
        transition={{ delay: 0.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export const BoxAnimation = ({ props }: any) => {
  return (
    <motion.div
      style={{
        height: 50,
        width: 50,
        background: props.color,
      }}
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: props.rotation,
        borderRadius: ['0%', '0%', '50%', '50%', '0%'],
      }}
      transition={{
        duration: props.duration,
        ease: 'easeInOut',
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: 1,
        repeatDelay: 2,
      }}
    />
  )
}

export const ProgressIndicator = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  return <motion.div className="progress-bar" style={{ scaleX }} />
}
