'use client'

import { motion } from 'framer-motion'

const BoxAnimation = ({
  isEnabled,
  animateProps,
  transitionProps,
  children,
}: any) => {
  if (isEnabled) {
    return (
      <motion.div
        style={{
          height: 'auto',
          width: 'auto',
          display: 'flex',
          justifyContent: 'center',
        }}
        animate={{
          ...animateProps,
        }}
        transition={{
          ...transitionProps,
        }}
      >
        {children}
      </motion.div>
    )
  } else
    return (
      <motion.div
        style={{
          height: 'auto',
          width: 'auto',
          display: 'flex',
          justifyContent: 'center',
        }}
        animate={{}}
        transition={{}}
      >
        {children}
      </motion.div>
    )
}
export default BoxAnimation
