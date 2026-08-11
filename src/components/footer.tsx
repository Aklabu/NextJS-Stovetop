import Link from 'next/link'

const footerLinks = [
  { label: 'Privacy Policy', href: '/our-privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Careers', href: '/careers' },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/18tvR3NHHS/',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/stovetop.music.production?igsh=NGtobm1keTIzam14',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@stovetopradio?si=9Jjp2vpXdaKfXUVh',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.8 5 12 5 12 5s-4.8 0-7 .1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.2.8C6.8 19 12 19 12 19s4.8 0 7-.1c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM9.7 14.5v-5.5l5.6 2.8-5.6 2.7z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="w-full bg-[#0d1117] border-t border-white/10 mt-auto">
      <div className="max-w-screen-xl mx-auto px-6 py-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand + tagline + contact */}
          <div className="max-w-xs space-y-3">
            <p className="text-white font-bold text-lg">Stovetop Radio</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Elevating the frequency through premium curation and technical
              excellence.
            </p>
          </div>

          {/* Right column: footer nav + follow us */}
          <div className="flex flex-col gap-6 items-start md:items-end">
            {/* Footer links */}
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap items-center gap-6" role="list">
                {footerLinks.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social links */}
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-3 md:text-right">
                Follow Us
              </p>
              <ul className="flex items-center gap-4" role="list">
                {socialLinks.map(({ label, href, icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-white/10 mt-8 pt-6">
          <p className="text-gray-500 text-xs">
            © 2026 Stovetop Radio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
