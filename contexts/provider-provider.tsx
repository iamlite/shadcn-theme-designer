'use client'

import { TooltipProvider } from '@/components/ui/tooltip'
import { ColorProvider } from '@/contexts/color-context'
import { ThemeProvider } from '@/contexts/theme-provider'

export default function ProviderProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      disableTransitionOnChange={false}
      attribute='class'
      defaultTheme='system'
      enableSystem>
      <ColorProvider>
        <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
      </ColorProvider>
    </ThemeProvider>
  )
}
