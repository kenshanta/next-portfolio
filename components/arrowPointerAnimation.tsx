import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface ArrowPointerProps {
  pointA: { x: number; y: number }
  pointB: { x: number; y: number }
}
const ArrowPointer: React.FC<ArrowPointerProps> = ({ pointA, pointB }) => {
  const [iconVisible, setIconVisible] = useState(false)

  useEffect(() => {
    setIconVisible(true)
  }, [])

  if (!iconVisible) {
    return null
  }

  return (
    <motion.div
      style={{
        position: 'absolute',
        background: 'yellow',
        width: 20,
        height: 20,
        transform: `translate(${pointB.x - pointA.x}px, ${
          pointB.y - pointA.y
        }px)`,
      }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.2 }}
    />
  )
}

export default ArrowPointer
