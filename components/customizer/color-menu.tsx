'use client'

import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useColorContext } from '@/contexts/color-context'
import { hslToHex, stringToHsl } from '@/lib/color-utils'
import ColorMenuSkeleton from './color-menu-skeleton'
import { CssInputDialog } from './import-css'
import { CssOutputDialog } from './output'
import RadiusSelector from './radius-selector'
import { ResetButton } from './reset-button'
import { ThemeToggle } from './theme-toggle'

export default function ColorMenu({ isInterfaceVisible }: { isInterfaceVisible: boolean }) {
  const { lightColors, darkColors, handleColorChange, handleParseCssInput, isLoaded } = useColorContext()

  if (!isLoaded) {
    return <ColorMenuSkeleton />
  }

  return (
    <Card className={`pr-4 pl-8 pb-4 rounded-l-none border-l-0 ${isInterfaceVisible ? '' : ''}`}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Variable</TableHead>
            <TableHead>Light Mode</TableHead>
            <TableHead>Dark Mode</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.keys(lightColors).map((variable) => (
            <TableRow key={variable}>
              <TableCell className='py-0.5'>
                <Label className='text-xs'>{variable}</Label>
              </TableCell>
              <TableCell className='py-0.5'>
                <ColorInput
                  color={lightColors[variable]}
                  onChange={(value) => handleColorChange(variable, value, 'light')}
                />
              </TableCell>
              <TableCell className='py-0.5'>
                <ColorInput
                  color={darkColors[variable]}
                  onChange={(value) => handleColorChange(variable, value, 'dark')}
                />
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

export function ColorInput({ color, onChange }: { color: string; onChange: (value: string) => void }) {
  return (
    <div className='flex items-center space-x-1'>
      <Input
        type='color'
        value={hslToHex(color)}
        onChange={(e) => onChange(stringToHsl(e.target.value))}
        className='h-5 w-16 rounded p-0 transition-none'
        style={{ backgroundColor: `hsl(${color})` }}
      />
    </div>
  )
}
