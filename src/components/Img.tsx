import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

export default function Img() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'anticipate' }}
    >
      <div className="hsm-wrapper relative w-[210px] h-[210px] mx-auto mb-9">
        <Image
          priority
          className="rounded-full absolute inset-[5px] z-10"
          src="/husam.png"
          alt="Hüsam"
          width={200}
          height={200}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </motion.div>
  )
}
