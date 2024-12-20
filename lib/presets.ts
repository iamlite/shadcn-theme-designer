export interface ThemePreset {
  name: string
  boost?: boolean
  lightColors: Record<string, string>
  darkColors: Record<string, string>
  radius: number
}

export const themePresets: ThemePreset[] = [
  {
    name: 'Default',
    boost: false,
    lightColors: {
      background: '0 0% 96%',
      foreground: '0 0% 0%',
      card: '0 0% 89%',
      'card-foreground': '0 0% 0%',
      popover: '0 0% 89%',
      'popover-foreground': '0 0% 0%',
      primary: '180 66% 50%',
      'primary-foreground': '0 0% 0%',
      secondary: '210 66% 50%',
      'secondary-foreground': '0 0% 0%',
      muted: '0 0% 86%',
      'muted-foreground': '0 0% 0%',
      accent: '150 66% 50%',
      'accent-foreground': '0 0% 0%',
      destructive: '0 100% 50%',
      'destructive-foreground': '0 0% 0%',
      border: '0 0% 67%',
      input: '0 0% 59%',
      ring: '180 66% 33%',
      'chart-1': '180 66% 50%',
      'chart-2': '330 66% 50%',
      'chart-3': '30 66% 50%',
      'chart-4': '150 66% 50%',
      'chart-5': '210 66% 50%'
    },
    darkColors: {
      background: '0 0% 2%',
      foreground: '0 0% 100%',
      card: '0 0% 7%',
      'card-foreground': '0 0% 100%',
      popover: '0 0% 7%',
      'popover-foreground': '0 0% 100%',
      primary: '180 66% 50%',
      'primary-foreground': '0 0% 100%',
      secondary: '210 66% 50%',
      'secondary-foreground': '0 0% 100%',
      muted: '0 0% 12%',
      'muted-foreground': '0 0% 100%',
      accent: '150 66% 50%',
      'accent-foreground': '0 0% 100%',
      destructive: '0 100% 50%',
      'destructive-foreground': '0 0% 100%',
      border: '0 0% 28%',
      input: '0 0% 30%',
      ring: '180 66% 33%',
      'chart-1': '180 66% 50%',
      'chart-2': '330 66% 50%',
      'chart-3': '30 66% 50%',
      'chart-4': '150 66% 50%',
      'chart-5': '210 66% 50%'
    },
    radius: 0.75
  },
  {
    name: 'Sunset',
    boost: true,
    lightColors: {
      background: '40 100% 97%',
      foreground: '20 80% 20%',
      card: '35 100% 98%',
      'card-foreground': '20 80% 20%',
      popover: '35 100% 98%',
      'popover-foreground': '20 80% 20%',
      primary: '20 100% 50%',
      'primary-foreground': '40 100% 97%',
      secondary: '40 60% 90%',
      'secondary-foreground': '20 80% 20%',
      muted: '40 60% 95%',
      'muted-foreground': '20 60% 40%',
      accent: '350 100% 60%',
      'accent-foreground': '40 100% 97%',
      destructive: '0 100% 50%',
      'destructive-foreground': '40 100% 97%',
      border: '35 80% 80%',
      input: '35 80% 80%',
      ring: '20 100% 50%',
      'chart-1': '20 100% 50%',
      'chart-2': '40 100% 50%',
      'chart-3': '60 100% 50%',
      'chart-4': '350 100% 60%',
      'chart-5': '320 100% 60%'
    },
    darkColors: {
      background: '20 80% 15%',
      foreground: '40 100% 90%',
      card: '25 70% 20%',
      'card-foreground': '40 100% 90%',
      popover: '25 70% 20%',
      'popover-foreground': '40 100% 90%',
      primary: '40 100% 60%',
      'primary-foreground': '20 80% 15%',
      secondary: '30 60% 30%',
      'secondary-foreground': '40 100% 90%',
      muted: '30 40% 25%',
      'muted-foreground': '40 80% 70%',
      accent: '350 100% 70%',
      'accent-foreground': '20 80% 15%',
      destructive: '0 100% 60%',
      'destructive-foreground': '20 80% 15%',
      border: '30 60% 40%',
      input: '30 60% 40%',
      ring: '40 100% 60%',
      'chart-1': '40 100% 60%',
      'chart-2': '60 100% 60%',
      'chart-3': '80 100% 60%',
      'chart-4': '350 100% 70%',
      'chart-5': '320 100% 70%'
    },
    radius: 0.5
  },
  {
    name: 'Ocean',
    boost: true,
    lightColors: {
      background: '195 53% 90%',
      foreground: '210 20% 20%',
      card: '200 60% 95%',
      'card-foreground': '210 20% 20%',
      popover: '200 60% 95%',
      'popover-foreground': '210 20% 20%',
      primary: '200 100% 40%',
      'primary-foreground': '195 53% 90%',
      secondary: '190 40% 85%',
      'secondary-foreground': '210 20% 20%',
      muted: '190 40% 90%',
      'muted-foreground': '210 20% 40%',
      accent: '170 100% 40%',
      'accent-foreground': '195 53% 90%',
      destructive: '0 100% 50%',
      'destructive-foreground': '195 53% 90%',
      border: '200 50% 80%',
      input: '200 50% 80%',
      ring: '200 100% 40%',
      'chart-1': '200 100% 40%',
      'chart-2': '170 100% 40%',
      'chart-3': '220 100% 50%',
      'chart-4': '250 100% 50%',
      'chart-5': '280 100% 50%'
    },
    darkColors: {
      background: '195 53% 10%',
      foreground: '210 20% 80%',
      card: '200 60% 15%',
      'card-foreground': '210 20% 80%',
      popover: '200 60% 15%',
      'popover-foreground': '210 20% 80%',
      primary: '200 100% 60%',
      'primary-foreground': '195 53% 10%',
      secondary: '190 40% 25%',
      'secondary-foreground': '210 20% 80%',
      muted: '190 40% 20%',
      'muted-foreground': '210 20% 60%',
      accent: '170 100% 60%',
      'accent-foreground': '195 53% 10%',
      destructive: '0 100% 60%',
      'destructive-foreground': '195 53% 10%',
      border: '200 50% 30%',
      input: '200 50% 30%',
      ring: '200 100% 60%',
      'chart-1': '200 100% 60%',
      'chart-2': '170 100% 60%',
      'chart-3': '220 100% 70%',
      'chart-4': '250 100% 70%',
      'chart-5': '280 100% 70%'
    },
    radius: 0.5
  },
  {
    name: 'Neon',
    boost: false,
    lightColors: {
      background: '0 0% 98%',
      foreground: '0 0% 20%',
      card: '0 0% 100%',
      'card-foreground': '0 0% 20%',
      popover: '0 0% 100%',
      'popover-foreground': '0 0% 20%',
      primary: '250 100% 50%',
      'primary-foreground': '0 0% 100%',
      secondary: '0 0% 90%',
      'secondary-foreground': '0 0% 30%',
      muted: '0 0% 95%',
      'muted-foreground': '0 0% 20%',
      accent: '130 100% 50%',
      'accent-foreground': '0 0% 100%',
      destructive: '0 100% 50%',
      'destructive-foreground': '0 0% 100%',
      border: '0 0% 90%',
      input: '0 0% 100%',
      ring: '250 100% 60%',
      'chart-1': '250 100% 50%',
      'chart-2': '130 100% 50%',
      'chart-3': '240 100% 60%',
      'chart-4': '340 100% 60%',
      'chart-5': '60 100% 50%'
    },
    darkColors: {
      background: '0 0% 15%',
      foreground: '0 0% 90%',
      card: '0 0% 20%',
      'card-foreground': '0 0% 90%',
      popover: '0 0% 20%',
      'popover-foreground': '0 0% 90%',
      primary: '250 100% 70%',
      'primary-foreground': '0 0% 20%',
      secondary: '0 0% 30%',
      'secondary-foreground': '0 0% 90%',
      muted: '0 0% 25%',
      'muted-foreground': '0 0% 90%',
      accent: '130 100% 60%',
      'accent-foreground': '0 0% 20%',
      destructive: '0 100% 50%',
      'destructive-foreground': '0 0% 100%',
      border: '0 0% 40%',
      input: '0 0% 20%',
      ring: '250 100% 50%',
      'chart-1': '250 100% 70%',
      'chart-2': '130 100% 60%',
      'chart-3': '240 100% 70%',
      'chart-4': '340 100% 70%',
      'chart-5': '60 100% 60%'
    },
    radius: 0.5
  },
  {
    name: 'AquaCoast',
    boost: false,
    lightColors: {
      background: '0 0% 94%',
      foreground: '0 0% 5%',
      card: '0 0% 88%',
      'card-foreground': '0 0% 5%',
      popover: '0 0% 88%',
      'popover-foreground': '0 0% 5%',
      primary: '177 84% 41%',
      'primary-foreground': '0 0% 5%',
      secondary: '207 84% 39%',
      'secondary-foreground': '0 0% 100%',
      muted: '0 0% 68%',
      'muted-foreground': '0 0% 30%',
      accent: '147 84% 37%',
      'accent-foreground': '0 0% 100%',
      destructive: '354 95% 55%',
      'destructive-foreground': '0 0% 100%',
      border: '0 0% 80%',
      input: '0 0% 78%',
      ring: '182 84% 25%',
      'chart-1': '177 84% 32%',
      'chart-2': '327 84% 32%',
      'chart-3': '27 84% 32%',
      'chart-4': '147 84% 32%',
      'chart-5': '207 84% 32%'
    },
    darkColors: {
      background: '0 0% 6%',
      foreground: '0 0% 95%',
      card: '0 0% 15%',
      'card-foreground': '0 0% 95%',
      popover: '0 0% 15%',
      'popover-foreground': '0 0% 95%',
      primary: '177 84% 17%',
      'primary-foreground': '0 0% 95%',
      secondary: '207 84% 25%',
      'secondary-foreground': '0 0% 95%',
      muted: '0 0% 31%',
      'muted-foreground': '0 0% 70%',
      accent: '147 83% 26%',
      'accent-foreground': '0 0% 100%',
      destructive: '354 95% 38%',
      'destructive-foreground': '0 0% 100%',
      border: '0 0% 28%',
      input: '0 0% 31%',
      ring: '182 84% 25%',
      'chart-1': '177 84% 32%',
      'chart-2': '327 84% 32%',
      'chart-3': '27 84% 32%',
      'chart-4': '147 84% 32%',
      'chart-5': '207 84% 32%'
    },
    radius: 0.5
  },
  {
    name: 'Celestial Dusk',
    boost: false,
    lightColors: {
      background: '0 0% 92%',
      foreground: '0 0% 5%',
      card: '0 0% 85%',
      'card-foreground': '0 0% 5%',
      popover: '0 0% 85%',
      'popover-foreground': '0 0% 5%',
      primary: '219 89% 72%',
      'primary-foreground': '0 0% 5%',
      secondary: '249 89% 72%',
      'secondary-foreground': '0 0% 0%',
      muted: '0 0% 66%',
      'muted-foreground': '0 0% 30%',
      accent: '189 89% 72%',
      'accent-foreground': '0 0% 5%',
      destructive: '1 100% 61%',
      'destructive-foreground': '0 0% 100%',
      border: '0 0% 80%',
      input: '0 0% 73%',
      ring: '216 89% 47%',
      'chart-1': '219 89% 67%',
      'chart-2': '9 89% 67%',
      'chart-3': '69 89% 67%',
      'chart-4': '189 89% 67%',
      'chart-5': '249 89% 67%'
    },
    darkColors: {
      background: '0 0% 9%',
      foreground: '0 0% 95%',
      card: '0 0% 18%',
      'card-foreground': '0 0% 95%',
      popover: '0 0% 18%',
      'popover-foreground': '0 0% 95%',
      primary: '219 89% 61%',
      'primary-foreground': '0 0% 100%',
      secondary: '249 89% 58%',
      'secondary-foreground': '0 0% 100%',
      muted: '0 0% 29%',
      'muted-foreground': '0 0% 70%',
      accent: '189 89% 56%',
      'accent-foreground': '0 0% 5%',
      destructive: '1 100% 41%',
      'destructive-foreground': '0 0% 100%',
      border: '0 0% 36%',
      input: '0 0% 33%',
      ring: '216 89% 47%',
      'chart-1': '219 89% 67%',
      'chart-2': '9 89% 67%',
      'chart-3': '69 89% 67%',
      'chart-4': '189 89% 67%',
      'chart-5': '249 89% 67%'
    },
    radius: 1
  },
  {
    name: 'Blushing Coral',
    boost: false,
    lightColors: {
      background: '0 0% 95%',
      foreground: '0 0% 5%',
      card: '0 0% 87%',
      'card-foreground': '0 0% 5%',
      popover: '0 0% 87%',
      'popover-foreground': '0 0% 5%',
      primary: '359 64% 72%',
      'primary-foreground': '0 0% 5%',
      secondary: '29 64% 72%',
      'secondary-foreground': '0 0% 5%',
      muted: '0 0% 79%',
      'muted-foreground': '0 0% 30%',
      accent: '329 64% 72%',
      'accent-foreground': '0 0% 5%',
      destructive: '5 96% 55%',
      'destructive-foreground': '0 0% 100%',
      border: '0 0% 65%',
      input: '0 0% 68%',
      ring: '354 64% 47%',
      'chart-1': '359 64% 67%',
      'chart-2': '149 64% 67%',
      'chart-3': '209 64% 67%',
      'chart-4': '329 64% 67%',
      'chart-5': '29 64% 67%'
    },
    darkColors: {
      background: '0 0% 8%',
      foreground: '0 0% 95%',
      card: '0 0% 18%',
      'card-foreground': '0 0% 95%',
      popover: '0 0% 18%',
      'popover-foreground': '0 0% 95%',
      primary: '359 64% 62%',
      'primary-foreground': '0 0% 0%',
      secondary: '29 64% 56%',
      'secondary-foreground': '0 0% 5%',
      muted: '0 0% 24%',
      'muted-foreground': '0 0% 70%',
      accent: '329 64% 61%',
      'accent-foreground': '0 0% 0%',
      destructive: '5 96% 41%',
      'destructive-foreground': '0 0% 100%',
      border: '0 0% 31%',
      input: '0 0% 27%',
      ring: '354 64% 47%',
      'chart-1': '359 64% 67%',
      'chart-2': '149 64% 67%',
      'chart-3': '209 64% 67%',
      'chart-4': '329 64% 67%',
      'chart-5': '29 64% 67%'
    },
    radius: 0.5
  },
  {
    name: 'Pastel Breeze',
    boost: false,
    lightColors: {
      background: '0 0% 97%',
      foreground: '0 0% 5%',
      card: '0 0% 89%',
      'card-foreground': '0 0% 5%',
      popover: '0 0% 89%',
      'popover-foreground': '0 0% 5%',
      primary: '148 67% 87%',
      'primary-foreground': '0 0% 5%',
      secondary: '177 69% 80%',
      'secondary-foreground': '0 0% 5%',
      muted: '0 0% 71%',
      'muted-foreground': '0 0% 30%',
      accent: '117 68% 79%',
      'accent-foreground': '0 0% 5%',
      destructive: '345 100% 55%',
      'destructive-foreground': '0 0% 100%',
      border: '0 0% 83%',
      input: '0 0% 82%',
      ring: '150 68% 59%',
      'chart-1': '147 68% 74%',
      'chart-2': '297 68% 74%',
      'chart-3': '357 68% 74%',
      'chart-4': '117 68% 74%',
      'chart-5': '177 68% 74%'
    },
    darkColors: {
      background: '0 0% 6%',
      foreground: '0 0% 95%',
      card: '0 0% 15%',
      'card-foreground': '0 0% 95%',
      popover: '0 0% 15%',
      'popover-foreground': '0 0% 95%',
      primary: '147 68% 65%',
      'primary-foreground': '0 0% 5%',
      secondary: '177 68% 69%',
      'secondary-foreground': '0 0% 5%',
      muted: '0 0% 30%',
      'muted-foreground': '0 0% 70%',
      accent: '117 68% 65%',
      'accent-foreground': '0 0% 5%',
      destructive: '345 100% 35%',
      'destructive-foreground': '0 0% 100%',
      border: '0 0% 27%',
      input: '0 0% 36%',
      ring: '150 68% 59%',
      'chart-1': '147 68% 74%',
      'chart-2': '297 68% 74%',
      'chart-3': '357 68% 74%',
      'chart-4': '117 68% 74%',
      'chart-5': '177 68% 74%'
    },
    radius: 0.75
  },
  {
    name: 'Galactic Dream',
    boost: false,
    lightColors: {
      background: '0 0% 90%',
      foreground: '0 0% 5%',
      card: '0 0% 85%',
      'card-foreground': '0 0% 5%',
      popover: '0 0% 85%',
      'popover-foreground': '0 0% 5%',
      primary: '277 80% 82%',
      'primary-foreground': '0 0% 5%',
      secondary: '307 80% 75%',
      'secondary-foreground': '0 0% 5%',
      muted: '0 0% 73%',
      'muted-foreground': '0 0% 30%',
      accent: '247 80% 78%',
      'accent-foreground': '0 0% 5%',
      destructive: '358 93% 64%',
      'destructive-foreground': '0 0% 0%',
      border: '0 0% 79%',
      input: '0 0% 87%',
      ring: '265 80% 48%',
      'chart-1': '277 80% 68%',
      'chart-2': '67 80% 68%',
      'chart-3': '127 80% 68%',
      'chart-4': '247 80% 68%',
      'chart-5': '307 80% 68%'
    },
    darkColors: {
      background: '0 0% 4%',
      foreground: '0 0% 95%',
      card: '0 0% 8%',
      'card-foreground': '0 0% 95%',
      popover: '0 0% 8%',
      'popover-foreground': '0 0% 95%',
      primary: '277 80% 54%',
      'primary-foreground': '0 0% 100%',
      secondary: '307 80% 55%',
      'secondary-foreground': '0 0% 100%',
      muted: '0 0% 19%',
      'muted-foreground': '0 0% 70%',
      accent: '247 80% 53%',
      'accent-foreground': '0 0% 95%',
      destructive: '358 93% 35%',
      'destructive-foreground': '0 0% 100%',
      border: '0 0% 25%',
      input: '0 0% 31%',
      ring: '265 80% 48%',
      'chart-1': '277 80% 68%',
      'chart-2': '67 80% 68%',
      'chart-3': '127 80% 68%',
      'chart-4': '247 80% 68%',
      'chart-5': '307 80% 68%'
    },
    radius: 1
  },
  {
    name: 'Sunlit Sands',
    boost: false,
    lightColors: {
      background: '0 0% 93%',
      foreground: '0 0% 5%',
      card: '0 0% 85%',
      'card-foreground': '0 0% 5%',
      popover: '0 0% 85%',
      'popover-foreground': '0 0% 5%',
      primary: '24 69% 75%',
      'primary-foreground': '0 0% 5%',
      secondary: '54 68% 66%',
      'secondary-foreground': '0 0% 5%',
      muted: '0 0% 73%',
      'muted-foreground': '0 0% 30%',
      accent: '354 68% 66%',
      'accent-foreground': '0 0% 0%',
      destructive: '1 96% 64%',
      'destructive-foreground': '0 0% 0%',
      border: '0 0% 83%',
      input: '0 0% 78%',
      ring: '16 68% 44%',
      'chart-1': '24 68% 61%',
      'chart-2': '174 68% 61%',
      'chart-3': '234 68% 61%',
      'chart-4': '354 68% 61%',
      'chart-5': '54 68% 61%'
    },
    darkColors: {
      background: '0 0% 2%',
      foreground: '0 0% 95%',
      card: '0 0% 7%',
      'card-foreground': '0 0% 95%',
      popover: '0 0% 7%',
      'popover-foreground': '0 0% 95%',
      primary: '24 68% 49%',
      'primary-foreground': '0 0% 0%',
      secondary: '54 68% 54%',
      'secondary-foreground': '0 0% 5%',
      muted: '0 0% 18%',
      'muted-foreground': '0 0% 70%',
      accent: '354 68% 56%',
      'accent-foreground': '0 0% 100%',
      destructive: '1 96% 37%',
      'destructive-foreground': '0 0% 100%',
      border: '0 0% 27%',
      input: '0 0% 22%',
      ring: '16 68% 44%',
      'chart-1': '24 68% 61%',
      'chart-2': '174 68% 61%',
      'chart-3': '234 68% 61%',
      'chart-4': '354 68% 61%',
      'chart-5': '54 68% 61%'
    },
    radius: 1
  }
]
