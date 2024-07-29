'use client'

import React from 'react'
import Image from 'next/image'
import { Timeline, ConfigProvider, Tooltip } from 'antd'
import { motion } from 'framer-motion'

import { LINKS, TIMELINE_DATA } from '@/app/data'
import Loading from '@/app/Loader'

export default function Home() {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loading />

  return (
    <main className="flex flex-col py-10 overscroll-x-none">
      <Img />
      <Name />
      <Time />
      <Links />
    </main>
  )
}

function Img() {
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

function Name() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: 'anticipate' }}
    >
      <p className="mb-4 text-center text-base sm:mb-9 sm:text-2xl">
        <span className="block font-semibold">Hey, I&apos;m Hüsam.</span>
        Frontend Software Engineer.
      </p>
    </motion.div>
  )
}

function Time() {
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

function Links() {
  const email = 'developer.husam@gmail.com'
  const onCopy = (email: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText(email)
  }

  return (
    <div className="flex justify-center items-center">
      {LINKS.map((item) => (
        <a
          key={item.alt}
          href={item.href}
          onClick={item.action === 'copy' ? onCopy(email) : undefined}
          target={item.action === 'copy' ? '_self' : '_blank'}
          className="transform p-1.5 transition duration-300 hover:scale-110"
        >
          <ConfigProvider>
            {item.action === 'copy' ? (
              <Tooltip
                title="Click to copy"
                color="blue"
              >
                <Tooltip
                  title="Email copied!"
                  color="blue"
                  trigger="click"
                >
                  <Image
                    className="w-6 sm:w-8"
                    src={item.src}
                    alt={item.alt}
                    width={32}
                    height={32}
                  />
                </Tooltip>
              </Tooltip>
            ) : (
              <Tooltip
                color="blue"
                title={item.alt}
              >
                <Image
                  className="w-6 sm:w-8"
                  src={item.src}
                  alt={item.alt}
                  width={32}
                  height={32}
                />
              </Tooltip>
            )}
          </ConfigProvider>
        </a>
      ))}
    </div>
  )
}
