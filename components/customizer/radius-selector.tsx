'use client'

import { Label } from '@/components/ui/label'
import { useColorContext } from '@/contexts/color-context'
import { radiusOptions } from '@/lib/vars'
import { useState } from 'react'
import { ButtonGroup, ButtonGroupItem } from '../ui/buttonradio'

export default function RadiusSelector() {
  const { radius, setRadius } = useColorContext()

  const [, setCurrentRadius] = useState(radius.toString())

  return (
    <div className='mt-4 border-t pt-3'>
      <Label className='text-xs mb-2 block'>Border Radius</Label>
      <ButtonGroup
        value={radius.toString()}
        onValueChange={(value) => {
          setCurrentRadius(value)
          setRadius(parseFloat(value))
        }}
        className='flex flex-wrap gap-2 justify-evenly'>
        {radiusOptions.map((option) => (
          <div
            key={option}
            className='flex items-center space-x-2'>
            <ButtonGroupItem
              icon={
                <div
                  className='w-6 h-6 border-t-2 border-l-2 border-foreground'
                  style={{
                    borderTopLeftRadius: `${option}rem`
                  }}
                />
              }
              label={option.toString()}
              value={option.toString()}
              id={`radius-${option}`}
            />
          </div>
        ))}
      </ButtonGroup>
    </div>
  )
}
