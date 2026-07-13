'use client'

import { useState, useRef, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Search, Compass, Music2, Layers, RotateCcw, Radio, Heart, Moon, Zap, Mic2, Palmtree } from 'lucide-react'

interface NavItem {
  id: string
  label: string
  icon: React.ElementType
  href?: string
}

const navItems: NavItem[] = [
  { id: 'explore', label: 'Explore', icon: Compass },
  { id: 'music', label: 'All Music', icon: Music2, href: '/radio/music' },
  { id: 'mashups', label: 'Mashups', icon: Layers },
  { id: 'throwback', label: 'Throwback', icon: RotateCcw },
  { id: 'rnb', label: 'R&B', icon: Radio },
  { id: 'soul', label: 'Soul', icon: Heart },
  { id: 'feel-good', label: 'Feel Good', icon: Zap },
  { id: 'slow-jams', label: 'Slow Jams', icon: Moon },
  { id: 'motivation', label: 'Motivation', icon: Zap },
  { id: 'hip-hop', label: 'Hip Hop', icon: Mic2 },
  { id: 'reggae', label: 'Reggae', icon: Palmtree },
]

export default function Sidebar() {
  const [active, setActive] = useState('explore')
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const q = inputRef.current?.value.trim()
    if (!q) return
    router.push(`/radio/search?q=${encodeURIComponent(q)}`)
  }

  return (
    <aside className="hidden lg:flex flex-col w-64 shrink-0 bg-zinc-950 border-r border-zinc-900 h-screen sticky top-0 px-4 py-6">
      <div className="mb-6">
        <h1 className="text-xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
          Stovetop DJs
        </h1>
        <p className="text-xs text-zinc-500 mt-0.5">Live Sound Services</p>
      </div>

      {/* Search form */}
      <form onSubmit={handleSearch} className="relative mb-6" role="search">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
        <input
          ref={inputRef}
          type="search"
          placeholder="Search music"
          aria-label="Search music"
          className="w-full bg-zinc-900 text-sm text-zinc-200 placeholder-zinc-500 rounded-lg pl-9 pr-3 py-2.5 outline-none focus:ring-1 focus:ring-violet-500"
        />
      </form>

      <nav className="flex flex-col gap-1">
        {navItems.map(({ id, label, icon: Icon, href }) => {
          const isActive = active === id
          const className = `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
            isActive
              ? 'bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white'
              : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'
          }`

          if (href) {
            return (
              <Link
                key={id}
                href={href}
                onClick={() => setActive(id)}
                className={className}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            )
          }

          return (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={className}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
