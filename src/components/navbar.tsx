'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Radio',            href: '/radio' },
  { label: 'Videos',           href: '/videos' },
  { label: 'Book An Interview',href: '/book-interview' },
  { label: 'Playlist Feature', href: '/playlist' },
  { label: 'Live Sound',       href: '/live-sound' },
  { label: 'Partnership',      href: '/partnership' },
  { label: 'Contact Us',       href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  // Prevent body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className="w-full bg-[#0d1117] border-b border-white/10 relative z-50">
      <nav
        className="max-w-screen-xl mx-auto px-6 h-16 sm:h-20 flex items-center gap-4"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 shrink-0"
          aria-label="Stovetop Radio home"
        >
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

        {/* Desktop nav links — hidden on mobile */}
        <ul className="hidden lg:flex items-center gap-1 flex-1" role="list">
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

        {/* Spacer on mobile so buttons sit right */}
        <div className="flex-1 lg:hidden" />

        {/* Download button — visible on desktop only */}
        <Link
          href="/download"
          aria-label="Download the app"
          className="hidden lg:flex shrink-0 items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-gray-300 hover:text-white hover:border-white/40 transition-colors text-sm font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download
        </Link>

        {/* Hamburger button — mobile only */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden shrink-0 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 top-16 bg-black/50 z-40"
            aria-hidden="true"
            onClick={() => setMenuOpen(false)}
          />

          {/* Menu panel */}
          <div
            id="mobile-menu"
            className="lg:hidden absolute top-full inset-x-0 z-50 bg-[#0d1117] border-b border-white/10 shadow-2xl"
          >
            <ul className="flex flex-col px-4 py-3" role="list">
              {navLinks.map(({ label, href }) => {
                const isActive = pathname === href
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={[
                        'flex items-center px-3 py-3.5 text-sm font-medium rounded-lg transition-colors',
                        isActive
                          ? 'text-white bg-white/5'
                          : 'text-gray-400 hover:text-white hover:bg-white/5',
                      ].join(' ')}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {label}
                    </Link>
                  </li>
                )
              })}

              {/* Download inside mobile menu */}
              <li className="mt-2 pt-2 border-t border-white/10">
                <Link
                  href="/download"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-white/20 text-gray-300 hover:text-white hover:border-white/40 transition-colors text-sm font-medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download the app
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  )
}
