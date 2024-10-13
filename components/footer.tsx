import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='mt-6 max-w-4xl mx-auto text-muted-foreground'>
      <div className='flex flex-col justify-between items-center'>
        <p className='text-xs mb-2 md:mb-0'>© {new Date().getFullYear()} Shadesigner. All rights reserved.</p>
        <div className='flex items-center'>
          <span className='mr-2'>Made with</span>
          <span className='text-destructive text-lg'>❤️</span>
          <span className='mx-2'>by</span>
          <Link
            href='https://tarieldavids.com'
            target='_blank'
            className='hover:text-foreground transition duration-300'>
            Tariel Davidashvili
          </Link>
        </div>
      </div>
    </footer>
  )
}
