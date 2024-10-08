import ColorPicker from '@/components/customizer/color-menu'
import Showcase from '@/components/examples'
import WelcomeCard from '@/components/welcome-card'

export default function Home() {
  return (
    <div className='flex flex-col md:flex-row h-full text-xs p-8'>
      <div className='w-full lg:w-[30%] pr-4'>
        <WelcomeCard />
        <ColorPicker />
      </div>
      <div className='w-full lg:w-[70%]'>
        <Showcase />
      </div>
    </div>
  )
}
