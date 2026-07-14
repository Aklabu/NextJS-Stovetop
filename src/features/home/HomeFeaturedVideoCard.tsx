'use client'

import { useState } from 'react'
import { getYouTubeId, getYouTubeThumbnail } from '@/features/videos/api'

interface Props {
  id: string
  title: string
  youtubeUrl: string
}

export default function HomeFeaturedVideoCard({ title, youtubeUrl }: Props) {
  const [playing, setPlaying] = useState(false)
  const videoId = getYouTubeId(youtubeUrl)
  const thumbnail = videoId ? getYouTubeThumbnail(videoId) : null

  return (
    <div className="group relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-zinc-900">
      {playing && videoId ? (
        <iframe
          key={videoId}
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <>
          {thumbnail ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <button
            onClick={() => setPlaying(true)}
            aria-label={`Play ${title}`}
            className="absolute inset-0 flex items-center justify-center group/play"
          >
            <span className="h-14 w-14 rounded-full bg-purple-600 group-hover/play:bg-purple-500 flex items-center justify-center text-xl transition opacity-80 group-hover:opacity-100">
              ▶
            </span>
          </button>
          <h3 className="absolute bottom-5 left-5 right-5 text-lg font-bold pointer-events-none">
            {title}
          </h3>
        </>
      )}
    </div>
  )
}
