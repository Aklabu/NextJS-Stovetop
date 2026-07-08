import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { getAdminPlaylists, getImageUrl, ApiMusic } from '@/features/radio/api'

// Music-type badge colours — shared with MusicListPage
const BADGE_COLOURS: Record<string, string> = {
  mix: 'bg-violet-600/80',
  track: 'bg-fuchsia-600/80',
  single: 'bg-fuchsia-600/80',
  podcast: 'bg-blue-600/80',
  album: 'bg-amber-600/80',
}
function badgeClass(type: string): string {
  return BADGE_COLOURS[type.toLowerCase()] ?? 'bg-zinc-700/80'
}

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const playlists = await getAdminPlaylists()
  const pl = playlists.find((p) => p.id === id)
  if (!pl) return { title: 'Playlist | Stovetop Radio' }
  return {
    title: `${pl.name} | Stovetop Radio`,
    description: pl.description || `Browse ${pl.name} on Stovetop Radio.`,
  }
}

export default async function PlaylistDetailPage({ params }: PageProps) {
  const { id } = await params
  const playlists = await getAdminPlaylists()
  const playlist = playlists.find((p) => p.id === id)
  if (!playlist) notFound()

  const tracks: ApiMusic[] = playlist.music_list.map((pm) => pm.music)
  const topSongs: ApiMusic[] = playlist.top_songs.map((pm) => pm.music)

  return (
    <main className="bg-zinc-950 text-white min-h-screen px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto">

        {/* Back link */}
        <Link
          href="/radio"
          className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Radio
        </Link>

        {/* Header */}
        <div className="flex items-start gap-6 mb-10">
          {playlist.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={getImageUrl(playlist.image)}
              alt={playlist.name}
              className="w-32 h-32 rounded-xl object-cover shadow-lg border border-zinc-700 shrink-0"
            />
          )}
          <div>
            <p className="text-xs font-semibold tracking-wider text-fuchsia-400 uppercase mb-1">
              Playlist
            </p>
            <h1 className="text-3xl font-bold text-white">{playlist.name}</h1>
            {playlist.description && (
              <p className="text-zinc-400 text-sm mt-1">{playlist.description}</p>
            )}
            <p className="text-zinc-500 text-xs mt-2">
              {playlist.music_count} song{playlist.music_count !== 1 ? 's' : ''} · Curated by {playlist.created_by_name}
            </p>
          </div>
        </div>

        {/* All Music — card grid */}
        {tracks.length > 0 && (
          <section className="mb-14">
            <h2 className="text-lg font-bold text-white mb-6">All Songs</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {tracks.map((track) => (
                <div key={track.id} className="group cursor-pointer">
                  <div className="aspect-square rounded-xl overflow-hidden relative bg-zinc-800 shadow-lg group-hover:scale-[1.02] transition-transform duration-200 mb-2">
                    {track.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={getImageUrl(track.image)}
                        alt={track.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900" />
                    )}
                    <span className={`absolute top-2 left-2 rounded px-2 py-0.5 text-[10px] font-semibold tracking-widest text-white ${badgeClass(track.music_type)}`}>
                      {track.music_type.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-zinc-100 truncate">{track.name}</p>
                  <p className="text-xs text-zinc-500 truncate">{track.dj_name}</p>
                  <p className="text-xs text-fuchsia-400 mt-0.5 truncate uppercase tracking-wide">
                    {track.genre_names}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Top Songs — row list */}
        {topSongs.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-white mb-4">Top Songs</h2>
            <div className="flex flex-col divide-y divide-zinc-800">
              {topSongs.map((track, idx) => (
                <div key={track.id} className="flex items-center gap-4 py-3 group cursor-pointer hover:bg-zinc-900/50 rounded-lg px-2 transition-colors">
                  {/* Rank */}
                  <span className="w-6 text-center text-sm text-zinc-600 font-semibold shrink-0">
                    {idx + 1}
                  </span>
                  {/* Thumbnail */}
                  <div className="w-10 h-10 rounded-lg overflow-hidden bg-zinc-800 shrink-0">
                    {track.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={getImageUrl(track.image)}
                        alt={track.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900" />
                    )}
                  </div>
                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-zinc-100 truncate">{track.name}</p>
                    <p className="text-xs text-zinc-500 truncate">{track.dj_name}</p>
                  </div>
                  {/* Genre */}
                  <span className="text-xs text-fuchsia-400 uppercase tracking-wide shrink-0 hidden sm:block">
                    {track.genre_names}
                  </span>
                  {/* Play count */}
                  <span className="text-xs text-zinc-600 shrink-0">
                    {track.play_count.toLocaleString()} plays
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Empty state */}
        {tracks.length === 0 && (
          <p className="text-zinc-500 text-center mt-20">No songs in this playlist yet.</p>
        )}

      </div>
    </main>
  )
}
