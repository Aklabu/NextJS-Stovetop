import Link from 'next/link'
import { DJ } from '../types'

interface DJCardProps {
  dj: DJ
  href?: string
}

export default function DJCard({ dj, href }: DJCardProps) {
  const inner = (
    <>
      <div
        className={`w-full aspect-square rounded-full overflow-hidden shadow-lg group-hover:scale-[1.03] transition-transform duration-200 ${
          dj.image ? '' : `bg-gradient-to-br ${dj.gradient}`
        }`}
      >
        {dj.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={dj.image}
            alt={dj.name}
            className="w-full h-full object-cover"
          />
        ) : null}
      </div>
      <p className="mt-2 text-sm font-medium text-zinc-100 truncate w-full">{dj.name}</p>
      <p className="text-xs text-zinc-500 truncate w-full">{dj.role}</p>
    </>
  )

  const baseClass = 'flex flex-col items-center text-center cursor-pointer group'

  if (href) {
    return (
      <Link href={href} className={baseClass}>
        {inner}
      </Link>
    )
  }

  return <div className={baseClass}>{inner}</div>
}
