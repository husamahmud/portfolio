import { useEffect, useState } from 'react'

import { LoadingOutlined } from '@ant-design/icons'
import { Popover, Spin, Timeline } from 'antd'
import { motion } from 'framer-motion'


const TIMELINE_DATA = [
  {
    description: 'Electrical Engineering Student',
  },
  {
    description: 'Software Engineer at',
    url: 'https://www.alxafrica.com/',
    companyName: 'ALX',
  },
  {
    description: 'Aced 230+ problems on',
    url: 'https://leetcode.com/u/husamahmud/',
    companyName: 'LeetCode',
  },
  {
    description: 'Built',
    url: 'https://chromewebstore.google.com/detail/leetpush/gmagfdabfjaipjgdfgddjgongeemkalf',
    companyName: 'LeetPush',
    rest: 'Chrome Ext.',
  },
  {
    description: 'Frontend Engineer at',
    url: 'https://www.linkedin.com/company/linkedtrust',
    companyName: 'LinkedTrust',
  },
  {
    description: 'Participant at',
    url: 'https://manara.tech/',
    companyName: 'Manara',
  },
  {
    description: 'Intern at',
    url: 'https://www.linkedin.com/company/gamifiersa/',
    companyName: 'GamifierSA',
  },
]

const LINKS = [
  {
    href: '/resume_husam.pdf',
    src: '/cv.svg',
    alt: 'CV',
  },
  {
    href: 'https://github.com/husamahmud',
    src: '/github.svg',
    alt: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/husamahmud/',
    src: '/linkedin.svg',
    alt: 'LinkedIn',
  },
  {
    href: 'mailto:proghusam@gmail.com',
    src: '/mail.svg',
    alt: 'Email',
  },
  {
    href: 'https://curiouscat.live/husamahmud',
    src: '/curious-cat.svg',
    alt: 'Curious Cat',
  },
]

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  if (isLoading) return (
    <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
  )

  return (
    <main className="w-full rounded-[30px] px-5 py-5 text-stone-300 sm:w-[600px] sm:px-8 sm:py-5 font-sans">
      <Img />
      <Name />
      <Time />
      <Links />
      <Meeting />
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
      <img
        loading="lazy"
        src="/husam.png"
        alt="Hüsam Yıldırım"
        className="mx-auto mb-4 w-28 rounded-full border-4 sm:mb-10 sm:w-52"
      />
    </motion.div>
  )
}

function Name() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'anticipate' }}
    >
      <p className="mb-4 text-center text-base sm:mb-9 sm:text-2xl">
        <span className="block font-semibold">Hey, I'm Hüsam.</span>
        Frontend Software Engineer.
      </p>
    </motion.div>
  )
}


function Time() {
  return (
    <div className="flex justify-center">
      <Timeline
        className="flex-1 text-xs sm:text-base text-stone-200"
        mode="alternate"
        pending={<span className="text-xs sm:text-sm">Recording more achievements...</span>}
      >
        {TIMELINE_DATA.map((item, index) => (
          <Timeline.Item key={item.companyName}>
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
                {item.companyName && (
                  <a href={item.url}
                     target="_blank"
                     className="text-[#69b1ff]">
                    {item.companyName}{' '}
                  </a>
                )}
                {item.rest && `${item.rest}`}
              </p>
            </motion.div>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  )
}


function Links() {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'anticipate', delay: 2 }}>
      <div className="mx-auto flex w-fit items-center justify-center gap-1 rounded-full max-sm:px-4 max-sm:py-1 sm:mb-4">
        {LINKS.map(({ href, src, alt }) => (
          <Popover trigger="hover"
                   content={alt}>
            <a key={alt}
               href={href}
               target="_blank"
               className="transform p-1.5 transition duration-300 hover:scale-110"
            >
              <img src={src}
                   className="w-6 sm:w-8"
                   alt={alt}
              />
            </a>
          </Popover>
        ))}
      </div>
    </motion.div>
  )
}

function Meeting() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'anticipate', delay: 2.5 }}>
      <div className="flex justify-center">
        <a
          href="https://proghusam.youcanbook.me/"
          className="rounded-full bg-[#1F1F1F] px-4 py-3 sm:px-6 text-xs sm:text-base text-center transition-colors hover:text-[#69b1ff]"
          target="_blank">
          Book a meeting
        </a>
      </div>
    </motion.div>
  )
}
