'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  Search, Compass, Music2, Layers, RotateCcw, Radio,
  Heart, Moon, Zap, Mic2, Palmtree, MoreHorizontal, X,
} from 'lucide-react'

interface NavItem {
  id: string
  label: string
  icon: React.ElementType
  href?: string
}

const navItems: NavItem[] = [
  { id: 'explore',    label: 'Explore',    icon: Compass  },
  { id: 'music',      label: 'All Music',  icon: Music2,   href: '/radio/music' },
  { id: 'mashups',    label: 'Mashups',    icon: Layers,   href: '/radio/collection/Mashups' },
  { id: 'throwback',  label: 'Throwback',  icon: RotateCcw,href: '/radio/collection/Throwback' },
  { id: 'rnb',        label: 'R&B',        icon: Radio,    href: '/radio/collection/R%26B' },
  { id: 'soul',       label: 'Soul',       icon: Heart,    href: '/radio/collection/Soul' },
  { id: 'feel-good',  label: 'Feel Good',  icon: Zap,      href: '/radio/collection/Feel%20Good' },
  { id: 'slow-jams',  label: 'Slow Jams',  icon: Moon,     href: '/radio/collection/Slow%20Jams' },
  { id: 'motivation', label: 'Motivation', icon: Zap,      href: '/radio/collection/Motivation' },
  { id: 'hip-hop',    label: 'Hip Hop',    icon: Mic2,     href: '/radio/collection/Hip%20Hop' },
  { id: 'reggae',     label: 'Reggae',     icon: Palmtree, href: '/radio/collection/Reggae' },
]

// Bottom nav shows 4 fixed items; the rest live in the drawer
const BOTTOM_NAV_IDS = ['explore', 'music', 'search']
// Section items shown in the "More" drawer
const drawerItems = navItems.filter((i) => !BOTTOM_NAV_IDS.includes(i.id))

export default function Sidebar() {
  const [active, setActive]       = useState('explore')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [mobileSearch, setMobileSearch] = useState(false)
  const router = useRouter()
  const desktopInputRef = useRef<HTMLInputElement>(null)
  const mobileInputRef  = useRef<HTMLInputElement>(null)

  function submitSearch(q: string) {
    const trimmed = q.trim()
    if (!trimmed) return
    setDrawerOpen(false)
    setMobileSearch(false)
    router.push(`/radio/search?q=${encodeURIComponent(trimmed)}`)
  }

  function handleDesktopSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    submitSearch(desktopInputRef.current?.value ?? '')
  }

  function handleMobileSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    submitSearch(mobileInputRef.current?.value ?? '')
  }

  // ── shared active-state style helper ──────────────────────────────────────
  function sidebarItemClass(id: string) {
    return `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
      active === id
        ? 'bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white'
        : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
    }`
  }

  return (
    <>
      {/* ── DESKTOP SIDEBAR (lg+) ─────────────────────────────────────────── */}
      <aside className="hidden lg:flex flex-col w-64 shrink-0 bg-zinc-950 border-r border-zinc-900 h-screen sticky top-0 px-4 py-6">
        <div className="mb-6">
          <h1 className="text-xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Stovetop DJs
          </h1>
          <p className="text-xs text-zinc-500 mt-0.5">Live Sound Services</p>
        </div>

        <form onSubmit={handleDesktopSearch} className="relative mb-6" role="search">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
          <input
            ref={desktopInputRef}
            type="search"
            placeholder="Search music, DJs, mixes…"
            aria-label="Search music, DJs and mixes"
            className="w-full bg-zinc-900 text-sm text-zinc-200 placeholder-zinc-500 rounded-lg pl-9 pr-3 py-2.5 outline-none focus:ring-1 focus:ring-violet-500"
          />
        </form>

        <nav className="flex flex-col gap-1 overflow-y-auto">
          {navItems.map(({ id, label, icon: Icon, href }) =>
            href ? (
              <Link
                key={id}
                href={href}
                onClick={() => setActive(id)}
                className={sidebarItemClass(id)}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            ) : (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={sidebarItemClass(id)}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            )
          )}
        </nav>
      </aside>

      {/* ── MOBILE BOTTOM NAV (< lg) ──────────────────────────────────────── */}
      <nav
        aria-label="Mobile navigation"
        className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-zinc-950 border-t border-zinc-800 flex items-stretch h-16"
      >
        {/* Explore */}
        <button
          onClick={() => { setActive('explore'); setDrawerOpen(false); setMobileSearch(false); router.push('/radio') }}
          className={`flex-1 flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium transition-colors ${
            active === 'explore' && !drawerOpen && !mobileSearch
              ? 'text-fuchsia-400'
              : 'text-zinc-500'
          }`}
        >
          <Compass className="w-5 h-5" />
          Explore
        </button>

        {/* All Music */}
        <Link
          href="/radio/music"
          onClick={() => { setActive('music'); setDrawerOpen(false); setMobileSearch(false) }}
          className={`flex-1 flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium transition-colors ${
            active === 'music' && !drawerOpen && !mobileSearch
              ? 'text-fuchsia-400'
              : 'text-zinc-500'
          }`}
        >
          <Music2 className="w-5 h-5" />
          All Music
        </Link>

        {/* Search */}
        <button
          onClick={() => { setMobileSearch(true); setDrawerOpen(false) }}
          className={`flex-1 flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium transition-colors ${
            mobileSearch ? 'text-fuchsia-400' : 'text-zinc-500'
          }`}
          aria-label="Open search"
        >
          <Search className="w-5 h-5" />
          Search
        </button>

        {/* More */}
        <button
          onClick={() => { setDrawerOpen(true); setMobileSearch(false) }}
          className={`flex-1 flex flex-col items-center justify-center gap-0.5 text-[10px] font-medium transition-colors ${
            drawerOpen ? 'text-fuchsia-400' : 'text-zinc-500'
          }`}
          aria-label="More sections"
        >
          <MoreHorizontal className="w-5 h-5" />
          More
        </button>
      </nav>

      {/* ── MOBILE SEARCH BAR ─────────────────────────────────────────────── */}
      {mobileSearch && (
        <div className="lg:hidden fixed bottom-16 inset-x-0 z-40 bg-zinc-900 border-t border-zinc-800 px-4 py-3 flex items-center gap-3">
          <form
            onSubmit={handleMobileSearch}
            className="flex-1 relative"
            role="search"
          >
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
            <input
              ref={mobileInputRef}
              type="search"
              autoFocus
              placeholder="Search music, DJs, mixes…"
              aria-label="Search music, DJs and mixes"
              className="w-full bg-zinc-800 text-sm text-zinc-200 placeholder-zinc-500 rounded-lg pl-9 pr-3 py-2.5 outline-none focus:ring-1 focus:ring-violet-500"
            />
          </form>
          <button
            onClick={() => setMobileSearch(false)}
            aria-label="Close search"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* ── MOBILE "MORE" DRAWER ──────────────────────────────────────────── */}
      {drawerOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 z-40 bg-black/60"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <div className="lg:hidden fixed bottom-16 inset-x-0 z-50 bg-zinc-950 border-t border-zinc-800 rounded-t-2xl px-4 pt-4 pb-6 max-h-[70vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">
                Browse Sections
              </h2>
              <button
                onClick={() => setDrawerOpen(false)}
                aria-label="Close drawer"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {drawerItems.map(({ id, label, icon: Icon, href }) =>
                href ? (
                  <Link
                    key={id}
                    href={href}
                    onClick={() => { setActive(id); setDrawerOpen(false) }}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl bg-zinc-900 text-sm font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
                  >
                    <Icon className="w-4 h-4 text-fuchsia-400 shrink-0" />
                    {label}
                  </Link>
                ) : (
                  <button
                    key={id}
                    onClick={() => { setActive(id); setDrawerOpen(false) }}
                    className="flex items-center gap-3 px-3 py-3 rounded-xl bg-zinc-900 text-sm font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
                  >
                    <Icon className="w-4 h-4 text-fuchsia-400 shrink-0" />
                    {label}
                  </button>
                )
              )}
            </div>
          </div>
        </>
      )}
    </>
  )
}
