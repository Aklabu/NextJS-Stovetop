import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getFeaturedVideos, getVideoList } from './api'
import FeaturedCarousel from './FeaturedCarousel'
import VideoGrid from './VideoGrid'
import { buildPageWindow } from '@/features/radio/MusicListPage'

const PAGE_SIZE = 6

interface VideosPageProps {
  page: number
}

export default async function VideosPage({ page }: VideosPageProps) {
  const [featuredVideos, { count, next, previous, results: videos }] = await Promise.all([
    getFeaturedVideos(),
    getVideoList(page, PAGE_SIZE),
  ])

  const totalPages = count > 0 ? Math.ceil(count / PAGE_SIZE) : 0
  const baseHref = '/videos'

  return (
    <main className="bg-black text-white py-16 px-6 md:px-16">

      {/* ── FEATURED ── */}
      <section className="max-w-7xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-center mb-16">
          Featured Videos
        </h1>
        <FeaturedCarousel videos={featuredVideos} />
      </section>

      {/* ── ALL VIDEOS ── */}
      <section className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold">All Videos</h2>
            {count > 0 && (
              <p className="text-gray-500 text-sm mt-1">{count} video{count !== 1 ? 's' : ''}</p>
            )}
          </div>
        </div>

        <VideoGrid videos={videos} />

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 flex-wrap mt-14">
            {/* Previous */}
            {previous ? (
              <Link
                href={`${baseHref}?page=${page - 1}`}
                aria-label="Previous page"
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/20 text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </Link>
            ) : (
              <span
                aria-disabled="true"
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 text-gray-600 cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" />
              </span>
            )}

            {/* Page numbers */}
            {buildPageWindow(page, totalPages).map((entry, idx) =>
              entry === '...' ? (
                <span
                  key={`ellipsis-${idx}`}
                  className="w-9 h-9 flex items-center justify-center text-gray-500 text-sm"
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
                      ? 'bg-purple-600 text-white'
                      : 'border border-white/20 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {entry}
                </Link>
              )
            )}

            {/* Next */}
            {next ? (
              <Link
                href={`${baseHref}?page=${page + 1}`}
                aria-label="Next page"
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/20 text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </Link>
            ) : (
              <span
                aria-disabled="true"
                className="flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 text-gray-600 cursor-not-allowed"
              >
                <ChevronRight className="w-4 h-4" />
              </span>
            )}
          </div>
        )}
      </section>

    </main>
  )
}
