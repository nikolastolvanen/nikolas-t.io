import Image from 'next/image'

export default async function About() {
  return (
    <section className='pb-24 pt-16'>
      <div className='container max-w-[720px]'>
        <h2 className='title'>About</h2>
        <div className='mt-8 flex flex-row gap-8'>
          <div className='w-full sm:w-1/2'>
            <p className='pb-2'>
              Hello! My name is Nikolas Tolvanen. I&#39;m from Joensuu, Finland.
            </p>
            <p className='py-2'>
              I&#39;m studying computer science at the University of Eastern
              Finland. In my studies, I have learned about software development,
              data science, data analytics, artificial intelligence, robotics,
              and several other things.
            </p>
            <p className='py-2'>
              Tech has been my interest for a long time. I enjoy coding as it is
              challenging and it gives the feeling of accomplishment when you
              solve a problem. I also like building new things.
            </p>
            <p className='py-2'>
              On my free time I like going to the gym and reading interesting
              books. I have also started running as a new hobby this year and
              I&#39;m hoping to run a marathon soon in the future.
            </p>
          </div>
          <div className='invisible sm:visible'>
            <Image
              className='absolute ml-[30px] flex-1 rotate-[0.1rad] rounded-lg'
              src='/images/gallery/helsinki.jpg'
              alt='Nikolas in Helsinki'
              width={200}
              height={100}
              priority
            />
            <Image
              className='absolute mt-[260px] flex-1 rotate-[-0.05rad] rounded-lg'
              src='/images/gallery/uef.jpg'
              alt='University of Eastern Finland'
              width={300}
              height={100}
              priority
            />
            {/* <Image
              className='absolute ml-[80px] mt-[395px] flex-1 rotate-[0.03rad] rounded-lg'
              src='/images/gallery/vaticancity.jpg'
              alt='Nikolas in Vatican City'
              width={200}
              height={175}
              priority
            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}
