'use client'

import Link from 'next/link'
import { useState } from 'react'

const roles = [
  {
    id: 'dj',
    emoji: '🎧',
    title: 'Stovetop DJ',
    department: 'Artists & Talent',
    type: 'Coalition Member',
    color: 'from-purple-500 to-blue-500',
    border: 'border-purple-500/40',
    bg: 'bg-purple-500/10',
    tag: 'bg-purple-500/20 text-purple-300',
    desc: 'Join one of the fastest-growing DJ coalitions. We provide the platform — you provide the sound. Access global event placements and brand sponsorship deals.',
    perks: ['Global Event Placements', 'Brand Sponsorship Deals', 'Exclusive Networking', 'Platform & Promotion'],
  },
  {
    id: 'radio',
    emoji: '📻',
    title: 'Radio Personality',
    department: 'Broadcast & Media',
    type: 'Host / Broadcaster',
    color: 'from-cyan-500 to-teal-400',
    border: 'border-cyan-500/40',
    bg: 'bg-cyan-500/10',
    tag: 'bg-cyan-500/20 text-cyan-300',
    desc: 'Have a passion for journalism or broadcasting? Host your own podcast or live radio show. We provide the studio, the reach, and the audience.',
    perks: ['Podcast Hosting', 'Live FM Streaming', 'YouTube & Twitch Broadcast', 'Social Media Clips'],
  },
  {
    id: 'videographer',
    emoji: '🎬',
    title: 'Videographer',
    department: 'Creative',
    type: 'Freelance / Contract',
    color: 'from-pink-500 to-rose-500',
    border: 'border-pink-500/40',
    bg: 'bg-pink-500/10',
    tag: 'bg-pink-500/20 text-pink-300',
    desc: 'Travel to different cities capturing exclusive footage and live streaming the hottest parties, events, and social gatherings. Build a world-class portfolio.',
    perks: ['Event Coverage', 'Live Streaming', 'Portfolio Building', 'Travel Opportunities'],
  },
  {
    id: 'promo',
    emoji: '📣',
    title: 'Promotion Team',
    department: 'Marketing',
    type: 'Part-time / Remote',
    color: 'from-amber-500 to-orange-500',
    border: 'border-amber-500/40',
    bg: 'bg-amber-500/10',
    tag: 'bg-amber-500/20 text-amber-300',
    desc: 'Like, comment, repost, and share our stories, videos, and photos. Help grow the Stovetop brand and earn free merch plus exclusive VIP event access.',
    perks: ['Free Merchandise', 'VIP Event Access', 'Remote Flexible Hours', 'Brand Exposure'],
  },
]

const socials = [
  {
    label: 'Facebook',
    handle: '@StovetopRadio',
    href: 'https://www.facebook.com/share/18tvR3NHHS/',
    color: 'from-blue-600 to-blue-500',
    border: 'border-blue-500/40',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    handle: '@stovetop.music.production',
    href: 'https://www.instagram.com/stovetop.music.production?igsh=NGtobm1keTIzam14',
    color: 'from-pink-600 via-purple-500 to-orange-400',
    border: 'border-pink-500/40',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    handle: '@stovetopradio',
    href: 'https://youtube.com/@stovetopradio?si=9Jjp2vpXdaKfXUVh',
    color: 'from-red-600 to-red-500',
    border: 'border-red-500/40',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.8 5 12 5 12 5s-4.8 0-7 .1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.2.8C6.8 19 12 19 12 19s4.8 0 7-.1c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM9.7 14.5v-5.5l5.6 2.8-5.6 2.7z" />
      </svg>
    ),
  },
]

const values = [
  { emoji: '🔥', title: 'Passion First', desc: 'We live and breathe music. If audio is your heartbeat, you belong here.' },
  { emoji: '🌍', title: 'Global Mindset', desc: 'Our reach spans cities, regions, and digital platforms worldwide.' },
  { emoji: '🚀', title: 'Growth Culture', desc: 'We invest in our people — every role comes with real opportunities to grow.' },
  { emoji: '🎤', title: 'Creative Freedom', desc: 'Bring your sound, your style, your vision. We amplify what makes you unique.' },
]

function RoleCard({ role }: { role: typeof roles[0] }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className={`relative rounded-2xl border ${role.border} bg-white/[0.02] overflow-hidden group transition-all duration-300`}>
      {/* Gradient top bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${role.color}`} />
      <div className="p-7">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="h-14 w-14 rounded-2xl flex items-center justify-center text-3xl bg-white/5 border border-white/10">
            {role.emoji}
          </div>
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${role.tag}`}>
            {role.type}
          </span>
        </div>
        <p className="text-xs font-semibold tracking-widest text-gray-500 mb-1">{role.department}</p>
        <h3 className="text-xl font-extrabold mb-3">{role.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-5">{role.desc}</p>

        {/* Perks */}
        {expanded && (
          <ul className="space-y-2 mb-5">
            {role.perks.map((perk) => (
              <li key={perk} className="flex items-center gap-2 text-sm text-gray-300">
                <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${role.color} flex-shrink-0`} aria-hidden="true" />
                {perk}
              </li>
            ))}
          </ul>
        )}

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="https://mail.google.com/mail/?view=cm&to=stovetopradio@gmail.com&su=Career%20Application%20–%20"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 text-center rounded-full py-2.5 text-sm font-semibold bg-gradient-to-r ${role.color} hover:opacity-90 transition`}
          >
            Apply via Email
          </a>
          <button
            onClick={() => setExpanded((e) => !e)}
            className="rounded-full px-4 py-2.5 text-sm font-semibold border border-white/15 hover:bg-white/10 transition"
          >
            {expanded ? 'Less' : 'Details'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default function CareersPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden px-6 md:px-16 py-28 text-center">
        {/* Ambient blobs */}
        <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl -z-10" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl -z-10" />

        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-gray-300 mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" /> NOW HIRING
        </span>
        <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight mb-6">
          Build the{' '}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            Future of Sound
          </span>
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Stovetop Radio is more than a station — it&apos;s a movement. We are
          looking for passionate creatives, broadcasters, and tastemakers to
          help shape the next chapter of nightlife culture.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#open-roles"
            className="rounded-full px-8 py-3.5 font-semibold bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition"
          >
            See Open Roles
          </a>
          <Link
            href="/contact"
            className="rounded-full px-8 py-3.5 font-semibold border border-white/30 hover:bg-white/10 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">Why Join Stovetop Radio?</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            We don&apos;t just hire talent — we build careers, amplify voices,
            and create lasting impact in the music world.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300"
            >
              <p className="text-4xl mb-4" aria-hidden="true">{v.emoji}</p>
              <h3 className="text-lg font-bold mb-2">{v.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── OPEN ROLES ── */}
      <section id="open-roles" className="px-6 md:px-16 max-w-7xl mx-auto pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">Open Roles</h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            Click &quot;Details&quot; to see what each role offers, then apply
            directly via email.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {roles.map((role) => (
            <RoleCard key={role.id} role={role} />
          ))}
        </div>
      </section>

      {/* ── FOLLOW US / STAY CONNECTED ── */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-10 md:p-14">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
              Follow Us for Opportunities
            </h2>
            <p className="text-gray-400 text-sm max-w-lg mx-auto">
              New roles and collaborations are announced on our social channels
              first. Follow us to stay ahead of the next opening.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative rounded-2xl border ${s.border} bg-white/[0.02] p-7 flex flex-col items-center gap-4 hover:bg-white/[0.05] transition-all duration-300 overflow-hidden`}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${s.color} blur-2xl -z-10`} />
                <div className={`h-16 w-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${s.color} text-white shadow-lg`}>
                  {s.icon}
                </div>
                <div className="text-center">
                  <p className="font-bold text-lg">{s.label}</p>
                  <p className="text-gray-400 text-sm mt-0.5">{s.handle}</p>
                </div>
                <span className="text-xs font-semibold tracking-widest text-gray-500 group-hover:text-gray-300 transition">
                  FOLLOW →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 md:px-16 pb-24 text-center">
        <div className="relative max-w-2xl mx-auto rounded-3xl overflow-hidden border border-white/10 p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-cyan-900/20 -z-10" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Have More Questions?
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed text-sm max-w-sm mx-auto">
            Not sure which role fits you? Want to pitch a collaboration?
            We&apos;re always open to a conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&to=stovetopradio@gmail.com&su=Career%20Inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-3.5 font-semibold bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition"
            >
              Email Us
            </a>
            <Link
              href="/contact"
              className="rounded-full px-8 py-3.5 font-semibold border border-white/30 hover:bg-white/10 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom note */}
      <div className="border-t border-white/10 pb-8 pt-6 text-center text-xs text-gray-500">
        © 2026 Stovetop Radio. All rights reserved.
      </div>

    </main>
  )
}
