import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <Loader2 className='w-10 h-10 animate-spin' />
    </div>
  )
}
