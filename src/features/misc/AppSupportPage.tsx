import Link from 'next/link'

const contactItems = [
  {
    icon: '📞',
    label: 'Call',
    value: '+1 (573) 485-5075',
    href: 'tel:+15734855075',
    description: 'Talk to someone on our team directly.',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'stovetopradio@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&to=stovetopradio@gmail.com&su=App%20Support%20-%20Stovetop%20Radio',
    description: 'Send us a message and we\'ll respond within 1–2 business days.',
  },
  {
    icon: '📍',
    label: 'Location',
    value: '2407 Rangeline St Ste A, Columbia, MO 65202',
    href: 'https://maps.google.com/?q=2407+Rangeline+St+Ste+A+Columbia+MO+65202',
    description: 'Visit us at our studio location.',
  },
]

const faqs = [
  {
    q: 'Where can I download the Stovetop Radio app?',
    a: 'The Stovetop Radio app is available on both the Apple App Store (iOS) and Google Play Store (Android). Search for "Stovetop Radio" and look for our official logo to find the app.',
  },
  {
    q: 'The app won\'t open or keeps crashing. What should I do?',
    a: 'First, try closing the app completely and reopening it. If the issue persists, make sure your app is updated to the latest version. You can also try clearing the app cache (Android) or reinstalling the app. If problems continue, contact our support team.',
  },
  {
    q: 'The audio stream is buffering or cutting out. What can I do?',
    a: 'Buffering is usually caused by a slow or unstable internet connection. Try switching between Wi-Fi and mobile data, or move to an area with a stronger signal. You can also lower the stream quality in the app settings to reduce buffering.',
  },
  {
    q: 'How do I update the app to the latest version?',
    a: 'Open the App Store (iOS) or Google Play Store (Android), search for "Stovetop Radio," and tap "Update" if one is available. Keeping your app updated ensures you have the latest features and bug fixes.',
  },
  {
    q: 'How do I report a bug or suggest a new feature?',
    a: 'We love hearing from our users. Email us at stovetopradio@gmail.com with a description of the bug or your feature suggestion. Screenshots are always helpful when reporting issues.',
  },
]

export default function AppSupportPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-24">

        {/* Header */}
        <div className="mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-gray-300 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" /> APP SUPPORT
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Stovetop Radio App Support
          </h1>
          <p className="text-gray-400 leading-relaxed max-w-xl">
            Having trouble with the Stovetop Radio app? Browse common questions
            below or reach out to our team directly — we&apos;re here to help.
          </p>

          {/* App store badges */}
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="https://apps.apple.com/search?term=stovetop+radio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/[0.04] px-5 py-3 text-sm font-semibold hover:bg-white/10 transition"
            >
              <span className="text-xl" aria-hidden="true">🍎</span>
              Download on the App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.app.stovetopmusic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/[0.04] px-5 py-3 text-sm font-semibold hover:bg-white/10 transition"
            >
              <span className="text-xl" aria-hidden="true">▶️</span>
              Get it on Google Play
            </a>
          </div>
        </div>

        {/* Contact cards */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6">Contact Us</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label !== 'Call' ? '_blank' : undefined}
                rel={item.label !== 'Call' ? 'noopener noreferrer' : undefined}
                className="group flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.06] hover:border-purple-500/40 transition"
              >
                <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                <span className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                  {item.label}
                </span>
                <span className="text-sm font-semibold text-white group-hover:text-purple-300 transition break-words">
                  {item.value}
                </span>
                <span className="text-xs text-gray-500 leading-relaxed">
                  {item.description}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] divide-y divide-white/10">
            {faqs.map((item) => (
              <div key={item.q} className="px-6 py-5">
                <p className="text-sm font-semibold text-white mb-2">{item.q}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Still need help CTA */}
        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-purple-900/20 via-black to-black p-10 text-center">
          <h2 className="text-2xl font-extrabold mb-3">Still need help?</h2>
          <p className="text-gray-400 text-sm mb-8 max-w-sm mx-auto">
            Our support team is happy to assist with any app issues, account
            questions, or technical problems you run into.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&to=stovetopradio@gmail.com&su=App%20Support%20Request%20-%20Stovetop%20Radio"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-3 font-semibold bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition"
            >
              Email Support
            </a>
            <a
              href="tel:+15734855075"
              className="rounded-full px-8 py-3 font-semibold border border-white/30 hover:bg-white/10 transition"
            >
              Call +1 (573) 485-5075
            </a>
          </div>
        </div>

        {/* Legal links */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <span>© 2026 Stovetop Radio. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/our-privacy-policy" className="hover:text-gray-300 transition">
              Privacy Policy
            </Link>
            <Link href="/faq" className="hover:text-gray-300 transition">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-gray-300 transition">
              Contact
            </Link>
          </div>
        </div>

      </div>
    </main>
  )
}
