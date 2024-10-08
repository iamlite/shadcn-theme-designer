import { Color } from 'color-core'
import { radiusOptions } from './vars'

const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max)

const generatePrimaryColor = (): Color => {
  let primary: Color
  do {
    const h = Math.floor(Math.random() * 360)
    const s = clamp(60 + Math.floor(Math.random() * 30), 0, 100)
    const l = clamp(25 + Math.floor(Math.random() * 50), 25, 75)
    primary = new Color(`hsl(${h}, ${s}%, ${l}%)`)
  } while (!primary.isLight(0.3) && !primary.isLight(0.7))
  return primary
}

const generateColorShades = (color: Color): [Color, Color] => {
  const lightShade = color.adjustLightness(clamp(Math.floor(Math.random() * 15), 5, 15))
  const darkShade = color.adjustLightness(clamp(Math.floor(Math.random() * -15), -15, -5))
  return [lightShade, darkShade]
}

const generateForegroundColor = (background: Color): Color => {
  const isLightBackground = background.isLight()
  let foreground = isLightBackground ? new Color('hsl(0, 0%, 0%)') : new Color('hsl(0, 0%, 100%)')

  const { contrastRatio } = background.getWCAGCompliance(foreground, 'Normal')

  if (contrastRatio < 4.5) {
    const adjustment = isLightBackground ? -10 : 10
    foreground = foreground.adjustLightness(adjustment)
  }

  return foreground
}

const generateSecondaryColor = (primary: Color): Color => {
  const analogousColors = primary.analogous()
  return analogousColors[2]
}

const generateAccentColor = (primary: Color): Color => {
  const doubleSplitComplementary = primary.doubleSplitComplementary()
  return doubleSplitComplementary[3]
}

const generateRingColor = (primary: Color): Color => {
  return primary.adjustLightness(Math.floor(Math.random() * 21) - 20)
}

const generateBackgroundForeground = (isLight: boolean): [Color, Color] => {
  const bgLightness = isLight
    ? clamp(95 + Math.floor(Math.random() * 10) - 5, 90, 100)
    : clamp(5 + Math.floor(Math.random() * 10) - 5, 0, 10)
  const fgLightness = isLight
    ? clamp(Math.floor(Math.random() * 4), 0, 3)
    : clamp(97 + Math.floor(Math.random() * 4), 97, 100)
  return [new Color(`hsl(0, 0%, ${bgLightness}%)`), new Color(`hsl(0, 0%, ${fgLightness}%)`)]
}

const generateCardColor = (background: Color, isLight: boolean): Color => {
  const adjustment = isLight ? -1 * (3 + Math.random() * 7) : 3 + Math.random() * 7
  return background.adjustLightness(adjustment)
}

const generateMutedColor = (background: Color, isLight: boolean): Color => {
  const adjustment = isLight ? -10 : 10
  return background.adjustLightness(adjustment)
}

const generateDestructiveColor = (): Color => {
  const baseRed = new Color('hsl(0, 100%, 50%)')
  return baseRed.adjustSaturation(Math.floor(Math.random() * 21) - 10)
}

const generateBorderColor = (background: Color): Color => {
  return background.adjustLightness(
    background.getBrightness() > 50 ? -10 - Math.random() * 20 : 10 + Math.random() * 20
  )
}

const generateInputColor = (borderColor: Color): Color => {
  const adjustment = Math.random() * 20 - 10
  return borderColor.adjustLightness(adjustment)
}

const generateChartColors = (primary: Color): Color[] => {
  const [base, doubleSplit1, doubleSplit2, doubleSplit3, doubleSplit4] = primary.doubleSplitComplementary()
  return [base, doubleSplit1, doubleSplit2, doubleSplit3, doubleSplit4]
}

const boostSaturation = (color: Color, amount: number): Color => {
  return color.adjustSaturation(amount)
}

const tintColor = (color: Color, tintColor: Color, amount: number): Color => {
  return color.mix(tintColor, amount)
}

export function generateColorPalette(
  customPrimary?: string,
  boostSaturation: boolean = false
): {
  lightColors: Record<string, Color>
  darkColors: Record<string, Color>
  radius: number
} {
  const primary = customPrimary ? new Color(customPrimary) : generatePrimaryColor()
  const [lightPrimary, darkPrimary] = generateColorShades(primary)
  const secondary = generateSecondaryColor(primary)
  const [lightSecondary, darkSecondary] = generateColorShades(secondary)
  const accent = generateAccentColor(primary)
  const [lightAccent, darkAccent] = generateColorShades(accent)
  const destructive = generateDestructiveColor()
  const [lightDestructive, darkDestructive] = generateColorShades(destructive)
  const ring = generateRingColor(primary)
  const lightPrimaryForeground = generateForegroundColor(lightPrimary)
  const darkPrimaryForeground = generateForegroundColor(darkPrimary)
  const lightSecondaryForeground = generateForegroundColor(lightSecondary)
  const darkSecondaryForeground = generateForegroundColor(darkSecondary)
  const lightAccentForeground = generateForegroundColor(lightAccent)
  const darkAccentForeground = generateForegroundColor(darkAccent)
  const lightDestructiveForeground = generateForegroundColor(lightDestructive)
  const darkDestructiveForeground = generateForegroundColor(darkDestructive)
  const [lightFg, darkFg] = generateBackgroundForeground(false)
  let lightBg = generateBackgroundForeground(true)[0]
  let darkBg = generateBackgroundForeground(false)[0]
  let lightCard = generateCardColor(lightBg, true)
  let darkCard = generateCardColor(darkBg, false)
  let lightMuted = generateMutedColor(lightBg, true)
  let darkMuted = generateMutedColor(darkBg, false)
  let lightBorder = generateBorderColor(lightBg)
  let darkBorder = generateBorderColor(darkBg)
  const lightInput = generateInputColor(lightBorder)
  const darkInput = generateInputColor(darkBorder)
  const chartColors = generateChartColors(primary)
  const randomRadiusOptions = radiusOptions.slice(1, -1)
  const randomRadius = randomRadiusOptions[Math.floor(Math.random() * randomRadiusOptions.length)]

  if (boostSaturation) {
    lightBg = tintColor(lightBg, primary, 0.1)
    darkBg = tintColor(darkBg, primary, 0.1)
    lightBorder = tintColor(lightBorder, primary, 0.2)
    darkBorder = tintColor(darkBorder, primary, 0.2)
    lightCard = tintColor(lightCard, primary, 0.05)
    darkCard = tintColor(darkCard, primary, 0.05)
    lightMuted = tintColor(lightMuted, primary, 0.15)
    darkMuted = tintColor(darkMuted, primary, 0.15)
  }

  return {
    lightColors: {
      background: lightBg,
      foreground: lightFg,
      card: lightCard,
      'card-foreground': lightFg,
      popover: lightCard,
      'popover-foreground': lightFg,
      primary: lightPrimary,
      'primary-foreground': lightPrimaryForeground,
      secondary: lightSecondary,
      'secondary-foreground': lightSecondaryForeground,
      muted: lightMuted,
      'muted-foreground': lightFg.adjustLightness(-30),
      accent: lightAccent,
      'accent-foreground': lightAccentForeground,
      destructive: lightDestructive,
      'destructive-foreground': lightDestructiveForeground,
      border: lightBorder,
      input: lightInput,
      ring: ring,
      ...chartColors.reduce((acc, color, index) => ({ ...acc, [`chart-${index + 1}`]: color }), {})
    },
    darkColors: {
      background: darkBg,
      foreground: darkFg,
      card: darkCard,
      'card-foreground': darkFg,
      popover: darkCard,
      'popover-foreground': darkFg,
      primary: darkPrimary,
      'primary-foreground': darkPrimaryForeground,
      secondary: darkSecondary,
      'secondary-foreground': darkSecondaryForeground,
      muted: darkMuted,
      'muted-foreground': darkFg.adjustLightness(30),
      accent: darkAccent,
      'accent-foreground': darkAccentForeground,
      destructive: darkDestructive,
      'destructive-foreground': darkDestructiveForeground,
      border: darkBorder,
      input: darkInput,
      ring: ring,
      ...chartColors.reduce((acc, color, index) => ({ ...acc, [`chart-${index + 1}`]: color }), {})
    },
    radius: randomRadius
  }
}
