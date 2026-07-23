'use client'

import Image from 'next/image'
import { useState } from 'react'

const GENRES = ['R&B', 'Rap', 'Pop', 'Soul', 'Jazz', 'Reggae']

const tiers = [
  {
    id: 'small-venue',
    title: 'Small Venue',
    guests: '200 guests max',
    price: '$75.00 per hour',
    desc: 'Perfect for intimate venues needing high-quality sound that complements the atmosphere without overpowering conversation.',
    features: ['Compact Sound System', 'Karaoke Capability'],
    popular: false,
    image: '/images/landing.jpg',
  },
  {
    id: 'large-venue',
    title: 'Large Venue',
    guests: '500 guests or more',
    price: '$95.00 per hour',
    desc: 'Massive power for large-scale events. Touring-grade equipment with full lighting rig and professional sound engineering team.',
    features: ['10kW Peavey Sound System', 'Full Stage Lighting & SFX'],
    popular: true,
    image: '/images/live-sound-3.png',
  },
  {
    id: 'medium-venue',
    title: 'Medium Size Venue',
    guests: '400 guests max',
    price: '$85.00 per hour',
    desc: 'Clarity is king. We provide crystal-clear vocal reproduction and ground-shaking bass from our 4k-watt sound system.',
    features: ['Vocal-Optimized EQ', 'Wireless Mic System'],
    popular: false,
    image: '/images/live-sound-1.png',
  },
]

type FormState = {
  name: string
  date: string
  time: string
  location: string
  guests: string
  occasion: string
  genres: string[]
}

const emptyForm: FormState = {
  name: '',
  date: '',
  time: '',
  location: '',
  guests: '',
  occasion: '',
  genres: [],
}

export default function PrecisionAudioServices() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null)
  const [form, setForm] = useState<FormState>(emptyForm)

  const activeTier = tiers.find((t) => t.id === selectedTier)

  function toggleGenre(genre: string) {
    setForm((prev) => ({
      ...prev,
      genres: prev.genres.includes(genre)
        ? prev.genres.filter((g) => g !== genre)
        : [...prev.genres, genre],
    }))
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function buildGmailUrl() {
    const subject = encodeURIComponent(`Booking Request – ${activeTier?.title ?? 'Audio Service'}`)
    const body = encodeURIComponent(
      `Tier: ${activeTier?.title ?? ''}\n` +
      `Name: ${form.name}\n` +
      `Date: ${form.date}\n` +
      `Time: ${form.time}\n` +
      `Location: ${form.location}\n` +
      `Number of Guests: ${form.guests}\n` +
      `Occasion: ${form.occasion}\n` +
      `Genre of Music: ${form.genres.join(', ') || 'Not specified'}`
    )
    return `https://mail.google.com/mail/?view=cm&to=stovetopradio@gmail.com&su=${subject}&body=${body}`
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    window.open(buildGmailUrl(), '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="px-6 md:px-16 max-w-7xl mx-auto py-20 text-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Precision Audio Services</h2>
      <p className="text-gray-400 mb-16">
        Professional sound engineering for any environment.
      </p>

      {/* ── TIER CARDS ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-10">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={`relative rounded-2xl border overflow-hidden ${
              tier.popular
                ? 'border-purple-400/60 bg-white/[0.03] md:-translate-y-4'
                : 'border-white/10 bg-white/[0.02]'
            }`}
          >
            {tier.popular && (
              <span className="absolute top-5 right-5 z-10 rounded-full bg-purple-500 px-3 py-1 text-[10px] font-bold tracking-widest">
                POPULAR
              </span>
            )}
            <div className="relative aspect-[16/10]">
              <Image src={tier.image} alt={tier.title} fill className="object-cover" />
            </div>
            <div className="p-7">
              <h3 className="text-xl font-bold mb-1">{tier.title}</h3>
              <p className="text-sm text-gray-400 mb-3">{tier.guests}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{tier.desc}</p>
              <ul className="space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-cyan-400" aria-hidden="true">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* ── BOOK NOW CTA ── */}
      {!selectedTier && (
        <button
          onClick={() => setSelectedTier(tiers[0].id)}
          className="rounded-full px-10 py-4 font-semibold bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition mb-16"
        >
          Book Now
        </button>
      )}

      {/* ── BOOKING FORM ── */}
      {selectedTier && activeTier && (
        <div className="max-w-2xl mx-auto rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12 text-left">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-extrabold">Book a Service</h3>
              <p className="text-gray-400 text-sm mt-1">Fill in your details and we&apos;ll be in touch</p>
            </div>
            <button
              onClick={() => setSelectedTier(null)}
              className="text-gray-400 hover:text-white transition text-2xl leading-none"
              aria-label="Close form"
            >
              ×
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Tier selector */}
            <div>
              <label className="block text-sm font-semibold mb-1.5">Select Venue Tier</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {tiers.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSelectedTier(t.id)}
                    className={`rounded-xl border px-4 py-3 text-sm font-semibold transition text-left ${
                      selectedTier === t.id
                        ? 'border-purple-400 bg-purple-500/10 text-white'
                        : 'border-white/10 bg-white/5 text-gray-300 hover:border-white/30'
                    }`}
                  >
                    <p>{t.title}</p>
                  </button>
                ))}
              </div>
            </div>
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold mb-1.5" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition"
              />
            </div>

            {/* Date + Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold mb-1.5" htmlFor="date">Date</label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  required
                  value={form.date}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-400 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5" htmlFor="time">Time</label>
                <input
                  id="time"
                  name="time"
                  type="time"
                  required
                  value={form.time}
                  onChange={handleChange}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-400 transition"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-semibold mb-1.5" htmlFor="location">Location</label>
              <input
                id="location"
                name="location"
                type="text"
                required
                placeholder="Venue address or city"
                value={form.location}
                onChange={handleChange}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition"
              />
            </div>

            {/* Number of guests */}
            <div>
              <label className="block text-sm font-semibold mb-1.5" htmlFor="guests">Number of Guests</label>
              <input
                id="guests"
                name="guests"
                type="number"
                min="1"
                required
                placeholder="Estimated attendance"
                value={form.guests}
                onChange={handleChange}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition"
              />
            </div>

            {/* Occasion */}
            <div>
              <label className="block text-sm font-semibold mb-1.5" htmlFor="occasion">Occasion</label>
              <input
                id="occasion"
                name="occasion"
                type="text"
                required
                placeholder="e.g. Birthday party, Wedding, Concert"
                value={form.occasion}
                onChange={handleChange}
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-400 transition"
              />
            </div>

            {/* Genre */}
            <div>
              <p className="text-sm font-semibold mb-3">Genre of Music <span className="text-gray-400 font-normal">(choose more than one)</span></p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {GENRES.map((genre) => (
                  <label
                    key={genre}
                    className={`flex items-center gap-2.5 rounded-xl border px-4 py-3 text-sm cursor-pointer transition ${
                      form.genres.includes(genre)
                        ? 'border-purple-400 bg-purple-500/10 text-white'
                        : 'border-white/10 bg-white/5 text-gray-300 hover:border-white/30'
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={form.genres.includes(genre)}
                      onChange={() => toggleGenre(genre)}
                    />
                    <span
                      className={`h-4 w-4 rounded border flex items-center justify-center flex-shrink-0 ${
                        form.genres.includes(genre)
                          ? 'border-purple-400 bg-purple-500'
                          : 'border-white/30'
                      }`}
                      aria-hidden="true"
                    >
                      {form.genres.includes(genre) && (
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 10">
                          <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                    {genre}
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-full py-3.5 font-semibold bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition mt-2"
            >
              Send Booking Request
            </button>
          </form>
        </div>
      )}
    </section>
  )
}
