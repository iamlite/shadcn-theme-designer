import { Color } from 'color-core'
import { radiusOptions } from './vars'

const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max)

const generatePrimaryColor = (): Color => {
  let primary: Color
  do {
    const h = Math.floor(Math.random() * 360)
    const s = clamp(40 + Math.floor(Math.random() * 60), 0, 100)
    const l = clamp(30 + Math.floor(Math.random() * 50), 30, 80)
    primary = new Color(`hsl(${h}, ${s}%, ${l}%)`)
  } while (!primary.isLight(0.3) && !primary.isLight(0.7))
  return primary
}

const generateForegroundColor = (background: Color): Color => {
  const isLightBackground = background.isLight()
  let foreground = isLightBackground ? new Color('hsl(0, 0%, 5%)') : new Color('hsl(0, 0%, 95%)')

  const targetContrast = 7
  const minimumContrast = 4.5

  let { contrastRatio } = background.getWCAGCompliance(foreground, 'Normal')
  let attempts = 0

  while (contrastRatio < targetContrast && attempts < 20) {
    const adjustment = isLightBackground ? -5 - Math.floor(Math.random() * 5) : 5 + Math.floor(Math.random() * 5)
    foreground = foreground.adjustLightness(adjustment)
    contrastRatio = background.getWCAGCompliance(foreground, 'Normal').contrastRatio
    attempts++
  }

  if (contrastRatio < minimumContrast) {
    foreground = isLightBackground ? new Color('hsl(0, 0%, 0%)') : new Color('hsl(0, 0%, 100%)')
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
  return primary.adjustLightness(Math.floor(Math.random() * 21) - 20).adjustHue(Math.floor(Math.random() * 31) - 15)
}

const generateBackground = (isLight: boolean): [Color] => {
  const bgLightness = isLight
    ? clamp(95 + Math.floor(Math.random() * 10) - 5, 90, 100)
    : clamp(5 + Math.floor(Math.random() * 10) - 5, 0, 10)
  return [new Color(`hsl(0, 0%, ${bgLightness}%)`)]
}

const generateCardColor = (background: Color, isLight: boolean): Color => {
  const adjustment = isLight ? -1 * (3 + Math.random() * 7) : 3 + Math.random() * 7
  return background.adjustLightness(adjustment)
}

const generateMutedColor = (background: Color, isLight: boolean): Color => {
  const adjustment = isLight ? -Math.floor(Math.random() * 16) - 15 : Math.floor(Math.random() * 16) + 15
  return background.adjustLightness(adjustment).adjustSaturation(-20)
}

const generateMutedForeground = (background: Color, isLight: boolean): Color => {
  const baseForeground = generateForegroundColor(background)
  const mutedAdjustment = isLight ? 25 : -25
  return baseForeground.adjustLightness(mutedAdjustment).adjustSaturation(-30)
}

const generateDestructiveColor = (): Color => {
  const baseRed = new Color('hsl(0, 100%, 50%)')
  return baseRed.adjustSaturation(Math.floor(Math.random() * 21) - 10).adjustHue(Math.floor(Math.random() * 31) - 15)
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

const tintColor = (color: Color, tintColor: Color, amount: number): Color => {
  return color.mix(tintColor, amount)
}

const generateColorShades = (color: Color): [Color, Color] => {
  const lightShade = color.adjustLightness(clamp(Math.floor(Math.random() * 15), 5, 15))
  const darkShade = color.adjustLightness(clamp(Math.floor(Math.random() * -15), -15, -5))
  return [lightShade, darkShade]
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

  let lightBg = generateBackground(true)[0]
  let darkBg = generateBackground(false)[0]
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
  const lightFg = generateForegroundColor(lightBg)
  const darkFg = generateForegroundColor(darkBg)
  const lightMutedForeground = generateMutedForeground(lightBg, true)
  const darkMutedForeground = generateMutedForeground(darkBg, false)

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
      'muted-foreground': lightMutedForeground,
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
      'muted-foreground': darkMutedForeground,
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
