'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Switch } from '@/components/ui/switch'
import { motion } from 'framer-motion'
import { Smile } from 'lucide-react'
import { Overview } from './dashboard/components/overview'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function ThemeShowcase() {
  return (
    <motion.div
      className='flex flex-col justify-center items-center h-full mt-12'
      initial='hidden'
      animate='visible'
      variants={containerVariants}>
      <Card className='w-full max-w-4xl mx-auto'>
        <motion.div variants={itemVariants}>
          <CardHeader>
            <CardTitle>Palette Showcase</CardTitle>
            <CardDescription>A demonstration using all the css variables used in the shadcn ui library</CardDescription>
          </CardHeader>
        </motion.div>
        <CardContent className='space-y-4'>
          <motion.div variants={itemVariants}>
            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-4'>
                <Card className='bg-background text-foreground'>
                  <CardContent className='p-2 text-center py-4'>
                    <p className='text-xs'>Global background and foreground</p>
                  </CardContent>
                </Card>
              </div>

              <div className='space-y-4'>
                <Card>
                  <CardContent className='p-2 text-center py-4'>
                    <p className='text-xs'>Card background and foreground</p>
                  </CardContent>
                </Card>
              </div>

              <div className='space-y-4'>
                <Card className='bg-muted text-muted-foreground'>
                  <CardContent className='p-2 text-center py-4'>
                    <p className='text-xs'>Muted background and foreground</p>
                  </CardContent>
                </Card>
              </div>

              <div className='space-y-4'>
                <Card className='bg-accent text-accent-foreground'>
                  <CardContent className='p-2 text-center py-4'>
                    <p className='text-xs'>Accent background and foreground</p>
                  </CardContent>
                </Card>
              </div>

              <div className='space-y-4'>
                <Button
                  className='w-full'
                  size='xs'>
                  Primary
                </Button>
                <Button
                  className='w-full'
                  variant='secondary'
                  size='xs'>
                  Secondary
                </Button>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant='outline'
                      size='xs'
                      className='w-full'>
                      Open a Popover
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className='flex flex-col items-center'>
                    <p>Popover content</p>
                    <Smile className='w-10 h-10 mt-4' />
                  </PopoverContent>
                </Popover>
              </div>

              <div className='space-y-4'>
                <Button
                  className='w-full'
                  variant='destructive'
                  size='xs'>
                  Destructive
                </Button>
                <Button
                  className='w-full'
                  variant='outline'
                  size='xs'>
                  Outline
                </Button>
                <Button
                  className='w-full'
                  variant='ghost'
                  size='xs'>
                  Ghost
                </Button>
              </div>

              <div className='space-y-4'>
                <Input
                  placeholder='This is an input field. Click to see the focus ring.'
                  className='h-8 text-xs'
                />
              </div>

              <div className='space-y-4'>
                <div className='flex justify-center items-center space-x-2'>
                  <Switch
                    defaultChecked
                    id='example-switch'
                  />
                  <Label htmlFor='example-switch'>Toggle Switch</Label>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className='space-y-4'>
              <Card>
                <CardContent className='p-4'>
                  <Overview />
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className='text-sm text-muted-foreground text-center'>
              shadesigner.com is the best place to find the perfect theme for your next project.
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
