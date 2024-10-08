import { colorVariables } from '@/lib/vars'
import { Color } from 'color-core'

export const updateCssVariable = (variable: string, value: string) => {
  try {
    const root = document.documentElement
    root.style.setProperty(`--${variable}`, value)
  } catch (error) {
    console.error(`Error updating CSS variable ${variable}:`, error)
  }
}

export const hslToString = (hsl: string | { h: number; s: number; l: number }): string => {
  if (typeof hsl === 'string') {
    const [h, s, l] = hsl.split(' ')
    return `hsl(${h}, ${s}, ${l})`
  } else {
    return `hsl(${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(hsl.l)}%)`
  }
}

export const stringToHsl = (colorString: string): string => {
  const color = new Color(colorString)
  const hsl = color.toHsl()
  return `${Math.round(hsl.h)} ${Math.round(hsl.s)}% ${Math.round(hsl.l)}%`
}

export const updateCssVariables = (colors: Record<string, string>, mode: 'light' | 'dark') => {
  try {
    const root = document.documentElement
    Object.entries(colors).forEach(([variable, value]) => {
      try {
        root.style.setProperty(`--${variable}`, value)
      } catch (error) {
        console.error(`Error setting color for ${variable}:`, error)
      }
    })
  } catch (error) {
    console.error(`Error updating CSS variables for ${mode} mode:`, error)
  }
}

export const parseCssInput = (input: string) => {
  const lightColors: Record<string, string> = {}
  const darkColors: Record<string, string> = {}

  try {
    const rootMatch = input.match(/:root\s*{([^}]+)}/)?.[1]
    const darkMatch = input.match(/\.dark\s*{([^}]+)}/)?.[1]

    const parseVars = (str: string, target: Record<string, string>) => {
      const vars = str.match(/--[^:]+:\s*[^;]+/g) || []
      vars.forEach((v) => {
        const [name, value] = v.split(':').map((s) => s.trim())
        const cleanName = name.replace('--', '')
        if (colorVariables.includes(cleanName) || cleanName.startsWith('base-')) {
          target[cleanName] = value
        }
      })
    }

    if (rootMatch) parseVars(rootMatch, lightColors)
    if (darkMatch) parseVars(darkMatch, darkColors)
  } catch (error) {
    console.error('Error parsing CSS input:', error)
  }

  return { lightColors, darkColors }
}

export const invertColor = (color: string): string => {
  try {
    const inverted = new Color(color).invert()
    return stringToHsl(inverted.toString())
  } catch (error) {
    console.error('Error inverting color:', error)
    return color
  }
}

export const hslToHex = (hsl: string): string => {
  const [h, s, l] = hsl.split(' ').map((val, index) => (index === 0 ? parseFloat(val) : parseFloat(val.slice(0, -1))))
  return new Color({ h, s, l }).toHex()
}
