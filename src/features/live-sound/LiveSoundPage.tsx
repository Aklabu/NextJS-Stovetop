import Image from 'next/image'

const versatilityCards = [
  {
    img: '/images/live-sound-1.png',
    title: 'Intimate Venues',
    desc: 'Perfect for small bars and bands where quality is paramount. We focus on clarity and balance in tight acoustics.',
  },
  {
    img: '/images/live-sound-2.png',
    title: 'Midsize Spaces',
    desc: 'Tailored sound for comedy clubs and medium event spaces. Ensuring every punchline and note reaches the back row.',
  },
  {
    img: '/images/live-sound-3.png',
    title: 'Large Scale Concerts',
    desc: 'High-energy audio for outdoor festivals and major performances. Massive power meets surgical precision.',
  },
]

export default function LiveSoundPage() {
  return (
    <main className="bg-black text-white">

      {/* ── HERO ── */}
      <section className="relative min-h-[900px] w-full overflow-hidden flex items-center">
        <Image
          src="/images/live-sound-3.png"
          alt="Live sound engineer mixing at a festival"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20" />
        <div className="relative z-10 px-6 md:px-16 max-w-2xl py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-gray-200 mb-8">
            <span className="text-cyan-400">▮▮</span> SONIC PRECISION
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6">
            Professional{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Live Sound
            </span>{' '}
            for Any Scale
          </h1>
          <p className="text-gray-300 text-lg mb-10 max-w-lg">
            From intimate bar gigs to stadium-shaking festivals, we provide the
            technical mastery and premium hardware to elevate every performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="rounded-full px-8 py-3 font-semibold bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition">
              Get a Quote
            </button>
            <button className="rounded-full px-8 py-3 font-semibold border border-white/30 hover:bg-white/10 transition">
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* ── AUDIO VERSATILITY ── */}
      <section className="py-16 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Our Audio Versatility
          </h2>
          <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-400" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {versatilityCards.map((card) => (
            <div key={card.title}>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 mb-5">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold">
                  {card.title}
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRANSPARENT PRO RATES ── */}
      <section className="px-6 md:px-16 pb-16">
        <div className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-white/[0.02] grid grid-cols-1 md:grid-cols-2 gap-12 p-10 md:p-16 items-center">

          {/* Left: copy + pricing */}
          <div>
            <h2 className="text-4xl font-extrabold mb-6 leading-tight">
              Transparent{' '}
              <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                Pro Rates
              </span>
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed max-w-md">
              We believe in straightforward pricing for high-end audio
              engineering. No hidden equipment fees — just professional results.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 border-l-2 border-cyan-400 bg-white/5 rounded-r-lg px-5 py-4">
                <span className="text-cyan-400 text-xl" aria-hidden="true">💳</span>
                <div>
                  <p className="font-semibold text-lg">$75 an hour</p>
                  <p className="text-sm text-gray-400">Flat Engineering Rate</p>
                </div>
              </div>
              <div className="flex items-center gap-4 border-l-2 border-purple-400 bg-white/5 rounded-r-lg px-5 py-4">
                <span className="text-purple-400 text-xl" aria-hidden="true">📍</span>
                <div>
                  <p className="font-semibold text-lg">125 Mile Radius</p>
                  <p className="text-sm text-gray-400">Serving all surrounding areas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: coverage badge */}
          <div className="relative flex items-center justify-center">
            <div className="absolute h-72 w-72 rounded-full bg-gradient-to-br from-purple-500/20 via-cyan-400/10 to-transparent blur-2xl" />
            <div className="relative h-72 w-72 rounded-full border border-white/10 flex flex-col items-center justify-center text-center gap-3">
              <p className="text-5xl font-extrabold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                125mi
              </p>
              <p className="text-xs tracking-widest text-gray-300 font-semibold">
                FULL SERVICE COVERAGE
              </p>
              <button className="mt-2 rounded-full px-6 py-2.5 text-sm font-semibold bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition">
                Book Your Event
              </button>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}
