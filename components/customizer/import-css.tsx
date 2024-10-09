import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Textarea } from '@/components/ui/textarea'
import { CirclePlus } from 'lucide-react'
import { useState } from 'react'

interface CssInputDialogProps {
  parseCssInput: (input: string) => void
}

export function CssInputDialog({ parseCssInput }: CssInputDialogProps) {
  const [cssInput, setCssInput] = useState('')
  const [open, setOpen] = useState(false)

  const handleCssInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCssInput(e.target.value)
  }

  const handleCssInputSubmit = () => {
    parseCssInput(cssInput)
    setOpen(false)
  }

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size='sm'
          variant='outline'>
          <CirclePlus className='mr-1 h-3 w-3' />
          Import CSS
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-4xl max-h-[70dvh]'>
        <DialogHeader>
          <DialogTitle>Import CSS</DialogTitle>
        </DialogHeader>

        <Textarea
          placeholder='Paste your CSS here...'
          value={cssInput}
          onChange={handleCssInputChange}
          className='h-96 overflow-y-auto mb-2'
        />
        <DialogFooter>
          <Button
            variant='outline'
            onClick={handleCssInputSubmit}>
            Import
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
