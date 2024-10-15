import { Footer } from '@/components/footer'
import { ThemeDesigner } from '@/components/theme-designer'

export default function Home() {
  return (
    <div className='h-full overflow-y-auto bg-gradient-to-br from-foreground/5 via-transparent to-foreground/5 transition-colors duration-500'>
      <ThemeDesigner />
      <Footer />
    </div>
  )
}
