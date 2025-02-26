import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
//import { Button } from '@/components/ui/button'

const navItems = {
  '/': {
    name: 'Home'
  },
  '/about': {
    name: 'About'
  },
  '/projects': {
    name: 'Projects'
  },
  '/contact': {
    name: 'Contact'
  }
}

export default function Header() {
  return (
    <header className='inset-x-0 top-0 z-50 pb-6 md:pt-6'>
      <nav className='container flex max-w-[720px] items-center justify-between pb-3 pt-3'>
        <Link href='/' className='hidden shrink-0 text-primary md:block rounded-lg p-2'>
          <svg
            width='20'
            height='20'
            viewBox='0 0 400 400'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0 30C0 13.4314 13.4316 0 30 0H120C136.568 0 150 13.4314 150 30V370C150 386.569 136.568 400 120 400H30C13.4316 400 0 386.569 0 370V30Z'
              fill='currentColor'
            />
            <path
              d='M225.455 175H225C211.193 175 200 163.807 200 150V25C200 11.1929 211.193 0 225 0H250C332.843 0 400 67.1572 400 150V375C400 388.807 388.807 400 375 400H275C261.193 400 250 388.807 250 375V199.545L249.996 199.541C249.754 186.098 238.902 175.246 225.459 175.004L225.455 175Z'
              fill='currentColor'
            />
          </svg>
        </Link>

        <div className='flex flex-row gap-1'>
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className='relative m-1 flex px-2 py-1 rounded-lg align-middle text-sm transition-all hover:text-neutral-800 dark:hover:text-neutral-200'
              >
                {name}
              </Link>
            )
          })}
        </div>

        <div className='flex h-8 w-8 items-center justify-center'>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
