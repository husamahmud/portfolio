import { motion } from 'framer-motion'
import React from 'react'

export default function Name() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: 'anticipate' }}
    >
      <p className="mb-4 text-center text-base sm:mb-6 sm:text-2xl">
        <span className="block font-semibold">Hey, I&apos;m Hüsam.</span>
        Frontend Software Engineer.
      </p>
    </motion.div>
  )
}
