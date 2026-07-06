import {
  trendingPlaylists,
  genreTags,
  topDJMixes,
  mashups,
  throwback,
  additionalSections,
  nowPlaying,
} from './mockData'
import { getRecentMusic, getTopDJs, getImageUrl } from '@/lib/api'
import { MediaItem, DJ } from './types'
import Link from 'next/link'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import PlayerBar from './components/PlayerBar'
import Section from './components/Section'
import DJCard from './components/DJCard'
import GenreTile from './components/GenreTile'
import { ChevronRight } from 'lucide-react'

export default async function RadioPage() {
  // Fetch real data from API in parallel
  const [recentTracks, topDJsData] = await Promise.all([
    getRecentMusic(),
    getTopDJs(),
  ])

  const recentlyAdded: MediaItem[] = recentTracks.length > 0
    ? recentTracks.map((track) => ({
        id: track.id,
        title: track.name,
        subtitle: track.dj_name,
        image: getImageUrl(track.image),
        gradient: 'from-zinc-700 to-zinc-900',
      }))
    : [
        { id: 'ra1', title: 'New Wave Mix', gradient: 'from-zinc-700 to-zinc-900' },
        { id: 'ra2', title: 'City Nights', gradient: 'from-zinc-700 to-zinc-900' },
        { id: 'ra3', title: 'Solar Flare', gradient: 'from-amber-800 to-zinc-900' },
        { id: 'ra4', title: 'Underground Beats', gradient: 'from-zinc-700 to-zinc-900' },
        { id: 'ra5', title: 'Dawn Chaser', gradient: 'from-zinc-600 to-zinc-900' },
      ]

  const topDJs: DJ[] = topDJsData.length > 0
    ? topDJsData.map((dj) => ({
        id: dj.id,
        name: dj.name,
        role: `${dj.total_play_count.toLocaleString()} plays`,
        image: getImageUrl(dj.image),
        gradient: 'from-cyan-700 to-blue-900',
      }))
    : [
        { id: 'dj1', name: 'Stovetop Tino', role: 'House Specialist', gradient: 'from-cyan-700 to-blue-900' },
        { id: 'dj2', name: 'DJ Ty Boogie', role: 'Techno King', gradient: 'from-yellow-700 to-amber-900' },
        { id: 'dj3', name: 'Mista Rello', role: 'Reggae Expert', gradient: 'from-zinc-600 to-zinc-800' },
        { id: 'dj4', name: 'DJ Dat Dat Dat', role: 'Hip Hop Guru', gradient: 'from-red-700 to-black' },
        { id: 'dj5', name: 'Blue Note', role: 'Jazz Fusion', gradient: 'from-zinc-700 to-zinc-900' },
      ]

  return (
    <div className="flex bg-zinc-950 text-white min-h-screen">
      <Sidebar />

      {/* Main scroll area */}
      <div className="flex-1 overflow-y-auto pb-28">
        <div className="px-6 py-8 max-w-7xl mx-auto">
          <TopBar />

          {/* Trending Playlists */}
          <Section
            title="Trending Playlists"
            eyebrow="Hot Right Now"
            items={trendingPlaylists}
          />

          {/* Genre Tags */}
          <section className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Browse by Genre</h3>
              <button className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors">
                See All <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {genreTags.map((genre) => (
                <GenreTile key={genre.id} genre={genre} />
              ))}
            </div>
          </section>

          {/* Top DJs — live from API */}
          <section className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Top DJs</h3>
              <Link
                href="/radio/djs"
                className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                See All <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {topDJs.map((dj) => (
                <DJCard key={dj.id} dj={dj} />
              ))}
            </div>
          </section>

          {/* Recently Added — live from API, first 5 only */}
          <Section
            title="Recently Added"
            eyebrow="Just Dropped"
            items={recentlyAdded.slice(0, 5)}
            seeAllHref="/radio/recently-added"
          />

          {/* Top DJ Mixes */}
          <Section title="Top DJ Mixes" eyebrow="Curated Mixes" items={topDJMixes} />

          {/* Mashups */}
          <Section title="Mashups" items={mashups} />

          {/* Throwback */}
          <Section title="Throwback" eyebrow="Classics" items={throwback} />

          {/* Additional genre sections */}
          {additionalSections.map((s) => (
            <Section key={s.id} title={s.title} items={s.items} />
          ))}
        </div>
      </div>

      {/* Sticky player */}
      <PlayerBar track={nowPlaying} />
    </div>
  )
}
