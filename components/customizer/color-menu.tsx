'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useColorContext } from '@/contexts/color-context'
import { hslToHex, stringToHsl } from '@/lib/color-utils'
import { ArrowLeftRight, RotateCcw } from 'lucide-react'
import ColorMenuSkeleton from './color-menu-skeleton'
import { CssInputDialog } from './import-css'
import { CssOutputDialog } from './output'
import RadiusSelector from './radius-selector'
import { ResetButton } from './reset-button'
import { ThemeToggle } from './theme-toggle'

export default function ColorMenu() {
  const {
    lightColors,
    darkColors,
    handleColorChange,
    handleParseCssInput,
    handleInvertColor,
    handleFlipColor,
    isLoaded
  } = useColorContext()

  if (!isLoaded) {
    return <ColorMenuSkeleton />
  }

  return (
    <Card className='p-4'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='py-2'>Variable</TableHead>
            <TableHead className='py-2'>Light Mode</TableHead>
            <TableHead className='py-2'>Dark Mode</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.keys(lightColors).map((variable) => (
            <TableRow key={variable}>
              <TableCell className='py-0.5'>
                <Label className='text-xs'>{variable}</Label>
              </TableCell>
              <TableCell className='py-0.5'>
                <div className='flex items-center space-x-1'>
                  <Button
                    onClick={() => handleInvertColor(variable, 'light')}
                    size='icon'
                    variant='ghost'
                    className='h-6 w-6'>
                    <RotateCcw className='h-3 w-3' />
                  </Button>
                  <Button
                    onClick={() => handleFlipColor(variable, 'light')}
                    size='icon'
                    variant='ghost'
                    className='h-6 w-6'>
                    <ArrowLeftRight className='h-3 w-3' />
                  </Button>
                  <Input
                    type='color'
                    value={hslToHex(lightColors[variable])}
                    onChange={(e) => handleColorChange(variable, stringToHsl(e.target.value), 'light')}
                    className='h-6 w-12 rounded-md p-0'
                    style={{ backgroundColor: `hsl(${lightColors[variable]})` }}
                  />
                </div>
              </TableCell>
              <TableCell className='py-0.5'>
                <div className='flex items-center space-x-1'>
                  <Button
                    onClick={() => handleInvertColor(variable, 'dark')}
                    size='icon'
                    variant='ghost'
                    className='h-6 w-6'>
                    <RotateCcw className='h-3 w-3' />
                  </Button>
                  <Button
                    onClick={() => handleFlipColor(variable, 'dark')}
                    size='icon'
                    variant='ghost'
                    className='h-6 w-6'>
                    <ArrowLeftRight className='h-3 w-3' />
                  </Button>
                  <Input
                    type='color'
                    value={hslToHex(darkColors[variable])}
                    onChange={(e) => handleColorChange(variable, stringToHsl(e.target.value), 'dark')}
                    className='h-6 w-12 rounded-md p-0'
                    style={{ backgroundColor: `hsl(${darkColors[variable]})` }}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <RadiusSelector />
      <div className='flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 sm:space-x-2 border-t mt-4 pt-4'>
        <div className='flex space-x-2'>
          <CssInputDialog parseCssInput={handleParseCssInput} />
          <CssOutputDialog />
        </div>
        <div className='flex space-x-2'>
          <ResetButton />
          <ThemeToggle />
        </div>
      </div>
    </Card>
  )
}