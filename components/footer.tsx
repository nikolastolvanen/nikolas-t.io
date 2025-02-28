function ArrowIcon() {
  return (
    <svg
      width='12'
      height='12'
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z'
        fill='currentColor'
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className='py-8'>
      <div className='container flex max-w-[720px] flex-row items-center justify-between space-x-10 sm:justify-start'>
        <div>
          <p className='text-sm leading-5 text-muted-foreground'>
            {new Date().getFullYear()} - Nikolas Tolvanen
          </p>
        </div>
        <div>
          <ul className='font-sm flex flex-row space-x-4'>
            <li>
              <a
                className='flex items-center text-muted-foreground transition-all hover:text-foreground'
                rel='noopener noreferrer'
                target='_blank'
                href='/rss'
              >
                <ArrowIcon />
                <p className='ml-2 h-7'>rss</p>
              </a>
            </li>
            <li>
              <a
                className='flex items-center text-muted-foreground transition-all hover:text-foreground'
                rel='noopener noreferrer'
                target='_blank'
                href='https://github.com/nikolastolvanen/nikolas-t.io'
              >
                <ArrowIcon />
                <p className='ml-2 h-7'>repo</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
