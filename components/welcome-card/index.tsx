'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Skeleton } from '@/components/ui/skeleton'
import { Switch } from '@/components/ui/switch'
import { useColorContext } from '@/contexts/color-context'
import { ThemePreset } from '@/lib/presets'
import { ChevronLeft, Rocket, Shuffle, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Icons } from './logo'

interface WelcomeCardProps {
  onHideDesigner: () => void
}

export default function WelcomeCard({ onHideDesigner }: WelcomeCardProps) {
  const {
    applyPreset,
    presets,
    generateRandomPalette,
    toggleSaturationBoost,
    isSaturationBoosted,
    setPrimaryColor,
    clearPrimaryColor,
    customPrimaryColor,
    isLoaded
  } = useColorContext()

  const [colorInputValue, setColorInputValue] = useState(customPrimaryColor || '')

  useEffect(() => {
    setColorInputValue(customPrimaryColor || '')
  }, [customPrimaryColor])

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value
    setColorInputValue(newColor)
    setPrimaryColor(newColor)
  }

  const handleClearPrimaryColor = () => {
    clearPrimaryColor()
    setColorInputValue('')
  }

  const { theme } = useTheme()

  const sortedPresets = [...presets].sort((a, b) => {
    if (a.name === 'Default') return -1
    if (b.name === 'Default') return 1
    return a.name.localeCompare(b.name)
  })

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
        <CardTitle className='flex items-center'>
          <div className='relative w-8 h-8 mr-2 overflow-hidden rounded-[0.5rem]'>
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='w-[90%] h-[90%] bg-gradient-to-r from-primary via-accent to-secondary rounded-full' />
            </div>
            <Icons.logo className='absolute inset-0 z-10 h-8 w-8 fill-background' />
          </div>
          Shadesigner
        </CardTitle>
        <Button
          size='xs'
          variant='outline'
          onClick={onHideDesigner}
          className='text-xs'>
          <ChevronLeft className='mr-2 h-4 w-4' />
          Hide Palette Designer
        </Button>
      </CardHeader>
      <CardContent>
        <p className='text-sm text-muted-foreground'>
          Shadesigner is a smart palette generator for shadcn/ui. Easily customize your theme colors, preview changes in
          real-time, and export your palette for seamless integration with your projects. Start by choosing a preset,
          importing your current css or generating a random palette.
        </p>
        <div className='space-y-4 mt-4'>
          <Select
            onValueChange={(value) => applyPreset(presets.find((preset) => preset.name === value) as ThemePreset)}>
            <SelectTrigger className='w-full text-xs h-9'>
              <SelectValue placeholder='Choose a preset' />
            </SelectTrigger>
            <SelectContent>
              {sortedPresets.map((preset) => (
                <SelectItem
                  key={preset.name}
                  value={preset.name}>
                  <div className='inline-flex items-center space-x-2'>
                    <span>{preset.name}</span>
                    {preset.boost && <Rocket className='h-4 w-4' />}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className='flex items-center justify-between'>
            <div className='relative flex items-center space-x-2'>
              <span className='text-sm'>Primary Color</span>
              <Input
                type='color'
                onChange={handleColorChange}
                value={colorInputValue}
                className='w-12 h-6 border-none cursor-pointer'
                style={{
                  backgroundColor: colorInputValue
                }}
              />
              <Button
                variant='outline'
                size='icon'
                onClick={handleClearPrimaryColor}
                className='absolute -top-2 -right-2 h-5 w-5'>
                <X className='h-3 w-3' />
              </Button>
            </div>

            <Label className='flex items-center space-x-2 cursor-pointer'>
              <span className='text-sm'>Color Boost</span>
              <Rocket className='h-4 w-4' />
              <Switch
                id='saturation-boost'
                checked={isSaturationBoosted}
                onCheckedChange={toggleSaturationBoost}
              />
            </Label>
          </div>

          <Button
            variant='default'
            size='xs'
            onClick={generateRandomPalette}
            className='w-full font-semibold bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-primary-foreground transition-all duration-300'>
            <Shuffle className='h-4 w-4 mr-2' />
            Generate Random Theme
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
