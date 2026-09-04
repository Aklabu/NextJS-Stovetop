import Image from 'next/image'
import Link from 'next/link'
import { getAdminPlaylists, getImageUrl } from '@/features/radio/api'
import { getFeaturedVideos } from '@/features/videos/api'
import HomeFeaturedVideoCard from './HomeFeaturedVideoCard'
import PrecisionAudioServices from './PrecisionAudioServices'

const staticTrending = [
  { id: '1', title: 'Golden Era', meta: '18 Tracks • Retro Funk', image: '/images/home/golden-era.png' },
  { id: '2', title: 'Neon Nights', meta: '24 Tracks • Cyberwave', image: '/images/home/neon-nights.png' },
  { id: '3', title: 'Deep Groove', meta: '15 Tracks • Minimal Techno', image: '/images/home/deep-groove.png' },
  { id: '4', title: 'Island Flow', meta: '12 Tracks • Afrobeat', image: '/images/home/island-flow.png' },
  { id: '5', title: 'Focus Mode', meta: '40 Tracks • Lofi Beats', image: '/images/home/focus-mode.png' },
]

const featuredVideos = [
  { id: '1', title: 'Sonic Pulse Festival 2024', tag: 'LIVE PERFORMANCE', duration: '12:45', image: '/images/home/sonic-pulse-festival.png' },
  { id: '2', title: 'The Art of Sound Engineering', tag: 'BEHIND THE SOUND', duration: '18:20', image: '/images/home/behind-the-sound.png' },
]

const footerLinks = {
  company: ['Our Story', 'Coalition Members', 'Live Services', 'Careers'],
  social: ['Instagram', 'YouTube Hub', 'SoundCloud', 'Twitter (X)'],
}

export default async function HomePage() {
  const [playlistsData, featuredVideosData] = await Promise.all([
    getAdminPlaylists(),
    getFeaturedVideos(),
  ])
  // Show at most 2 featured videos on the homepage
  const homeFeaturedVideos = featuredVideosData.slice(0, 2)

  const trending = playlistsData.length > 0
    ? playlistsData.slice(0, 5).map((pl) => ({
        id: pl.id,
        title: pl.name,
        meta: `${pl.music_count} Track${pl.music_count !== 1 ? 's' : ''}${pl.description ? ` • ${pl.description}` : ''}`,
        image: getImageUrl(pl.image),
        href: `/radio/playlists/${pl.id}`,
      }))
    : staticTrending.map((item) => ({ ...item, href: '/radio' }))
  return (
    <main className="bg-black text-white">

      {/* ── HERO ── */}
      <section className="relative h-[800px] w-full overflow-hidden flex items-center">
        <Image
          src="/images/home-hero.jpeg"
          alt="DJ performing for a large crowd with stage lighting"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/10" />
        <div className="relative z-10 px-6 md:px-16 max-w-xl">
          <span className="inline-block text-xs font-semibold tracking-widest text-gray-400 mb-4">
            MUSIC PRODUCTION & PROMOTION
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Your Sound,{' '}
            <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Elevated.
            </span>
          </h1>
          <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
            Stovetop Music is a multifaceted production company with various outlets, including radio, videography, live sound, and more.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/radio"
              className="rounded-full px-7 py-3 text-sm font-semibold bg-purple-300 text-black hover:bg-purple-200 transition"
            >
              Explore Music
            </Link>
            <Link
              href="/book-interview"
              className="rounded-full px-7 py-3 text-sm font-semibold border border-white/30 hover:bg-white/10 transition"
            >
              Book An Interview
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRENDING NOW ── */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-extrabold mb-1">Stovetop Radio</h2>
            <p className="text-gray-400 text-sm">Curated vibes from your Favorite DJs.</p>
          </div>
          <Link
            href="/radio"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-gray-300 hover:text-white transition"
          >
            Full Library <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {trending.map((item) => (
            <Link key={item.id} href={item.href} className="group">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10 mb-3">
                {item.image.startsWith('/images/') ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-bold text-sm">{item.title}</h3>
                  <p className="text-[11px] text-gray-300">{item.meta}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── PRECISION AUDIO SERVICES ── */}
      <PrecisionAudioServices />

      {/* ── CUSTOM PLAYLIST CURATION BANNER ── */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden border border-white/10">
          {/* Left: image + submit CTA */}
          <div className="relative aspect-[4/3] md:aspect-auto min-h-[320px]">
            <Image
              src="/images/landing 2.jpg"
              alt="Studio mixing setup"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute inset-0 flex items-center justify-center px-6 py-8">
              <div className="text-center w-full max-w-[260px] mx-auto">
                <h3 className="text-2xl font-bold mb-3">Submit Your Tracks</h3>
                <p className="text-gray-300 text-sm mb-6 leading-relaxed break-words">
                  Join our rotation. We&apos;re looking for the next talented artists to introduce the world.
                </p>
                <Link
                  href="/playlist"
                  className="rounded-full px-7 py-2.5 text-sm font-semibold bg-white text-black hover:bg-gray-200 transition"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
          {/* Right: copy */}
          <div className="bg-white/[0.02] p-10 md:p-14 flex flex-col justify-center">
            <span className="inline-block w-fit rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold tracking-widest text-gray-300 mb-6">
              NEW FEATURE
            </span>
            <h2 className="text-3xl font-extrabold mb-5">
              <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                Featured Artist
              </span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Become a featured artist and ensure that your song catches the listeners&apos; attention.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="rounded-xl border border-white/10 p-4">
                <p className="font-bold text-lg">24/7</p>
                <p className="text-xs text-gray-500">Managed Streaming</p>
              </div>
              <div className="rounded-xl border border-white/10 p-4">
                <p className="font-bold text-lg">Monthly</p>
                <p className="text-xs text-gray-500">Update Cycles</p>
              </div>
            </div>
            <Link
              href="/playlist"
              className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-400 hover:gap-2 transition-all w-fit"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURED VIDEOS ── */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto py-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-extrabold">Featured Videos</h2>
          <Link
            href="/videos"
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold hover:bg-white/10 transition"
          >
            View All Videos
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {homeFeaturedVideos.length > 0
            ? homeFeaturedVideos.map((video) => (
                <HomeFeaturedVideoCard
                  key={video.id}
                  id={video.id}
                  title={video.title}
                  youtubeUrl={video.youtube_url}
                />
              ))
            : /* fallback static cards */
              featuredVideos.map((video) => (
                <Link
                  key={video.id}
                  href="/videos"
                  className="group relative aspect-video rounded-2xl overflow-hidden border border-white/10 block"
                >
                  <Image
                    src={video.image}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <span className="absolute top-4 left-4 rounded bg-black/70 px-2 py-1 text-[10px] font-bold tracking-widest text-gray-200">
                    {video.tag}
                  </span>
                  <span className="absolute top-4 right-4 rounded bg-black/70 px-2 py-1 text-xs font-semibold">
                    {video.duration}
                  </span>
                  <h3 className="absolute bottom-5 left-5 text-lg font-bold">{video.title}</h3>
                </Link>
              ))
          }
        </div>
      </section>

      {/* ── JOIN THE COALITION CTA ── */}
      <section className="px-6 md:px-16 py-24 text-center border-t border-white/10">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">Join The Coalition</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Are you a DJ or Podcaster looking to push boundaries? Let&apos;s partner and
          redefine the radio experience together.
        </p>
        <Link
          href="/partnership"
          className="rounded-full px-10 py-4 font-semibold bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 transition inline-block"
        >
          Partner With Us
        </Link>
      </section>

    </main>
  )
}
