import { useThemeToggle } from '@/hooks/toggle-theme'
import { Moon, Sun } from 'lucide-react'
import { Button } from '../ui/button'

export const ThemeToggle = () => {
  const { toggleTheme, theme } = useThemeToggle()

  return (
    <Button
      onClick={toggleTheme}
      variant='outline'
      size='icon'
      className='flex items-center space-x-1'>
      {theme === 'dark' ? <Sun className='h-4 w-4' /> : <Moon className='h-4 w-4' />}
    </Button>
  )
}
