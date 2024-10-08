import { useColorContext } from '@/contexts/color-context'
import { updateCssVariables } from '@/lib/color-utils'
import { useTheme } from 'next-themes'

export const useThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const { lightColors, darkColors } = useColorContext()

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    updateCssVariables(newTheme === 'light' ? lightColors : darkColors, newTheme)
  }

  return { theme, toggleTheme }
}
