import { featuredVideos, allVideos } from './mockData'
import FeaturedCarousel from './FeaturedCarousel'
import VideoGrid from './VideoGrid'

export default function VideosPage() {
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
          <h2 className="text-3xl font-bold">All Videos</h2>
          <button
            aria-label="Filter videos"
            className="h-11 w-11 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 flex items-center justify-center transition"
          >
            ☰
          </button>
        </div>
        <VideoGrid videos={allVideos} />
      </section>

    </main>
  )
}
