import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { getCollectionFolder, getImageUrl } from './api'

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

interface Props {
  section: string
  folderId: string
}

export default async function CollectionFolderPage({ section, folderId }: Props) {
  const folder = await getCollectionFolder(folderId)
  if (!folder) notFound()

  const tracks = folder.music_list.map((item) => item.music)

  return (
    <main className="bg-zinc-950 text-white min-h-screen px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto">

        {/* Back to section */}
        <Link
          href={`/radio/collection/${encodeURIComponent(section)}`}
          className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4" /> Back to {section}
        </Link>

        {/* Folder header */}
        <div className="flex items-start gap-6 mb-10">
          {/* Cover */}
          <div className="w-36 h-36 shrink-0 rounded-2xl overflow-hidden bg-zinc-800 shadow-xl">
            {folder.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={getImageUrl(folder.image)}
                alt={folder.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900" />
            )}
          </div>

          {/* Info */}
          <div className="pt-2">
            <p className="text-xs font-semibold tracking-wider text-fuchsia-400 uppercase mb-1">
              {folder.section}
            </p>
            <h1 className="text-2xl font-bold text-white leading-tight">{folder.name}</h1>
            <p className="text-zinc-400 text-sm mt-1">
              {folder.music_count} track{folder.music_count !== 1 ? 's' : ''}
            </p>
          </div>
        </div>

        {/* Tracks grid */}
        {tracks.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {tracks.map((track) => (
              <Link key={track.id} href={`/radio/music/${track.id}`} className="group block">
                {/* Thumbnail */}
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
                  <span
                    className={`absolute top-2 left-2 rounded px-2 py-0.5 text-[10px] font-semibold tracking-widest text-white ${badgeClass(track.music_type)}`}
                  >
                    {track.music_type.toUpperCase()}
                  </span>
                </div>

                <p className="text-sm font-semibold text-zinc-100 truncate">{track.name}</p>
                <p className="text-xs text-zinc-500 truncate">{track.dj_name}</p>
                {track.dj_mix_name && (
                  <p className="text-xs text-zinc-600 truncate">{track.dj_mix_name}</p>
                )}
                <p className="text-xs text-fuchsia-400 mt-0.5 truncate uppercase tracking-wide">
                  {track.genre_names}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center mt-20">
            <p className="text-zinc-500">This folder has no tracks yet.</p>
            <Link
              href={`/radio/collection/${encodeURIComponent(section)}`}
              className="text-fuchsia-400 text-sm mt-4 inline-block hover:text-white"
            >
              ← Back to {section}
            </Link>
          </div>
        )}

      </div>
    </main>
  )
}
