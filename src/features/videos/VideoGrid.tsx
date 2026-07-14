'use client'

import { ApiVideo, getYouTubeId, getYouTubeThumbnail } from './api'

export default function VideoGrid({ videos }: { videos: ApiVideo[] }) {
  if (videos.length === 0) {
    return (
      <p className="text-gray-500 text-center py-20">No videos available right now.</p>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {videos.map((video) => {
        const videoId = getYouTubeId(video.youtube_url)
        const thumbnail = videoId ? getYouTubeThumbnail(videoId) : null

        return (
          <a
            key={video.id}
            href={video.youtube_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label={`Watch ${video.title} on YouTube`}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 mb-4 bg-zinc-900">
              {thumbnail ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900" />
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">
                <span className="h-12 w-12 rounded-full bg-purple-600/90 opacity-0 group-hover:opacity-100 flex items-center justify-center text-lg transition">
                  ▶
                </span>
              </div>
            </div>
            <h3 className="text-base font-bold group-hover:text-cyan-400 transition line-clamp-2">
              {video.title}
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              {new Date(video.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </p>
          </a>
        )
      })}
    </div>
  )
}
