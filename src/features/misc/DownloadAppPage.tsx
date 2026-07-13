import Link from 'next/link'

const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.app.stovetopmusic&hl=en'
const APP_STORE_URL = '#' // Not yet available

const features = [
  {
    icon: '🎵',
    title: 'Personalised For You',
    desc: 'The more you listen, the smarter it gets. Discover tracks matched to your taste.',
  },
  {
    icon: '📻',
    title: 'Stovetop Radio On The Go',
    desc: 'Stream live DJ mixes, curated playlists, and fresh drops anywhere, anytime.',
  },
  {
    icon: '📂',
    title: 'Browse Collections',
    desc: 'Explore Mashups, Throwback, R&B, Hip Hop, Reggae and more — all in one place.',
  },
  {
    icon: '🔔',
    title: 'New Music Alerts',
    desc: 'Get notified the moment your favourite DJs drop something new.',
  },
]

export default function DownloadAppPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden px-6 md:px-16 py-24 text-center">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-purple-700/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-cyan-700/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          {/* App icon */}
          <div className="mx-auto mb-8 w-24 h-24 rounded-3xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center shadow-2xl shadow-purple-900/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          </div>

          <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-xs font-bold tracking-widest text-purple-300 mb-5">
            STOVETOP RADIO APP
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-5">
            Your Music,{' '}
            <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Personalised.
            </span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Take the full Stovetop Radio experience everywhere you go. Better
            recommendations, offline listening, and a feed that actually knows
            what you want to hear.
          </p>

          {/* Store buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            {/* Google Play */}
            <Link
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all px-6 py-4 w-full sm:w-auto min-w-[200px]"
              aria-label="Download on Google Play"
            >
              {/* Google Play icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 shrink-0"
                viewBox="0 0 512 512"
                aria-hidden="true"
              >
                <path
                  d="M48 59.5v393C48 464 56.4 474 68 474c5.8 0 11.8-2.3 16.7-7.1L280 275.7 84.7 66.6C79.8 61.8 73.8 59.5 68 59.5c-11.6 0-20 10-20 20z"
                  fill="#32BBFF"
                />
                <path
                  d="M348 208l-67.2-39.1L84.7 66.6C89.8 61.6 96.3 59 103 59c6.6 0 13.2 2.7 18.3 7.9L348 208z"
                  fill="#32BBFF"
                />
                <path
                  d="M464 256c0 12.8-6.8 24.1-18 30.5L348 344 280.8 275.7 348 208l98 57.5c11.2 6.4 18 17.7 18 30.5z"
                  fill="#FFD400"
                />
                <path
                  d="M121.3 453.1c-5.1 5.2-11.7 7.9-18.3 7.9-6.7 0-13.2-2.6-18.3-7.6l195.3-201.7L348 344l-226.7 109.1z"
                  fill="#FF3333"
                />
                <path
                  d="M348 208L121.3 66.9C116.2 61.7 109.6 59 103 59c6.6 0 13.2 2.7 18.3 7.9L348 208z"
                  fill="#00F076"
                />
              </svg>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 leading-none mb-0.5">GET IT ON</p>
                <p className="text-base font-bold text-white leading-none">Google Play</p>
              </div>
            </Link>

            {/* App Store — coming soon */}
            <div
              className="relative flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 px-6 py-4 w-full sm:w-auto min-w-[200px] opacity-60 cursor-not-allowed select-none"
              aria-label="App Store — coming soon"
              title="App Store link coming soon"
            >
              {/* Apple icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 shrink-0 text-white"
                viewBox="0 0 814 1000"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105.3-55.5-155.5-127.4C46 385.5 36.3 244.4 62.5 171.8c18.4-50.7 56.6-91.4 108.7-115.1 56.8-25.6 116.4-27.8 168.3-27.8 55.3 0 98.2 37.9 153.6 37.9 53.1 0 86.6-38.3 165.5-38.3 48.1 0 100 12.8 140.5 44.2zm-71.5-106.1c-22.1-26.2-55.3-45.2-88.1-45.2-31.6 0-50.9 16.4-73 39.5-24.2 25.5-44.5 64.6-44.5 107.2 0 6.4.6 12.8 1.3 15.7 2.6.3 6.4.6 10.3.6 27.8 0 58.7-17 79.4-40.8 21.4-24.6 36.7-63.3 36.7-106.3 0-5.5-.3-11-.3-11z"/>
              </svg>
              <div className="text-left">
                <p className="text-[10px] text-gray-400 leading-none mb-0.5">DOWNLOAD ON THE</p>
                <p className="text-base font-bold text-white leading-none">App Store</p>
              </div>
              <span className="absolute -top-2.5 -right-2.5 rounded-full bg-purple-600 px-2 py-0.5 text-[9px] font-bold tracking-widest text-white">
                SOON
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="px-6 md:px-16 max-w-5xl mx-auto py-20">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-12">
          Why Download the App?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex items-start gap-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <span className="text-3xl shrink-0" aria-hidden="true">{f.icon}</span>
              <div>
                <h3 className="font-bold text-white mb-1">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="px-6 md:px-16 py-20 text-center border-t border-white/10">
        <p className="text-gray-500 text-sm mb-3">Available now on Android</p>
        <Link
          href={GOOGLE_PLAY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-semibold text-sm bg-gradient-to-r from-purple-600 to-cyan-500 hover:opacity-90 transition"
        >
          Get it on Google Play
        </Link>
        <p className="text-gray-600 text-xs mt-4">iOS coming soon</p>
      </section>

    </main>
  )
}
