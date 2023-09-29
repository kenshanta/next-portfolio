'use client'

import { motion, useSpring, useScroll } from 'framer-motion'

const UsageIndicator = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 350,
    damping: 30,
    restDelta: 0.1,
  })
  return (
    <motion.div
      animate={{
        backgroundColor: 'orange',
      }}
      className="progress-bar color-orange"
      style={{ scaleX }}
    />
  )
}
export default UsageIndicator
