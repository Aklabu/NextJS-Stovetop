'use client'

import Image from 'next/image'
import { Video } from './types'

export default function VideoGrid({ videos }: { videos: Video[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {videos.map((video) => (
        <a
          key={video.id}
          href={video.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          aria-label={`Watch ${video.title}`}
        >
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 mb-4">
            <Image
              src={video.thumbnail}
              alt={video.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">
              <span className="h-12 w-12 rounded-full bg-purple-600/90 opacity-0 group-hover:opacity-100 flex items-center justify-center text-lg transition">
                ▶
              </span>
            </div>
            <span className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-1 text-xs font-semibold">
              {video.duration}
            </span>
          </div>
          <h3 className="text-lg font-bold group-hover:text-cyan-400 transition">
            {video.title}
          </h3>
          <p className="text-sm text-gray-500">{video.category}</p>
        </a>
      ))}
    </div>
  )
}
