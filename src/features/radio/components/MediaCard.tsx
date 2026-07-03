import { MediaItem } from '../types'

export default function MediaCard({ item }: { item: MediaItem }) {
  return (
    <div className="group cursor-pointer">
      <div
        className={`aspect-square rounded-xl bg-gradient-to-br ${item.gradient} overflow-hidden relative shadow-lg group-hover:scale-[1.02] transition-transform duration-200`}
      >
        {item.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
        )}
      </div>
      <p className="mt-2 text-sm font-medium text-zinc-100 truncate">{item.title}</p>
      {item.subtitle && (
        <p className="text-xs text-zinc-500 truncate">{item.subtitle}</p>
      )}
    </div>
  )
}
