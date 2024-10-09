import type { Metadata } from 'next'
import localFont from 'next/font/local'
import ProviderProvider from '../contexts/provider-provider'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: 'Shadcn Theme Designer',
  description:
    'Create themes for your Shadcn projects. Generate beautiful color palettes. Edit your existing themes. 100% WCAG compliant theme generator.',
  applicationName: 'Shadcn Theme Designer',
  authors: [
    {
      name: 'Tariel Davidashvili',
      url: 'https://tariel.me'
    }
  ],
  generator: 'Next.js',
  keywords: [
    'shadcn',
    'theme',
    'designer',
    'color',
    'palette',
    'generator',
    'wcag',
    'compliant',
    'accessible',
    'tailwind',
    'react',
    'next',
    'typescript'
  ],
  referrer: 'origin',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased md:h-screen max-h-dvh w-full transition-colors duration-500`}>
        <ProviderProvider>{children}</ProviderProvider>
      </body>
    </html>
  )
}
