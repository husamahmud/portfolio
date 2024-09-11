'use client'

import React from 'react'
import Loading from '@/app/Loader'
import LinksDock from '@/components/Links'
import Armory from '@/components/Armory'
import Img from '@/components/Img'
import Name from '@/components/Name'
import Time from '@/components/Time'
import Main from '@/components/Main'

// todo - add border beam component
// todo - add letter-pullup component
// todo - add sparkles-text

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
    <main className="flex flex-col pt-10 pb-20 max-w-lg overscroll-x-none">
      <Img />
      <Name />
      <Main/>
      {/*<Armory />*/}
      {/*<Time />*/}
      <LinksDock />
    </main>
  )
}
