'use client'

import { PresetButtons } from '@/components/customizer/preset-buttons'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { useColorContext } from '@/contexts/color-context'

export default function WelcomeCard() {
  const { isLoaded } = useColorContext()

  if (!isLoaded) {
    return (
      <Card className='mb-4'>
        <CardHeader>
          <Skeleton className='h-8 w-3/4' />
        </CardHeader>
        <CardContent>
          <Skeleton className='h-4 w-full mb-2' />
          <Skeleton className='h-4 w-full mb-2' />
          <Skeleton className='h-4 w-3/4 mb-2' />
          <Skeleton className='h-4 w-full mb-2' />
          <Skeleton className='h-4 w-full mb-2' />
          <Skeleton className='h-4 w-1/2 mb-4' />
          <Skeleton className='h-10 w-full' />
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className='mb-4'>
      <CardHeader>
        <CardTitle>Welcome! 👋</CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-sm text-muted-foreground'>
          A simple tool to help you create color palettes for shadcn/ui. Easily customize your theme colors, preview
          changes in real-time, and export your palette for seamless integration with your projects.
        </p>
        <PresetButtons />
      </CardContent>
    </Card>
  )
}
