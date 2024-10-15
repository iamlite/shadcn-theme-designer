export const Header = () => {
  return (
    <header className='flex items-center justify-between p-2 px-4 bg-background/70 shadow-md backdrop-blur-md'>
      <h1 className='text-lg font-bold'>Shadesigner</h1>
      <nav>
        <ul className='flex space-x-4'>
          <li>
            <a
              href='#'
              className='hover:underline'>
              Home
            </a>
          </li>
          <li>
            <a
              href='#'
              className='hover:underline'>
              How it works
            </a>
          </li>
          <li>
            <a
              href='#'
              className='hover:underline'></a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
