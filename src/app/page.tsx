'use client'

import React from 'react'

import Loading from '@/app/Loader'
import LinksDock from '@/components/Links'
import Img from '@/components/Img'
import Name from '@/components/Name'
import Main from '@/components/Main'

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
      <Main />
      <LinksDock />
    </main>
  )
}
