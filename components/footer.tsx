import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='mt-6 max-w-4xl mx-auto mb-4 text-muted-foreground'>
      <div className='flex flex-col justify-between items-center'>
        <div className='flex items-center text-xs'>
          <p>© {new Date().getFullYear()} Shadesigner. All rights reserved.</p>

          <span className='mx-1'>made by</span>
          <Link
            href='https://tarieldavids.com'
            target='_blank'
            className='hover:text-foreground transition duration-300'>
            T
          </Link>
        </div>
      </div>
    </footer>
  )
}
