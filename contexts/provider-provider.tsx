'use client'

import { ColorProvider } from '@/contexts/color-context'
import { ThemeProvider } from '@/contexts/theme-provider'
export default function ProviderProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem>
      <ColorProvider>{children}</ColorProvider>
    </ThemeProvider>
  )
}
