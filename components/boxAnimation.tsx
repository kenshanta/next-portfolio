'use client'

import { motion } from 'framer-motion'

const BoxAnimation = ({ props }: any) => {
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
export default BoxAnimation
