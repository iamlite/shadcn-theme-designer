'use client'

import { PresetButtons } from '@/components/customizer/preset-buttons'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { useColorContext } from '@/contexts/color-context'
import { ChevronLeft } from 'lucide-react'

interface WelcomeCardProps {
  onHideDesigner: () => void
}

export default function WelcomeCard({ onHideDesigner }: WelcomeCardProps) {
  const { isLoaded } = useColorContext()

  if (!isLoaded) {
    return (
      <Card className='mb-4 pl-6 rounded-l-none border-l-0'>
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
    <Card className='mb-4 pl-6 rounded-l-none border-l-0'>
      <CardHeader className='flex flex-row items-center justify-between'>
        <CardTitle>Welcome! 👋</CardTitle>
        <Button
          variant='outline'
          onClick={onHideDesigner}
          className='text-xs'>
          <ChevronLeft className='mr-2 h-4 w-4' />
          Hide Theme Designer
        </Button>
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
