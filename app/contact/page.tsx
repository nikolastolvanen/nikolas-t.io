import ContactForm from '@/components/contact-form'

export default function Contact() {
  return (
    <section className='pb-24 pt-16'>
      <div className='container max-w-[720px]'>
        <h2 className='title'>Contact</h2>
        <p className='mt-4 max-w-lg'>
          Want to chat or ask something? Fill out the form below and I’ll get
          back to you very soon.
        </p>
        <ContactForm />
      </div>
    </section>
  )
}
