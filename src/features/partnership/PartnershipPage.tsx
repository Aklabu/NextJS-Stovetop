import Image from 'next/image'

const cards = [
  {
    img: '/images/Partnership-3.png',
    title: 'Videographer',
    desc: 'Travel to different cities capturing exclusive footage, and live streaming the hottest parties, events and social gatherings. Build a world-class portfolio.',
    cta: 'Submit Portfolio',
  },
  {
    img: '/images/Partnership-4.png',
    title: 'Promotion Team',
    desc: 'Like, comment, repost and share recent stories, videos and photos. Receive free merchandise and exclusive VIP access to our premier events.',
    cta: 'Join the Team',
  },
]

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
            <button className="rounded-full px-8 py-3 font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition">
              Apply Now
            </button>
            <button className="rounded-full px-8 py-3 font-semibold text-white border border-white/40 hover:bg-white/10 transition">
              View Roles
            </button>
          </div>
        </div>
      </section>

      {/* ── STOVETOP DJS ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 md:px-16 py-24 max-w-7xl mx-auto">
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
          <button className="rounded-full px-8 py-3 font-semibold bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition">
            Join the Coalition
          </button>
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
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xl mb-2">🎙️</p>
                <p className="text-sm text-gray-200">Podcast Hosting</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xl mb-2">📻</p>
                <p className="text-sm text-gray-200">Live FM Streaming</p>
              </div>
            </div>
            <button className="rounded-full px-8 py-3 font-semibold bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition">
              Apply for Radio
            </button>
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
            <p className="text-gray-400 mb-4 leading-relaxed">{card.desc}</p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:gap-3 transition-all"
            >
              {card.cta} <span aria-hidden="true">→</span>
            </a>
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
        <button className="rounded-full px-10 py-4 font-semibold bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 transition">
          Get In Touch
        </button>
      </section>
    </main>
  )
}
