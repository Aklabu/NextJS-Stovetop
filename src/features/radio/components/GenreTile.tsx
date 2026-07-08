export interface GenreTileProps {
  title: string
  banner?: string   // real image URL from API
  gradient?: string // fallback gradient
}

export default function GenreTile({ title, banner, gradient }: GenreTileProps) {
  return (
    <div className="aspect-[4/3] rounded-xl overflow-hidden relative flex items-end p-4 cursor-pointer shadow-lg hover:scale-[1.02] transition-transform duration-200">
      {/* Background: real image or gradient fallback */}
      {banner ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={banner}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient ?? 'from-zinc-700 to-zinc-900'}`} />
      )}
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Label */}
      <span className="relative z-10 text-white font-semibold text-sm">{title}</span>
    </div>
  )
}
