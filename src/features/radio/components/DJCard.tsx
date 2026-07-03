import { DJ } from '../types'

export default function DJCard({ dj }: { dj: DJ }) {
  return (
    <div className="flex flex-col items-center text-center cursor-pointer group">
      <div
        className={`w-full aspect-square rounded-full bg-gradient-to-br ${dj.gradient} shadow-lg group-hover:scale-[1.03] transition-transform duration-200`}
      />
      <p className="mt-2 text-sm font-medium text-zinc-100 truncate w-full">{dj.name}</p>
      <p className="text-xs text-zinc-500 truncate w-full">{dj.role}</p>
    </div>
  )
}
