'use client'

import { motion, AnimatePresence } from 'framer-motion'

const PageAnimation = ({ children }: any) => {
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
export default PageAnimation
