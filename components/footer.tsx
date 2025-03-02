function LinkIcon() {
  return (
    <svg
      fill='none'
      height='18'
      viewBox='0 0 24 24'
      width='18'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='m10 6h-4c-1.10457 0-2 .89543-2 2v10c0 1.1046.89543 2 2 2h10c1.1046 0 2-.8954 2-2v-4m-4-10h6m0 0v6m0-6-10 10'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className='py-8'>
      <div className='container flex max-w-[720px] flex-row items-end justify-between sm:items-center sm:space-x-16'>
        <div>
          <p className='text-sm leading-5 text-muted-foreground'>
            {new Date().getFullYear()} - Nikolas Tolvanen
          </p>
        </div>
        <div>
          <ul className='sm-items-center flex flex-col items-end space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0'>
            <li>
              <a
                className='flex items-center text-muted-foreground transition-all hover:text-foreground'
                rel='noopener noreferrer'
                target='_blank'
                href='/rss'
              >
                <p className='ml-2 text-sm'>RSS</p>
                <LinkIcon />
              </a>
            </li>
            <li>
              <a
                className='flex items-center text-muted-foreground transition-all hover:text-foreground'
                rel='noopener noreferrer'
                target='_blank'
                href='https://github.com/nikolastolvanen/nikolas-t.io'
              >
                <p className='ml-2 text-sm'>GitHub Repo</p>
                <LinkIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
