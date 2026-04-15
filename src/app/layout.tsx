import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import { SiteNav } from '@/components/SiteNav'
import { SiteFooter } from '@/components/SiteFooter'
import './globals.css'

const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' })
const serif = Fraunces({ subsets: ['latin'], variable: '--font-serif', display: 'swap' })

export const metadata: Metadata = {
  title: 'David Buckley — Junior software engineer, UK',
  description:
    'A structured self-directed programme into software and AI engineering, documented in public. Zero cost, all free resources.',
  openGraph: {
    title: 'David Buckley — Junior software engineer, UK',
    description: 'A structured programme, shipping in public.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="font-sans bg-white text-neutral-900 antialiased min-h-screen flex flex-col">
        <SiteNav />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  )
}
