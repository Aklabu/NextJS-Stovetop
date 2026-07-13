import Link from 'next/link'
import { ChevronLeft, ChevronRight, SearchX } from 'lucide-react'
import { searchMusic, getImageUrl } from './api'
import { buildPageWindow } from './MusicListPage'

const PAGE_SIZE = 20

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

interface SearchResultsPageProps {
  q: string
  page: number
}

export default async function SearchResultsPage({ q, page }: SearchResultsPageProps) {
  const { count, next, previous, data: tracks } = await searchMusic(q, page, PAGE_SIZE)
  const totalPages = count > 0 ? Math.ceil(count / PAGE_SIZE) : 0
  const baseHref = `/radio/search?q=${encodeURIComponent(q)}`

  return (
    <main className="bg-zinc-950 text-white min-h-screen px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto">

        {/* Back */}
        <Link
          href="/radio"
          className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Radio
        </Link>

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-wider text-fuchsia-400 uppercase mb-1">
            Search Results
          </p>
          <h1 className="text-3xl font-bold text-white">
            &ldquo;{q}&rdquo;
          </h1>
          <p className="text-zinc-400 text-sm mt-1">
            {count > 0
              ? `${count} result${count !== 1 ? 's' : ''} found`
              : 'No results found'}
          </p>
        </div>

        {/* Results grid */}
        {tracks.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
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

                {/* Info */}
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
          /* Empty state */
          <div className="flex flex-col items-center justify-center mt-24 text-center">
            <SearchX className="w-14 h-14 text-zinc-700 mb-4" />
            <p className="text-zinc-400 text-lg font-medium">No results for &ldquo;{q}&rdquo;</p>
            <p className="text-zinc-600 text-sm mt-1">
              Try a different track name, DJ, or mix.
            </p>
            <Link
              href="/radio"
              className="mt-6 text-sm text-fuchsia-400 hover:text-white transition-colors"
            >
              ← Back to Radio
            </Link>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {/* Previous */}
            {previous ? (
              <Link
                href={`${baseHref}&page=${page - 1}`}
                aria-label="Previous page"
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </Link>
            ) : (
              <span
                aria-disabled="true"
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-zinc-800 text-zinc-600 cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
              </span>
            )}

            {/* Page numbers */}
            {buildPageWindow(page, totalPages).map((entry, idx) =>
              entry === '...' ? (
                <span
                  key={`ellipsis-${idx}`}
                  className="w-9 h-9 flex items-center justify-center text-zinc-500 text-sm"
                >
                  …
                </span>
              ) : (
                <Link
                  key={entry}
                  href={`${baseHref}&page=${entry}`}
                  aria-current={entry === page ? 'page' : undefined}
                  className={`w-9 h-9 rounded-lg text-sm font-semibold flex items-center justify-center transition-colors ${
                    entry === page
                      ? 'bg-fuchsia-600 text-white'
                      : 'border border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:text-white'
                  }`}
                >
                  {entry}
                </Link>
              )
            )}

            {/* Next */}
            {next ? (
              <Link
                href={`${baseHref}&page=${page + 1}`}
                aria-label="Next page"
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </Link>
            ) : (
              <span
                aria-disabled="true"
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-zinc-800 text-zinc-600 cursor-not-allowed"
              >
                <ChevronRight className="w-4 h-4" />
              </span>
            )}
          </div>
        )}

      </div>
    </main>
  )
}
