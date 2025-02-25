//import Image from 'next/image'
//import authorImage from '@/public/images/authors/hamed.png'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='text-3xl font-semibold tracking-tight text-primary'>
          hey, I&#39;m Nikolas
        </h1>
        <p className='mt-4 max-w-lg text-muted-foreground'>
          I&#39;m a computer science student living in Finland. Welcome to my
          website.
        </p>
      </div>
      <div className='relative'></div>
    </section>
  )
}
