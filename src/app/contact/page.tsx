import ContactSection from '@/features/contact/components/contact-section'

export const metadata = {
  title: 'Contact Us | Stovetop Radio',
  description: 'Get in touch with Stovetop Radio.',
}

export default function ContactPage() {
  return (
    <main className="flex-1">
      <ContactSection />
    </main>
  )
}
