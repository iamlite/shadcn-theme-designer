import Providers from '@/contexts/providers'
import Metadata from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Shadesigner - A Shadcn Palette Generator & Theme Designer',
  description:
    'Generate beautiful color palettes for your Shadcn projects. Edit your existing themes. 100% WCAG compliant theme generator.',
  applicationName: 'Shadesigner - A Shadcn Theme Generator & Palette Designer',
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
  metadataBase: new URL('https://shadesigner.com'),
  openGraph: {
    title: 'Shadesigner - A Shadcn Palette Generator & Theme Designer',
    description:
      'Generate beautiful color palettes for your Shadcn projects. Edit your existing themes. 100% WCAG compliant theme generator.',
    url: 'https://shadesigner.com',
    siteName: 'Shadesigner - A Shadcn Palette Generator & Theme Designer',
    images: [
      {
        url: 'https://shadesigner.com/opengraph-image',
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shadesigner - A Shadcn Palette Generator & Theme Designer',
    description:
      'Generate beautiful color palettes for your Shadcn projects. Edit your existing themes. 100% WCAG compliant theme generator.',
    images: ['https://shadesigner.com/twitter-image']
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      suppressHydrationWarning
      lang='en'>
      <body className={`${inter.className} antialiased md:h-screen max-h-dvh w-full transition-colors duration-500`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
