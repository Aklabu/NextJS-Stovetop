'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

const GMAIL_LINK =
  'https://mail.google.com/mail/?view=cm&to=stovetopradio@gmail.com&su=Partnership%20Inquiry'

const cards = [
  {
    img: '/images/Partnership-3.png',
    title: 'Videographer',
    desc: 'Travel to different cities capturing exclusive footage, and live streaming the hottest parties, events and social gatherings. Build a world-class portfolio.',
  },
  {
    img: '/images/Partnership-4.png',
    title: 'Promotion Team',
    desc: 'Like, comment, repost and share recent stories, videos and photos. Receive free merchandise and exclusive VIP access to our premier events.',
  },
]

function ContactDropdown({ label, className }: { label: string; className?: string }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen((o) => !o)}
        className={className}
      >
        {label}
        <span className="ml-2" aria-hidden="true">{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-52 rounded-xl border border-white/10 bg-zinc-900 shadow-xl z-50 overflow-hidden">
          <a
            href={GMAIL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-5 py-4 text-sm font-semibold hover:bg-white/5 transition"
          >
            <span aria-hidden="true">✉️</span> Email Us
          </a>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-5 py-4 text-sm font-semibold hover:bg-white/5 transition border-t border-white/10"
          >
            <span aria-hidden="true">📞</span> Direct Contact
          </Link>
        </div>
      )}
    </div>
  )
}

export default function PartnershipPage() {
  return (
    <main className="bg-black text-white">
      {/* ── HERO ── */}
      <section className="relative h-[650px] w-full overflow-hidden">
        <Image
          src="/images/Partnership-1.png"
          alt="DJ performing at Sahara Nightwave Festival"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Partnership{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Opportunities
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-gray-200 text-lg">
            Shape the Future of Nightlife with Stovetop DJs. We&apos;re
            building an ecosystem where talent meets technical mastery.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#stovetop-djs"
              className="rounded-full px-8 py-3 font-semibold text-white border border-white/40 hover:bg-white/10 transition"
            >
              View Roles
            </a>
          </div>
        </div>
      </section>

      {/* ── STOVETOP DJS ── */}
      <section id="stovetop-djs" className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-16 py-24 max-w-7xl mx-auto">
        <div>
          <p className="text-sm tracking-widest text-cyan-400 font-semibold mb-3">
            ARTISTS &amp; TALENT
          </p>
          <h2 className="text-4xl font-bold mb-6">Stovetop DJs</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Come join one of the fastest growing DJ coalition. Our primary
            goal is to create opportunities not only for up and coming artists,
            but for DJs as well. We provide the platform; you provide the
            sound.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-gray-200">
              <span className="text-cyan-400">◎</span>
              Global Event Placements
            </li>
            <li className="flex items-center gap-3 text-gray-200">
              <span className="text-purple-400">✦</span>
              Brand Sponsorship Deals
            </li>
          </ul>
          <ContactDropdown
            label="Join the Coalition"
            className="rounded-full px-8 py-3 font-semibold bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition inline-flex items-center"
          />
        </div>
        <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10">
          <Image
            src="/images/Partnership-1.png"
            alt="Stovetop DJ performing live"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* ── RADIO PERSONALITY ── */}
      <section className="bg-zinc-950">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-16 py-24 max-w-7xl mx-auto">
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 order-2 md:order-1">
            <Image
              src="/images/Partnership-2.png"
              alt="Radio personality in studio"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-sm tracking-widest text-purple-400 font-semibold mb-3">
              BROADCAST &amp; MEDIA
            </p>
            <h2 className="text-4xl font-bold mb-6">Radio Personality</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Do you have a passion for journalism? Have you ever thought about
              hosting your own podcast or radio show? If so, then contact us
              now to start your broadcast journey.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xl mb-2">🎙️</p>
                <p className="text-sm text-gray-200">Podcast Hosting</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xl mb-2">📻</p>
                <p className="text-sm text-gray-200">Live FM Streaming</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VIDEOGRAPHER + PROMOTION TEAM ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-16 py-24 max-w-7xl mx-auto">
        {cards.map((card) => (
          <div key={card.title} className="group">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 mb-6">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
            <p className="text-gray-400 leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-white/10 py-24 px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
          Ready to Change the Game?
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          We are always looking for visionary partners to push the boundaries
          of the nightlife industry.
        </p>
        <ContactDropdown
          label="Get In Touch"
          className="rounded-full px-10 py-4 font-semibold bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition inline-flex items-center"
        />
      </section>
    </main>
  )
}
