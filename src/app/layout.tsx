import './globals.scss'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter'
})
const jetBrains = JetBrains_Mono({ 
  subsets: ['latin'], 
  style: 'normal',
  variable: '--font-jetbrains-mono'
})

export const metadata: Metadata = {
  title: 'Supercharge Productivity',
  description: 'Supercharge Productivity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jetBrains.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
