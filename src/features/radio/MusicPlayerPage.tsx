import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { getMusicDetail, getImageUrl } from './api'
import AudioPlayer from './components/AudioPlayer'

// Badge colours — consistent with MusicListPage
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

interface MusicPlayerPageProps {
  id: string
}

export default async function MusicPlayerPage({ id }: MusicPlayerPageProps) {
  const track = await getMusicDetail(id)
  if (!track) notFound()

  const audioSrc = getImageUrl(track.audio_file)
  const imageSrc = getImageUrl(track.image)

  return (
    <main className="bg-zinc-950 text-white min-h-screen px-6 md:px-16 py-12">
      <div className="max-w-2xl mx-auto">

        {/* Back link */}
        <Link
          href="/radio"
          className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Radio
        </Link>

        {/* Cover art */}
        <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-zinc-800 shadow-2xl mb-8">
          {imageSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={imageSrc}
              alt={track.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900" />
          )}
          {/* Type badge */}
          <span className={`absolute top-4 left-4 rounded px-3 py-1 text-xs font-semibold tracking-widest text-white ${badgeClass(track.music_type)}`}>
            {track.music_type.toUpperCase()}
          </span>
        </div>

        {/* Track info */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white mb-1">{track.name}</h1>

          {/* DJ */}
          <Link
            href={`/radio/djs/${track.dj.id}`}
            className="inline-flex items-center gap-2 group mt-2"
          >
            {track.dj.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={getImageUrl(track.dj.image)}
                alt={track.dj.name}
                className="w-7 h-7 rounded-full object-cover border border-zinc-600"
              />
            )}
            <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">
              {track.dj.name}
            </span>
          </Link>

          {/* Genres */}
          {track.genres.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {track.genres.map((g) => (
                <Link
                  key={g.id}
                  href={`/radio/genres/${g.id}`}
                  className="rounded-full bg-zinc-800 border border-zinc-700 px-3 py-1 text-xs text-fuchsia-400 hover:bg-zinc-700 hover:text-white transition-colors"
                >
                  {g.name}
                </Link>
              ))}
            </div>
          )}

          {/* DJ Mix link */}
          {track.dj_mix && (
            <Link
              href={`/radio/dj-mixes/${track.dj_mix.id}`}
              className="inline-block mt-3 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              From: {track.dj_mix.name}
            </Link>
          )}

          {/* Play count */}
          <p className="text-xs text-zinc-600 mt-3">
            {track.play_count.toLocaleString()} plays
          </p>
        </div>

        {/* Audio player */}
        <AudioPlayer src={audioSrc} trackId={track.id} />

      </div>
    </main>
  )
}
