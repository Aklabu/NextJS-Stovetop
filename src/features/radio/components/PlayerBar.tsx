'use client'

import { useState } from 'react'
import {
  Shuffle,
  SkipBack,
  Play,
  Pause,
  SkipForward,
  Repeat,
  Mic2,
  Volume2,
} from 'lucide-react'
import { NowPlaying } from '../types'

export default function PlayerBar({ track }: { track: NowPlaying }) {
  const [playing, setPlaying] = useState(true)

  return (
    <div className="fixed bottom-0 left-0 right-0 lg:left-64 bg-zinc-950/95 backdrop-blur border-t border-zinc-900 px-6 py-3 z-20">
      <div className="flex items-center justify-between gap-6 max-w-7xl mx-auto">

        {/* Track info */}
        <div className="flex items-center gap-3 w-64 min-w-0">
          <div
            className={`w-12 h-12 rounded-lg bg-gradient-to-br ${track.gradient} shrink-0`}
          />
          <div className="min-w-0">
            <p className="text-sm font-medium text-white truncate">{track.title}</p>
            <p className="text-xs text-zinc-500 truncate">{track.subtitle}</p>
          </div>
        </div>

        {/* Controls + progress */}
        <div className="flex flex-col items-center flex-1 max-w-xl">
          <div className="flex items-center gap-5">
            <Shuffle className="w-4 h-4 text-zinc-400 hover:text-white cursor-pointer transition-colors" />
            <SkipBack className="w-4 h-4 text-zinc-400 hover:text-white cursor-pointer transition-colors" />
            <button
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? 'Pause' : 'Play'}
              className="w-9 h-9 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              {playing ? (
                <Pause className="w-4 h-4 text-white fill-white" />
              ) : (
                <Play className="w-4 h-4 text-white fill-white ml-0.5" />
              )}
            </button>
            <SkipForward className="w-4 h-4 text-zinc-400 hover:text-white cursor-pointer transition-colors" />
            <Repeat className="w-4 h-4 text-zinc-400 hover:text-white cursor-pointer transition-colors" />
          </div>
          <div className="flex items-center gap-2 w-full mt-2">
            <span className="text-[10px] text-zinc-500 w-8 text-right">
              {track.currentTime}
            </span>
            <div className="flex-1 h-1 rounded-full bg-zinc-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                style={{ width: `${track.progress}%` }}
              />
            </div>
            <span className="text-[10px] text-zinc-500 w-8">{track.duration}</span>
          </div>
        </div>

        {/* Volume */}
        <div className="hidden md:flex items-center gap-4 w-40 justify-end">
          <Mic2 className="w-4 h-4 text-zinc-400 hover:text-white cursor-pointer transition-colors" />
          <Volume2 className="w-4 h-4 text-zinc-400 hover:text-white cursor-pointer transition-colors" />
          <div className="w-16 h-1 rounded-full bg-zinc-800 overflow-hidden">
            <div className="h-full w-2/3 bg-zinc-400" />
          </div>
        </div>

      </div>
    </div>
  )
}
