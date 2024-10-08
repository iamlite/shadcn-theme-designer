import { useThemeToggle } from '@/hooks/toggle-theme'
import { Moon, Sun } from 'lucide-react'
import { Button } from '../ui/button'

export const ThemeToggle = () => {
  const { toggleTheme } = useThemeToggle()

  return (
    <Button
      onClick={toggleTheme}
      variant='outline'
      size='sm'
      className='flex items-center space-x-1'>
      <Sun className='h-3 w-3 dark:hidden' />
      <Moon className='h-3 w-3 hidden dark:block' />
      <span>Theme</span>
    </Button>
  )
}
