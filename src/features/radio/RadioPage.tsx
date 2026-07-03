import {
  trendingPlaylists,
  recentlyAdded,
  genreTags,
  topDJs,
  topDJMixes,
  mashups,
  throwback,
  additionalSections,
  nowPlaying,
} from './mockData'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import PlayerBar from './components/PlayerBar'
import Section from './components/Section'
import DJCard from './components/DJCard'
import GenreTile from './components/GenreTile'
import MediaCard from './components/MediaCard'
import { ChevronRight } from 'lucide-react'

export default function RadioPage() {
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

          {/* Top DJs */}
          <section className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white">Top DJs</h3>
              <button className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors">
                See All <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {topDJs.map((dj) => (
                <DJCard key={dj.id} dj={dj} />
              ))}
            </div>
          </section>

          {/* Recently Added */}
          <Section title="Recently Added" items={recentlyAdded} />

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
