import { useColorContext } from '@/contexts/color-context'
import { RotateCcw } from 'lucide-react'
import { Button } from '../ui/button'

export const ResetButton = () => {
  const { resetColors } = useColorContext()

  return (
    <Button
      onClick={resetColors}
      variant='outline'
      size='sm'
      className='flex items-center space-x-1'>
      <RotateCcw className='h-3 w-3' />
      <span>Reset</span>
    </Button>
  )
}
