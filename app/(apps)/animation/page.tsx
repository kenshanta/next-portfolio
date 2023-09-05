'use client'
import { motion } from 'framer-motion'

const CoolAnimation: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '15vh',
  }

  const headingStyle: React.CSSProperties = {
    fontSize: '2rem',
    marginBottom: '1rem',
  }

  const boxStyle: React.CSSProperties = {
    width: '150px',
    height: '150px',
    background: 'pink',
    borderLeft: '50px solid transparent',
    borderRight: '50px solid transparent',
    borderBottom: '100px solid orange',
  }

  return (
    <div style={containerStyle}>
      <motion.div
        style={boxStyle}
        whileHover={{ scale: 1.2, rotate: -75 }}
        whileTap={{ scale: 5.9 }}
        initial={{ opacity: 0, y: 50 }} // Initial position
        animate={{ opacity: 1, y: 0 }} // Animate to this position
        transition={{ duration: 1 }} // Animation duration
      >
        <div className="flex items-center justify-center ">
          cmon cmon now touch me babey
        </div>
      </motion.div>
    </div>
  )
}

export default CoolAnimation
