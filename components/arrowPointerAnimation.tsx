import React from 'react'
import { motion } from 'framer-motion'

const ArrowPointer: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '100px', // Adjust as needed
  }

  const arrowStyle: React.CSSProperties = {
    position: 'absolute',
    width: 0,
    height: 0,
    borderTop: '20px solid transparent',
    borderBottom: '20px solid transparent',
    borderLeft: '40px solid #00f', // Arrow color
  }

  const tailStyle: React.CSSProperties = {
    position: 'absolute',
    width: '20px',
    height: '5px',
    background: '#00f',
    top: '50%',
    transform: 'translateY(-50%)',
    left: '0px',
  }

  return (
    <div style={containerStyle}>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '100%' }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        style={arrowStyle}
      ></motion.div>
      <div style={tailStyle}></div>
    </div>
  )
}

export default ArrowPointer
