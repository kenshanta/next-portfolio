'use client'

import { motion, useSpring, useScroll } from 'framer-motion'

const ProgressIndicator = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  return (
    <motion.div
      animate={{
        backgroundColor: 'orange',
      }}
      className="progress-bar color-pink"
      style={{ scaleX }}
    />
  )
}
export default ProgressIndicator
