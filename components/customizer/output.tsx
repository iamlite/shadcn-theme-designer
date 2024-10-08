import { useColorContext } from '@/contexts/color-context'
import { themePresets } from '@/lib/presets'
import { colorVariables } from '@/lib/vars'
import { useState } from 'react'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'

export function CssOutputDialog() {
  const [copied, setCopied] = useState(false)
  const { lightColors, darkColors, radius } = useColorContext()

  const generateCssOutput = () => {
    const lightVars = colorVariables
      .map((v) => {
        const color = lightColors[v] || themePresets[0].lightColors[v]
        return `    --${v}: ${color};`
      })
      .join('\n')
    const darkVars = colorVariables
      .map((v) => {
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

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>Show CSS Output</Button>
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
        <Button onClick={copyToClipboard}>{copied ? 'Copied!' : 'Copy to Clipboard'}</Button>
      </DialogContent>
    </Dialog>
  )
}
