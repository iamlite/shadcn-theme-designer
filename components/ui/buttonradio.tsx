'use client'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { motion } from 'framer-motion'
import * as React from 'react'

import { cn } from '@/lib/utils'
import { CheckCircle } from 'lucide-react'

const ButtonGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('flex gap-5', className)}
      {...props}
      ref={ref}
    />
  )
})
ButtonGroup.displayName = RadioGroupPrimitive.Root.displayName

const ButtonGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  {
    icon: React.ReactNode
    label: string
  } & React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, icon, label, ...props }, ref) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}>
      <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(
          'border data-[state=checked]:bg-background text-center h-16 w-16 rounded-md focus:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}>
        <RadioGroupPrimitive.RadioGroupIndicator className='relative'>
          <div className='relative'>
            <motion.div
              className='absolute top-0 right-0 -mr-1.5 -mt-3.5'
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}>
              <CheckCircle
                className='text-primary'
                size={16}
              />
            </motion.div>
          </div>
        </RadioGroupPrimitive.RadioGroupIndicator>

        <div className='flex flex-col justify-center'>
          <div className='self-center'>{icon}</div>
          <div className='text-sm pt-2'>{label}</div>
        </div>
      </RadioGroupPrimitive.Item>
    </motion.div>
  )
})
ButtonGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { ButtonGroup, ButtonGroupItem }
