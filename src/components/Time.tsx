import { Timeline } from 'antd'
import { TIMELINE_DATA } from '@/app/data'
import { motion } from 'framer-motion'
import React from 'react'

export default function Time() {
  return (
    <div className="flex justify-center">
      <Timeline
        mode="alternate"
        pending={
          <span className="text-xs sm:text-sm">
            Recording achievements...
          </span>
        }
        className="flex-1 text-xs sm:text-base text-stone-200"
      >
        {TIMELINE_DATA.map((item, index) => (
          <Timeline.Item key={index}>
            <motion.div
              initial={{ x: index % 2 === 0 ? 100 : -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: 'anticipate',
                delay: index * 0.3,
              }}
            >
              <p className="text-xs sm:text-base">
                {item.description}{' '}
                {item.extName && (
                  <a
                    href={item.url}
                    target="_blank"
                    className="text-[#69b1ff]"
                  >
                    {item.extName}{' '}
                  </a>
                )}
                {item.rest}
              </p>
            </motion.div>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  )
}
