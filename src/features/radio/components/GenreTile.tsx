import { GenreTag } from '../types'

export default function GenreTile({ genre }: { genre: GenreTag }) {
  return (
    <div
      className={`aspect-[4/3] rounded-xl bg-gradient-to-br ${genre.gradient} flex items-end p-4 cursor-pointer shadow-lg hover:scale-[1.02] transition-transform duration-200`}
    >
      <span className="text-white font-semibold">{genre.title}</span>
    </div>
  )
}
