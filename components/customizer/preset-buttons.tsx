'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { useColorContext } from '@/contexts/color-context'
import { ThemePreset } from '@/lib/presets'
import { Rocket, Shuffle, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export function PresetButtons() {
  const {
    applyPreset,
    presets,
    generateRandomPalette,
    toggleSaturationBoost,
    isSaturationBoosted,
    setPrimaryColor,
    clearPrimaryColor,
    customPrimaryColor
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

  return (
    <div className='space-y-4 mt-4'>
      <Select onValueChange={(value) => applyPreset(presets.find((preset) => preset.name === value) as ThemePreset)}>
        <SelectTrigger className='w-full'>
          <SelectValue placeholder='Choose a preset' />
        </SelectTrigger>
        <SelectContent>
          {presets.map((preset) => (
            <SelectItem
              key={preset.name}
              value={preset.name}>
              {preset.name}
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
        <Label
          htmlFor='saturation-boost'
          className='flex items-center space-x-2 cursor-pointer'>
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
        onClick={generateRandomPalette}
        className='w-full bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-primary-foreground font-semibold transition-all duration-300'>
        <Shuffle className='h-4 w-4 mr-2' />
        Generate Random Theme
      </Button>
    </div>
  )
}
