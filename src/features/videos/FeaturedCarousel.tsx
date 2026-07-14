'use client'

import { useState } from 'react'
import { ApiFeaturedVideo, getYouTubeId, getYouTubeThumbnail } from './api'

export default function FeaturedCarousel({ videos }: { videos: ApiFeaturedVideo[] }) {
  const [index, setIndex] = useState(0)
  const total = videos.length

  if (total === 0) {
    return (
      <div className="flex items-center justify-center h-64 rounded-2xl border border-white/10 text-gray-500">
        No featured videos right now.
      </div>
    )
  }

  const prevIndex = (index - 1 + total) % total
  const nextIndex = (index + 1) % total
  const goPrev = () => setIndex((i) => (i - 1 + total) % total)
  const goNext = () => setIndex((i) => (i + 1) % total)
  const current = videos[index]
  const currentId = getYouTubeId(current.youtube_url)

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex items-center justify-center gap-6 w-full max-w-6xl">

        {/* Prev arrow */}
        <button
          onClick={goPrev}
          aria-label="Previous video"
          className="z-20 flex-shrink-0 h-11 w-11 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 flex items-center justify-center transition text-xl"
        >
          ‹
        </button>

        {/* Side preview: previous */}
        {total > 1 && (
          <button
            onClick={goPrev}
            className="hidden md:block relative flex-shrink-0 w-56 aspect-video rounded-xl overflow-hidden border border-white/10 opacity-50 hover:opacity-80 transition"
            aria-label={`Go to ${videos[prevIndex].title}`}
          >
            {(() => {
              const vid = getYouTubeId(videos[prevIndex].youtube_url)
              return vid ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={getYouTubeThumbnail(vid)}
                  alt={videos[prevIndex].title}
                  className="w-full h-full object-cover"
                />
              ) : <div className="w-full h-full bg-zinc-800" />
            })()}
            <div className="absolute inset-0 bg-black/40" />
            <p className="absolute bottom-3 left-3 right-3 text-sm font-semibold text-white truncate">
              {videos[prevIndex].title}
            </p>
          </button>
        )}

        {/* Main featured video */}
        <div className="relative w-full max-w-2xl aspect-video rounded-2xl overflow-hidden border-2 border-purple-500 shadow-[0_0_40px_-10px_rgba(168,85,247,0.6)]">
          {currentId ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={getYouTubeThumbnail(currentId)}
              alt={current.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-zinc-800" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <a
            href={current.youtube_url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Play ${current.title} on YouTube`}
            className="absolute inset-0 flex items-center justify-center group"
          >
            <span className="h-16 w-16 rounded-full bg-purple-600 group-hover:bg-purple-500 flex items-center justify-center text-2xl transition">
              ▶
            </span>
          </a>
          <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
            <h3 className="text-2xl font-bold">{current.title}</h3>
          </div>
        </div>

        {/* Side preview: next */}
        {total > 1 && (
          <button
            onClick={goNext}
            className="hidden md:block relative flex-shrink-0 w-56 aspect-video rounded-xl overflow-hidden border border-white/10 opacity-50 hover:opacity-80 transition"
            aria-label={`Go to ${videos[nextIndex].title}`}
          >
            {(() => {
              const vid = getYouTubeId(videos[nextIndex].youtube_url)
              return vid ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={getYouTubeThumbnail(vid)}
                  alt={videos[nextIndex].title}
                  className="w-full h-full object-cover"
                />
              ) : <div className="w-full h-full bg-zinc-800" />
            })()}
            <div className="absolute inset-0 bg-black/40" />
            <p className="absolute bottom-3 left-3 right-3 text-sm font-semibold text-white truncate">
              {videos[nextIndex].title}
            </p>
          </button>
        )}

        {/* Next arrow */}
        <button
          onClick={goNext}
          aria-label="Next video"
          className="z-20 flex-shrink-0 h-11 w-11 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 flex items-center justify-center transition text-xl"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      {total > 1 && (
        <div className="flex items-center gap-2 mt-10">
          {videos.map((v, i) => (
            <button
              key={v.id}
              onClick={() => setIndex(i)}
              aria-label={`Go to ${v.title}`}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? 'w-6 bg-gradient-to-r from-purple-500 to-blue-400'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
