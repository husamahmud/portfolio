import React, { Suspense } from 'react'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'

import './globals.css'
import Loading from '@/app/loading'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hüsam - Frontend Software Engineer',
  description: 'Personal portfolio of Hüsam, a Frontend Software Engineer specializing in React and Next.js',
  openGraph: {
    title: 'Hüsam - Frontend Software Engineer',
    description: 'Personal portfolio of Hüsam, a Frontend Software Engineer',
    images: [{ url: '/husam.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hüsam - Frontend Software Engineer',
    description: 'Personal portfolio of Hüsam, a Frontend Software Engineer',
    images: ['/husam.png'],
  },
}

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={raleway.className}>
    <Suspense fallback={<Loading />}>
      {children}
    </Suspense>
    </body>
    </html>
  )
}
