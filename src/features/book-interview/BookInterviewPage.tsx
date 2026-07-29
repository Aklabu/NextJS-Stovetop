'use client'

import Image from 'next/image'
import { useState } from 'react'

const formats = [
  {
    id: 'in-studio',
    icon: '📡',
    title: 'In-Studio Session',
    desc: 'High-fidelity recording at our main hub. Best for local artists and brand owners.',
  },
  {
    id: 'zoom',
    icon: '🎥',
    title: 'Remote via Zoom',
    desc: 'Professional broadcast from anywhere in the world. High-quality digital patch.',
  },
]

const stats = [
  {
    icon: '👥',
    title: 'Global Reach',
    desc: 'Average 50k weekly listeners across all digital streams.',
  },
  {
    icon: '🎬',
    title: 'Social Clips',
    desc: 'Every interview is filmed and clipped for Instagram & TikTok.',
  },
  {
    icon: '⚡',
    title: 'Live Distribution',
    desc: 'Simultaneous broadcast on Twitch, YouTube, and FM.',
  },
]

const prepSteps = [
  {
    bold: 'Press Kit:',
    text: 'Ensure you have a high-res photo and a 1-page bio ready to share.',
  },
  {
    bold: 'Audio Check:',
    text: 'For Zoom interviews, use a dedicated microphone and headphones.',
  },
  {
    bold: 'Arrival:',
    text: 'If in-studio, please arrive 15 minutes prior for soundcheck.',
  },
]

const timeSlots = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
]

export default function BookInterviewPage() {
  const [selectedFormat, setSelectedFormat] = useState('in-studio')
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    date: '',
    time: '09:00 AM',
    notes: '',
  })

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function buildGmailUrl() {
    const format = formats.find((f) => f.id === selectedFormat)
    const subject = encodeURIComponent('Interview Booking Request – Stovetop Radio')
    const body = encodeURIComponent(
      `Format: ${format?.title ?? selectedFormat}\n` +
      `Full Name: ${form.fullName}\n` +
      `Email: ${form.email}\n` +
      `Date: ${form.date}\n` +
      `Preferred Time (EST): ${form.time}\n` +
      `Talking Points & Promotion Goals:\n${form.notes}`
    )
    return `https://mail.google.com/mail/?view=cm&to=stovetopradio@gmail.com&su=${subject}&body=${body}`
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    window.open(buildGmailUrl(), '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="bg-black text-white">

      {/* ── HERO ── */}
      <section className="relative h-[750px] w-full overflow-hidden">
        <Image
          src="/images/Partnership-2.png"
          alt="Radio host live on air"
          fill
          priority
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <span className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-gray-300 mb-8">
            LIVE ON AIR
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
            Book Your{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Interview
            </span>
          </h1>
          <p className="max-w-xl text-gray-300 text-lg">
            Promote your business, music, and events live at our station or via
            Zoom. Join the elite frequency of Stovetop DJs.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT: Format + Prep */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Choose Your Format</h2>
          <div className="space-y-6 mb-8">
            {formats.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setSelectedFormat(f.id)}
                className={`w-full text-left rounded-2xl border p-6 transition ${
                  selectedFormat === f.id
                    ? 'border-cyan-400 bg-white/5'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <p className="text-2xl mb-4">{f.icon}</p>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </button>
            ))}
          </div>

          {/* Interview Prep */}
          <div className="rounded-2xl border border-white/10 p-8">
            <h3 className="flex items-center gap-2 text-xl font-bold mb-6">
              <span className="text-lg" aria-hidden="true">ⓘ</span>
              Interview Preparation
            </h3>
            <ol className="space-y-5">
              {prepSteps.map((step, i) => (
                <li key={step.bold} className="flex gap-4">
                  <span className="flex-shrink-0 h-7 w-7 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold">
                    {i + 1}
                  </span>
                  <p className="text-gray-300 leading-relaxed">
                    <span className="font-semibold text-white">{step.bold}</span>{' '}
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* RIGHT: Scheduling Form */}
        <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-10 overflow-hidden">
          {/* top gradient accent line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400" />

          <h2 className="text-3xl font-bold mb-8">Scheduling Details</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-semibold tracking-widest text-gray-400 mb-2"
                >
                  FULL NAME
                </label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="e.g. DJ Starlight"
                  className="w-full bg-white/5 border-b border-white/20 focus:border-cyan-400 outline-none py-2 text-white placeholder-gray-500 transition"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold tracking-widest text-gray-400 mb-2"
                >
                  EMAIL ADDRESS
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full bg-white/5 border-b border-white/20 focus:border-cyan-400 outline-none py-2 text-white placeholder-gray-500 transition"
                />
              </div>
              <div>
                <label
                  htmlFor="date"
                  className="block text-xs font-semibold tracking-widest text-gray-400 mb-2"
                >
                  SELECT DATE
                </label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full bg-white/5 border-b border-white/20 focus:border-cyan-400 outline-none py-2 text-white [color-scheme:dark] transition"
                />
              </div>
              <div>
                <label
                  htmlFor="time"
                  className="block text-xs font-semibold tracking-widest text-gray-400 mb-2"
                >
                  PREFERRED TIME (EST)
                </label>
                <select
                  id="time"
                  name="time"
                  value={form.time}
                  onChange={handleChange}
                  className="w-full bg-white/5 border-b border-white/20 focus:border-cyan-400 outline-none py-2 text-white transition"
                >
                  {timeSlots.map((t) => (
                    <option key={t} value={t} className="bg-black">
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="notes"
                className="block text-xs font-semibold tracking-widest text-gray-400 mb-2"
              >
                TALKING POINTS &amp; PROMOTION GOALS
              </label>
              <textarea
                id="notes"
                name="notes"
                value={form.notes}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your upcoming project or event..."
                className="w-full bg-white/5 border-b border-white/20 focus:border-cyan-400 outline-none py-2 text-white placeholder-gray-500 resize-none transition"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full py-4 font-semibold bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition"
            >
              Confirm Interview Request
            </button>

            <p className="text-center text-xs text-gray-500">
              By booking, you agree to our Radio Content &amp; Broadcaster
              Terms.
            </p>
          </form>
        </div>
      </section>

      {/* ── INTERVIEW PRICING ── */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto pb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Interview Packages</h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Choose the package that fits your promotion goals.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {[
            {
              id: 'interview-15',
              title: 'Pre-Recorded Interview',
              detail: '15 Minutes',
              price: '$125',
              desc: 'Includes Raw Video',
            },
            {
              id: 'interview-30',
              title: 'Pre-Recorded Interview',
              detail: '30 Minutes',
              price: '$225',
              desc: 'Social clips built for Reels / TikTok / Shorts',
            },
          ].map((pkg) => (
            <div
              key={pkg.id}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:border-purple-400/50 hover:bg-purple-900/10 transition-all duration-200"
            >
              <h3 className="text-lg font-bold mb-1">{pkg.title}</h3>
              <p className="text-sm text-gray-400 mb-3">{pkg.detail}</p>
              <p className="text-4xl font-extrabold text-white mb-4">{pkg.price}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{pkg.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="border-t border-white/10 px-6 md:px-16 max-w-7xl mx-auto py-14 grid grid-cols-1 sm:grid-cols-3 gap-10">
        {stats.map((s) => (
          <div key={s.title}>
            <p className="text-2xl mb-4" aria-hidden="true">{s.icon}</p>
            <h3 className="text-xl font-bold mb-2">{s.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </section>

    </main>
  )
}
