'use client'

import { motion, AnimatePresence } from 'framer-motion'

const PageAnimation = ({ children, delaySec }: any) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100, x: 0 }}
        animate={{
          opacity: 5,
          y: 0,
          x: 0,
        }}
        transition={{ delay: delaySec }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
export default PageAnimation
