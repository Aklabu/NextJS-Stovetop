'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Radio', href: '/' },
  { label: 'Videos', href: '/videos' },
  { label: 'Book An Interview', href: '/book-interview' },
  { label: 'Playlist Feature', href: '/playlist' },
  { label: 'Live Sound', href: '/live-sound' },
  { label: 'Partnership', href: '/partnership' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="w-full bg-[#0d1117] border-b border-white/10">
      <nav
        className="max-w-screen-xl mx-auto px-6 h-16 flex items-center gap-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0 mr-6"
          aria-label="Stovetop Radio home"
        >
          {/* SR monogram icon */}
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect width="36" height="36" rx="6" fill="#1a2236" />
            <text
              x="50%"
              y="55%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="#4f8ef7"
              fontSize="14"
              fontWeight="700"
              fontFamily="Arial, sans-serif"
            >
              SR
            </text>
          </svg>
          <span className="text-white text-sm font-semibold leading-tight">
            Stovetop
            <br />
            Radio
          </span>
        </Link>

        {/* Nav links */}
        <ul className="flex items-center gap-1 flex-1" role="list">
          {navLinks.map(({ label, href }) => {
            const isActive = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={[
                    'relative px-3 py-1.5 text-sm font-medium transition-colors',
                    isActive
                      ? 'text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#4f8ef7] after:rounded-full'
                      : 'text-gray-400 hover:text-white',
                  ].join(' ')}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* User / account icon */}
        <button
          type="button"
          aria-label="Account"
          className="shrink-0 text-gray-400 hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="9" r="3" />
            <path d="M6.168 18.849A4 4 0 0 1 10 16h4a4 4 0 0 1 3.832 2.849" />
          </svg>
        </button>
      </nav>
    </header>
  )
}
