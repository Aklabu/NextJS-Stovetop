import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ApiMusic, getImageUrl } from '@/features/radio/api'

// Music-type badge colours
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

/**
 * Build a page-number window with ellipsis.
 * Always shows first, last, current ±2, with '...' gaps.
 */
export function buildPageWindow(current: number, total: number): (number | '...')[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1)
  }

  const pages: (number | '...')[] = []
  const delta = 2
  const range: number[] = []

  for (
    let i = Math.max(2, current - delta);
    i <= Math.min(total - 1, current + delta);
    i++
  ) {
    range.push(i)
  }

  pages.push(1)
  if (range[0] > 2) pages.push('...')
  pages.push(...range)
  if (range[range.length - 1] < total - 1) pages.push('...')
  pages.push(total)

  return pages
}

export interface MusicListPageProps {
  /** Eyebrow label shown above the title */
  eyebrow: string
  /** Main heading */
  title: string
  /** Optional subtitle / description */
  description?: string
  /** Tracks to render */
  tracks: ApiMusic[]
  /** Total track count (used for header copy) */
  count: number
  /** Current page number */
  page: number
  /** Total number of pages */
  totalPages: number
  /** Whether a next page exists */
  hasNext: boolean
  /** Whether a previous page exists */
  hasPrevious: boolean
  /** Base URL for pagination links, e.g. "/radio/music" or "/radio/genres/abc" */
  baseHref: string
  /** Back-link destination */
  backHref: string
  /** Back-link label */
  backLabel?: string
}

export default function MusicListPage({
  eyebrow,
  title,
  description,
  tracks,
  count,
  page,
  totalPages,
  hasNext,
  hasPrevious,
  baseHref,
  backHref,
  backLabel = 'Back to Radio',
}: MusicListPageProps) {
  return (
    <main className="bg-zinc-950 text-white min-h-screen px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto">

        {/* Back link */}
        <Link
          href={backHref}
          className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4" /> {backLabel}
        </Link>

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-wider text-fuchsia-400 uppercase mb-1">
            {eyebrow}
          </p>
          <h1 className="text-3xl font-bold text-white">{title}</h1>
          <p className="text-zinc-400 text-sm mt-1">
            {description ?? `The ${count} most recently added tracks and professional DJ mixes curated for the night.`}
          </p>
        </div>

        {/* Grid */}
        {tracks.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
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
                  <span
                    className={`absolute top-2 left-2 rounded px-2 py-0.5 text-[10px] font-semibold tracking-widest text-white ${badgeClass(track.music_type)}`}
                  >
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
        ) : (
          <div className="text-center mt-20">
            <p className="text-zinc-500">No music found.</p>
            <Link
              href={backHref}
              className="text-fuchsia-400 text-sm mt-4 inline-block hover:text-white"
            >
              ← {backLabel}
            </Link>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {/* Previous */}
            {hasPrevious ? (
              <Link
                href={`${baseHref}?page=${page - 1}`}
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
                  href={`${baseHref}?page=${entry}`}
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
            {hasNext ? (
              <Link
                href={`${baseHref}?page=${page + 1}`}
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
