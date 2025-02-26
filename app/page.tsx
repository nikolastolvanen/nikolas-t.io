import Intro from '@/components/intro'
//import NewsletterForm from '@/components/newsletter-form'
//import RecentPosts from '@/components/recent-posts'
import RecentProjects from '@/components/recent-projects'
import Socials from '@/components/socials'

export default function Home() {
  return (
    <section className='pb-24 pt-16'>
      <div className='container max-w-[720px]'>
        <Intro />
        <Socials />
        <RecentProjects />
        {/* <RecentPosts /> */}
        {/* <NewsletterForm /> */}
      </div>
    </section>
  )
}
