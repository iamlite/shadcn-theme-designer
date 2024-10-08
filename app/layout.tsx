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
  title: 'EasyVar',
  description: 'Easily generate themes for your Shadcn projects.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-h-dvh w-full overflow-y-auto transition-colors duration-300`}>
        <ProviderProvider>{children}</ProviderProvider>
      </body>
    </html>
  )
}
