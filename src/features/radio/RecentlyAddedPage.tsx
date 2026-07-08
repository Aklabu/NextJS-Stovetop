import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { getRecentMusic, getImageUrl } from './api'

export default async function RecentlyAddedPage() {
  const tracks = await getRecentMusic()

  return (
    <main className="bg-zinc-950 text-white min-h-screen px-6 md:px-16 py-12 max-w-7xl mx-auto">

      <Link href="/radio" className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors mb-8">
        <ChevronLeft className="w-4 h-4" /> Back to Radio
      </Link>

      <div className="mb-10">
        <p className="text-xs font-semibold tracking-wider text-fuchsia-400 uppercase mb-1">Just Dropped</p>
        <h1 className="text-3xl font-bold text-white">Recently Added</h1>
        <p className="text-zinc-400 text-sm mt-1">The {tracks.length} most recently added tracks</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {tracks.map((track) => (
          <div key={track.id} className="group cursor-pointer">
            <div className="aspect-square rounded-xl overflow-hidden relative bg-zinc-800 shadow-lg group-hover:scale-[1.02] transition-transform duration-200 mb-2">
              {track.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={getImageUrl(track.image)} alt={track.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900" />
              )}
              <span className="absolute top-2 left-2 rounded bg-black/70 px-2 py-0.5 text-[10px] font-semibold tracking-widest text-zinc-300">
                {track.music_type.toUpperCase()}
              </span>
            </div>
            <p className="text-sm font-semibold text-zinc-100 truncate">{track.name}</p>
            <p className="text-xs text-zinc-500 truncate">{track.dj_name}</p>
            <p className="text-xs text-fuchsia-400 mt-0.5 truncate">{track.genre_names}</p>
          </div>
        ))}
      </div>

      {tracks.length === 0 && (
        <p className="text-zinc-500 text-center mt-20">No tracks available right now. Check back soon.</p>
      )}

    </main>
  )
}
