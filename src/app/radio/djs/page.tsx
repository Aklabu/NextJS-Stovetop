import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getAllDJs, getImageUrl } from '@/features/radio/api'
import { buildPageWindow } from '@/features/radio/MusicListPage'

export const metadata = {
  title: 'All DJs | Stovetop Radio',
  description: 'Browse all DJs on Stovetop Radio.',
}

const PAGE_SIZE = 20

interface PageProps {
  searchParams: Promise<{ page?: string }>
}

export default async function AllDJsPage({ searchParams }: PageProps) {
  const params = await searchParams
  const page = Math.max(1, parseInt(params?.page ?? '1', 10))

  const { count, next, previous, data: djs } = await getAllDJs(page, PAGE_SIZE)
  const totalPages = count > 0 ? Math.ceil(count / PAGE_SIZE) : 0

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
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white">All DJs</h1>
          {count > 0 && (
            <p className="text-zinc-400 text-sm mt-1">{count} DJs total</p>
          )}
        </div>

        {/* DJ Grid */}
        {djs.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
            {djs.map((dj) => (
              <Link
                key={dj.id}
                href={`/radio/djs/${dj.id}`}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-full aspect-square rounded-full overflow-hidden shadow-lg bg-zinc-800 group-hover:scale-[1.03] transition-transform duration-200">
                  {dj.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={getImageUrl(dj.image)}
                      alt={dj.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-cyan-700 to-blue-900" />
                  )}
                </div>
                <p className="mt-3 text-sm font-semibold text-zinc-100 truncate w-full">
                  {dj.name}
                </p>
                <p className="text-xs text-fuchsia-400 truncate w-full">
                  {dj.total_play_count.toLocaleString()} plays
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center mt-20">
            <p className="text-zinc-500">No DJs found.</p>
            <Link href="/radio" className="text-fuchsia-400 text-sm mt-4 inline-block hover:text-white">
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
                href={`/radio/djs?page=${page - 1}`}
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
                  href={`/radio/djs?page=${entry}`}
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
                href={`/radio/djs?page=${page + 1}`}
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
