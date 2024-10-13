import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ProviderProvider from '../contexts/provider-provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Shadesigner - A Shadcn Palette Generator & Theme Designer',
  description:
    'Generate beautiful color palettes for your Shadcn projects. Edit your existing themes. 100% WCAG compliant theme generator.',
  applicationName: 'Shadesigner - A Shadcn Palette Generator & Theme Designer',
  authors: [
    {
      name: 'Tariel Davidashvili',
      url: 'https://tarieldavids.com'
    }
  ],
  creator: 'Tariel Davidashvili',
  publisher: 'Tariel Davidashvili',
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
  },
  metadataBase: new URL('https://shadesigner.com'),
  openGraph: {
    title: 'Shadesigner - A Shadcn Palette Generator & Theme Designer',
    description:
      'Generate beautiful color palettes for your Shadcn projects. Edit your existing themes. 100% WCAG compliant theme generator.',
    url: 'https://shadesigner.vercel.app',
    siteName: 'Shadesigner - A Shadcn Palette Generator & Theme Designer'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased md:h-screen max-h-dvh w-full transition-colors duration-500`}>
        <ProviderProvider>{children}</ProviderProvider>
      </body>
    </html>
  )
}
