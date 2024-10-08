import { clsx, type ClassValue } from 'clsx'
import { Color } from 'color-core'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const convertHexToHslString = (hex: string): string => {
  const color = new Color(hex)
  const { h, s, l } = color.toHsl()
  return `${Math.round(h)} ${Math.round(s)}% ${Math.round(l)}%`
}
