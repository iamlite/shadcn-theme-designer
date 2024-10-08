import { invertColor, parseCssInput, updateCssVariable, updateCssVariables } from '@/lib/color-utils'
import { generateColorPalette } from '@/lib/palette-generator'
import { ThemePreset, themePresets } from '@/lib/presets'
import { Color } from 'color-core'
import { useTheme } from 'next-themes'
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'

type ColorContextType = {
  lightColors: Record<string, string>
  darkColors: Record<string, string>
  theme: string | undefined
  setTheme: (theme: string) => void
  handleColorChange: (variable: string, hslValue: string, mode: 'light' | 'dark') => void
  resetColors: () => void
  handleParseCssInput: (input: string) => void
  handleInvertColor: (variable: string, mode: 'light' | 'dark') => void
  handleFlipColor: (variable: string, from: 'light' | 'dark') => void
  applyPreset: (preset: ThemePreset) => void
  generateRandomPalette: () => void
  presets: ThemePreset[]
  radius: number
  setRadius: (radius: number) => void
  isLoaded: boolean
  toggleSaturationBoost: () => void
  isSaturationBoosted: boolean
  setPrimaryColor: (color: string) => void
  clearPrimaryColor: () => void
  customPrimaryColor: string | null
}

const ColorContext = createContext<ColorContextType | undefined>(undefined)

export const ColorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isSaturationBoosted, setIsSaturationBoosted] = useState(false)
  const [customPrimaryColor, setCustomPrimaryColor] = useState<string | null>(null)

  const [lightColors, setLightColors] = useState<Record<string, string>>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('lightColors')
      return saved ? JSON.parse(saved) : themePresets[0].lightColors
    }
    return themePresets[0].lightColors
  })

  const [darkColors, setDarkColors] = useState<Record<string, string>>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkColors')
      return saved ? JSON.parse(saved) : themePresets[0].darkColors
    }
    return themePresets[0].darkColors
  })

  const [radius, setRadius] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('radius')
      return saved ? parseFloat(saved) : 0.5
    }
    return 0.5
  })

  const { theme, setTheme } = useTheme()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLightColors = localStorage.getItem('lightColors')
      const savedDarkColors = localStorage.getItem('darkColors')
      const savedRadius = localStorage.getItem('radius')
      const savedSaturationBoost = localStorage.getItem('saturationBoost')
      const savedPrimaryColor = localStorage.getItem('primaryColor')

      setLightColors(savedLightColors ? JSON.parse(savedLightColors) : themePresets[0].lightColors)
      setDarkColors(savedDarkColors ? JSON.parse(savedDarkColors) : themePresets[0].darkColors)
      setRadius(savedRadius ? parseFloat(savedRadius) : 0.5)
      setIsSaturationBoosted(savedSaturationBoost === 'true')
      setCustomPrimaryColor(savedPrimaryColor || null)
      setIsLoaded(true)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('lightColors', JSON.stringify(lightColors))
      localStorage.setItem('darkColors', JSON.stringify(darkColors))
      localStorage.setItem('radius', radius.toString())
      localStorage.setItem('saturationBoost', isSaturationBoosted.toString())
      if (customPrimaryColor) {
        localStorage.setItem('primaryColor', customPrimaryColor)
      } else {
        localStorage.removeItem('primaryColor')
      }
    }

    const colors = theme === 'light' ? lightColors : darkColors
    updateCssVariables(colors, theme as 'light' | 'dark')
    document.documentElement.style.setProperty('--radius', `${radius}rem`)
  }, [theme, lightColors, darkColors, radius, isSaturationBoosted, customPrimaryColor])

  const updateColorAndCssVariable = (variable: string, hslValue: string, mode: 'light' | 'dark') => {
    const setColors = mode === 'light' ? setLightColors : setDarkColors
    setColors((prev) => ({ ...prev, [variable]: hslValue }))

    if (theme === mode) {
      updateCssVariable(variable, hslValue)
    }
  }

  const handleColorChange = (variable: string, hslValue: string, mode: 'light' | 'dark') => {
    try {
      updateColorAndCssVariable(variable, hslValue, mode)
    } catch (error) {
      console.error(`Error handling color change for ${variable}:`, error)
    }
  }

  const resetColors = () => {
    setLightColors(themePresets[0].lightColors)
    setDarkColors(themePresets[0].darkColors)
    if (typeof window !== 'undefined') {
      localStorage.setItem('lightColors', JSON.stringify(themePresets[0].lightColors))
      localStorage.setItem('darkColors', JSON.stringify(themePresets[0].darkColors))
      localStorage.setItem('radius', radius.toString())
    }
    updateCssVariables(themePresets[0].lightColors, 'light')
    updateCssVariables(themePresets[0].darkColors, 'dark')
  }

  const handleParseCssInput = (input: string) => {
    const { lightColors: newLightColors, darkColors: newDarkColors } = parseCssInput(input)
    setLightColors((prev) => ({ ...prev, ...newLightColors }))
    setDarkColors((prev) => ({ ...prev, ...newDarkColors }))
    updateCssVariables(newLightColors, 'light')
    updateCssVariables(newDarkColors, 'dark')
  }

  const handleInvertColor = (variable: string, mode: 'light' | 'dark') => {
    const colors = mode === 'light' ? lightColors : darkColors
    const invertedColor = invertColor(colors[variable])
    updateColorAndCssVariable(variable, invertedColor, mode)
  }

  const handleFlipColor = (variable: string, from: 'light' | 'dark') => {
    const source = from === 'light' ? lightColors : darkColors
    const target = from === 'light' ? 'dark' : 'light'
    const setColors = target === 'light' ? setLightColors : setDarkColors
    setColors((prev) => ({ ...prev, [variable]: source[variable] }))

    if (theme === target) {
      updateCssVariable(variable, source[variable])
    }
  }

  const applyPreset = (preset: ThemePreset) => {
    setLightColors(preset.lightColors)
    setDarkColors(preset.darkColors)
    setRadius(preset.radius)
    updateCssVariables(preset.lightColors, 'light')
    updateCssVariables(preset.darkColors, 'dark')
  }

  const handleGenerateRandomPalette = () => {
    try {
      const {
        lightColors: newLightColorObjects,
        darkColors: newDarkColorObjects,
        radius: newRadius
      } = generateColorPalette(customPrimaryColor || undefined, isSaturationBoosted)

      const convertColorsToHsl = (colorObjects: Record<string, Color>): Record<string, string> => {
        return Object.fromEntries(
          Object.entries(colorObjects).map(([key, colorObject]) => {
            const hsl = colorObject.toHsl()
            return [key, `${Math.round(hsl.h)} ${Math.round(hsl.s)}% ${Math.round(hsl.l)}%`]
          })
        )
      }

      const newLightColors = convertColorsToHsl(newLightColorObjects)
      const newDarkColors = convertColorsToHsl(newDarkColorObjects)

      setLightColors(newLightColors)
      setDarkColors(newDarkColors)
      setRadius(newRadius)
      updateCssVariables(newLightColors, 'light')
      updateCssVariables(newDarkColors, 'dark')
    } catch (error) {
      console.error('Error generating random theme:', error)
    }
  }

  const handleRadiusChange = (newRadius: number) => {
    setRadius(newRadius)
  }

  const toggleSaturationBoost = () => {
    setIsSaturationBoosted((prev) => !prev)
  }

  const setPrimaryColor = (color: string) => {
    setCustomPrimaryColor(color)
  }

  const clearPrimaryColor = () => {
    setCustomPrimaryColor(null)
  }

  const value = {
    lightColors,
    darkColors,
    theme,
    setTheme,
    handleColorChange,
    resetColors,
    handleParseCssInput,
    handleInvertColor,
    handleFlipColor,
    applyPreset,
    generateRandomPalette: handleGenerateRandomPalette,
    presets: themePresets,
    radius,
    setRadius: handleRadiusChange,
    isLoaded,
    toggleSaturationBoost,
    isSaturationBoosted,
    setPrimaryColor,
    clearPrimaryColor,
    customPrimaryColor
  }

  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
}

export const useColorContext = () => {
  const context = useContext(ColorContext)
  if (context === undefined) {
    throw new Error('useColorContext must be used within a ColorProvider')
  }
  return context
}
