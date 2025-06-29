import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.baltimorecountydems.com'),
  title: 'Baltimore County Democratic Central Committee',
  description: 'The official Democratic Central Committee for Baltimore County, Maryland. Representing Democratic voters and advancing our values through local leadership.',
  keywords: 'Baltimore County, Democratic Party, Maryland Democrats, political party, volunteer, donate',
  openGraph: {
    title: 'Baltimore County Democratic Central Committee',
    description: 'The official Democratic Central Committee for Baltimore County, Maryland.',
    url: 'https://www.baltimorecountydems.com',
    siteName: 'Baltimore County Democratic Central Committee',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baltimore County Democratic Central Committee',
    description: 'Building a stronger, more inclusive Baltimore County through Democratic values.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased min-h-screen flex flex-col">
        <Navigation />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}