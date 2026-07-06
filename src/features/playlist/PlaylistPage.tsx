import Image from 'next/image'

const benefits = [
  {
    icon: '⭐',
    title: 'Professional Promotion',
    desc: "Get heard by Stovetop's network of elite DJs and industry tastemakers in the scene.",
  },
  {
    icon: '🌐',
    title: 'Global Reach',
    desc: 'Featured across regional radio, exclusive live events, and major streaming platforms.',
  },
  {
    icon: '📈',
    title: 'Organic Growth',
    desc: 'Increase your monthly listeners and brand visibility with targeted placement strategies.',
  },
]

const curationFeatures = [
  {
    icon: '🛡️',
    title: 'Brand Identity',
    desc: 'Music that aligns with your specific aesthetic.',
  },
  {
    icon: '✨',
    title: 'Event Vibe',
    desc: 'Perfect soundtracks for parties, bars, or corporate spaces.',
  },
  {
    icon: '🎧',
    title: 'AI-Assisted Precision',
    desc: 'Blending expert DJ ears with listener preference data.',
  },
]

const playlists = [
  {
    id: '1',
    title: "90's Mixtape Flow",
    tag: 'HIPHOP & R&B',
    listeners: '12.4k',
    image: '/images/playlists/90s-mixtape-flow.jpg',
  },
  {
    id: '2',
    title: 'Reggae Sunday',
    tag: 'REGGAE & DANCEHALL',
    listeners: '8.2k',
    image: '/images/playlists/reggae-sunday.jpg',
  },
  {
    id: '3',
    title: 'James "Smitty" Smith',
    tag: 'CURATED SOUL',
    listeners: '15.1k',
    image: '/images/playlists/james-smitty-smith.jpg',
  },
]

const steps = [
  {
    number: '1',
    title: 'Select Playlist',
    desc: 'Find the perfect genre match for your latest production.',
  },
  {
    number: '2',
    title: 'Upload Track',
    desc: 'Send us your high-quality link (SoundCloud, Spotify, or MP3).',
  },
  {
    number: '3',
    title: 'Get Reviewed',
    desc: 'Our team of expert DJs listens and decides within 72 hours.',
  },
]

export default function PlaylistPage() {
  return (
    <main className="bg-black text-white">

      {/* ── HERO ── */}
      <section className="px-6 md:px-16 max-w-4xl mx-auto py-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-gray-300 mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400" /> ARTIST
          OPPORTUNITY
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-8">
          <span className="bg-gradient-to-r from-purple-300 via-purple-200 to-cyan-300 bg-clip-text text-transparent">
            Get Your Music Featured
          </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          Join the hottest DJ playlists and reach thousands of listeners.
          Showcase your sound alongside the industry&apos;s best curated
          selections.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="rounded-full px-8 py-3 font-semibold bg-purple-300 text-black hover:bg-purple-200 transition">
            Submit Your Track
          </button>
          <button className="rounded-full px-8 py-3 font-semibold border border-white/30 hover:bg-white/10 transition">
            View Playlists
          </button>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto pb-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-8"
          >
            <div className="h-11 w-11 rounded-xl bg-white/5 flex items-center justify-center text-xl mb-6">
              {b.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{b.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
          </div>
        ))}
      </section>

      {/* ── CUSTOM PLAYLIST CURATION ── */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto pb-16">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-teal-900/20 via-black to-black p-10 md:p-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6">
            Custom Playlist Curation
          </h2>
          <p className="text-gray-400 max-w-2xl leading-relaxed mb-12">
            Beyond single submissions, we build entire soundscapes tailored to
            your brand, event, or personal vibe. Not only can you submit music,
            we can create a whole playlist based on your preference.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            {curationFeatures.map((f) => (
              <div key={f.title}>
                <p className="text-xl mb-3" aria-hidden="true">{f.icon}</p>
                <h3 className="font-bold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <button className="rounded-full px-8 py-3 font-semibold border border-purple-400/50 text-purple-300 hover:bg-purple-400/10 transition">
            Request a Custom Playlist
          </button>
        </div>
      </section>

      {/* ── ACTIVE PLAYLISTS ── */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto pb-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-2">
              Active Playlists
            </h2>
            <p className="text-gray-400">
              Choose the right vibe for your latest release
            </p>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-1 text-gray-300 hover:text-white text-sm font-semibold transition"
          >
            Browse all <span aria-hidden="true">›</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {playlists.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl border border-white/10 overflow-hidden bg-white/[0.02]"
            >
              <div className="relative aspect-square">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-4 left-4 rounded bg-black/70 px-2 py-1 text-[10px] font-semibold tracking-widest text-gray-200">
                  {p.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg">{p.title}</h3>
                  <span className="flex items-center gap-1 text-xs text-gray-400 flex-shrink-0 ml-2">
                    <span aria-hidden="true">👥</span> {p.listeners}
                  </span>
                </div>
                <button className="w-full rounded-full py-2.5 text-sm font-semibold bg-white/10 hover:bg-white/20 transition">
                  Submit to this Playlist
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="px-6 md:px-16 max-w-5xl mx-auto pb-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-16">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative mb-16">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center">
              {i < steps.length - 1 && (
                <div className="hidden sm:block absolute top-6 left-1/2 w-full h-px bg-white/10 -z-10" />
              )}
              <div
                className={`h-12 w-12 rounded-xl flex items-center justify-center font-bold text-lg mb-6 border ${
                  step.number === '2'
                    ? 'border-cyan-400/50 text-cyan-400 bg-cyan-400/5'
                    : 'border-white/10 text-gray-400 bg-white/5'
                }`}
              >
                {step.number}
              </div>
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
        <button className="rounded-full px-10 py-4 font-semibold bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition">
          Start Your Submission
        </button>
      </section>

    </main>
  )
}
