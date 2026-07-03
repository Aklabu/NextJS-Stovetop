import { ChevronRight } from 'lucide-react'
import { MediaItem } from '../types'
import MediaCard from './MediaCard'

export default function Section({
  title,
  items,
  eyebrow,
}: {
  title: string
  items: MediaItem[]
  eyebrow?: string
}) {
  return (
    <section className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <div>
          {eyebrow && (
            <p className="text-xs font-semibold tracking-wider text-fuchsia-400 uppercase mb-1">
              {eyebrow}
            </p>
          )}
          <h3 className="text-lg font-bold text-white">{title}</h3>
        </div>
        <button className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors">
          See All <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {items.map((item) => (
          <MediaCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
