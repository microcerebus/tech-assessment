import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Providers from '@/providers'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Absinthe Technical Assessment',
  description: 'Built by Dhruv Jain',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn('dark', inter.variable)}>
      <body className="overflow-none dark min-h-screen bg-background font-sans antialiased">
        <Toaster position="top-center" visibleToasts={1} />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
