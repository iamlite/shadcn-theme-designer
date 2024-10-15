import { useColorContext } from '@/contexts/color-context'
import { themePresets } from '@/lib/presets'
import { colorVariables } from '@/lib/vars'
import { Download } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'

export function CssOutputDialog() {
  const [copied, setCopied] = useState(false)
  const { lightColors, darkColors, radius } = useColorContext()

  const generateCssOutput = () => {
    const lightVars = colorVariables
      .map((v, index) => {
        const color = lightColors[v] || themePresets[0].lightColors[v]
        return `    --${v}: ${color};`
      })
      .join('\n')
    const darkVars = colorVariables
      .map((v, index) => {
        const color = darkColors[v] || themePresets[0].darkColors[v]
        return `    --${v}: ${color};`
      })
      .join('\n')

    return `@layer base {
  :root {
${lightVars}
    --radius: ${radius}rem;
  }

  .dark {
${darkVars}
  }
}`
  }

  const cssOutput = generateCssOutput()

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cssOutput).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  // const generatePresetOutput = (): ThemePreset => {
  //   return {
  //     name: 'Custom Theme',
  //     lightColors: Object.fromEntries(colorVariables.map((v) => [v, lightColors[v] || themePresets[0].lightColors[v]])),
  //     darkColors: Object.fromEntries(colorVariables.map((v) => [v, darkColors[v] || themePresets[0].darkColors[v]])),
  //     radius: radius
  //   }
  // }

  // const copyPresetToClipboard = () => {
  //   const preset = generatePresetOutput()
  //   const presetString = JSON.stringify(preset, null, 2)
  //   navigator.clipboard.writeText(presetString).then(() => {
  //     setCopied(true)
  //     setTimeout(() => setCopied(false), 2000)
  //   })
  // }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size='sm'
          variant='outline'>
          <Download className='mr-1 h-3 w-3' />
          Export CSS
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-4xl'>
        <DialogHeader>
          <DialogTitle>CSS Output</DialogTitle>
        </DialogHeader>
        <div className='mt-4 max-h-[70dvh]'>
          <pre className='bg-muted p-4 rounded-md overflow-auto h-full'>
            <code>{cssOutput}</code>
          </pre>
        </div>
        <div className='flex space-x-2'>
          <Button
            className='w-full'
            onClick={copyToClipboard}>
            {copied ? 'Copied!' : 'Copy CSS to Clipboard'}
          </Button>
          {/* <Button onClick={copyPresetToClipboard}>Copy Preset to Clipboard</Button> */}
        </div>
      </DialogContent>
    </Dialog>
  )
}
