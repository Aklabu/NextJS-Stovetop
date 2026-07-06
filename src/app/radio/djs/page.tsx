import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getAllDJs, getImageUrl } from '@/lib/api'

export const metadata = {
  title: 'All DJs | Stovetop Radio',
  description: 'Browse all DJs on Stovetop Radio.',
}

const PAGE_SIZE = 10

export default async function AllDJsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const params = await searchParams
  const page = Math.max(1, parseInt(params.page ?? '1', 10))
  const { count, next, previous, data: djs } = await getAllDJs(page, PAGE_SIZE)

  const totalPages = Math.ceil(count / PAGE_SIZE)

  return (
    <main className="bg-zinc-950 text-white min-h-screen px-6 md:px-16 py-12 max-w-7xl mx-auto">

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
        <p className="text-zinc-400 text-sm mt-1">
          {count > 0 ? `${count} DJs total` : 'Loading…'}
        </p>
      </div>

      {/* DJ Grid */}
      {djs.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
          {djs.map((dj) => (
            <div key={dj.id} className="flex flex-col items-center text-center group cursor-pointer">
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
              <p className="mt-3 text-sm font-semibold text-zinc-100 truncate w-full">{dj.name}</p>
              <p className="text-xs text-fuchsia-400 truncate w-full">
                {dj.total_play_count.toLocaleString()} plays
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-zinc-500 text-center mt-20">No DJs found.</p>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3">
          {/* Previous */}
          {previous ? (
            <Link
              href={`/radio/djs?page=${page - 1}`}
              className="flex items-center gap-1 px-4 py-2 rounded-lg border border-zinc-700 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </Link>
          ) : (
            <span className="flex items-center gap-1 px-4 py-2 rounded-lg border border-zinc-800 text-sm text-zinc-600 cursor-not-allowed">
              <ChevronLeft className="w-4 h-4" /> Previous
            </span>
          )}

          {/* Page numbers */}
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={`/radio/djs?page=${p}`}
                className={`w-9 h-9 rounded-lg text-sm font-semibold flex items-center justify-center transition-colors ${
                  p === page
                    ? 'bg-fuchsia-600 text-white'
                    : 'border border-zinc-700 text-zinc-400 hover:bg-zinc-800 hover:text-white'
                }`}
              >
                {p}
              </Link>
            ))}
          </div>

          {/* Next */}
          {next ? (
            <Link
              href={`/radio/djs?page=${page + 1}`}
              className="flex items-center gap-1 px-4 py-2 rounded-lg border border-zinc-700 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors"
            >
              Next <ChevronRight className="w-4 h-4" />
            </Link>
          ) : (
            <span className="flex items-center gap-1 px-4 py-2 rounded-lg border border-zinc-800 text-sm text-zinc-600 cursor-not-allowed">
              Next <ChevronRight className="w-4 h-4" />
            </span>
          )}
        </div>
      )}

    </main>
  )
}
