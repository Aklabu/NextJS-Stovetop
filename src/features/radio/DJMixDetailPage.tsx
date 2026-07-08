import { notFound } from 'next/navigation'
import MusicListPage from './MusicListPage'
import { getDJMixDetail, getImageUrl } from './api'

const PAGE_SIZE = 20

interface DJMixDetailPageProps {
  id: string
  page: number
}

export default async function DJMixDetailPage({ id, page }: DJMixDetailPageProps) {
  const mix = await getDJMixDetail(id, page, PAGE_SIZE)
  if (!mix) notFound()

  const { count, next, previous, results: tracks } = mix.music
  const totalPages = count > 0 ? Math.ceil(count / PAGE_SIZE) : 0
  const djNames = mix.djs.map((dj) => dj.name).join(', ')

  return (
    <MusicListPage
      eyebrow="DJ Mix"
      title={mix.name}
      description={`${count} track${count !== 1 ? 's' : ''} · ${djNames}`}
      headerExtra={
        mix.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={getImageUrl(mix.image)}
            alt={mix.name}
            className="w-24 h-24 rounded-xl object-cover shadow-lg border border-zinc-700"
          />
        ) : undefined
      }
      tracks={tracks}
      count={count}
      page={page}
      totalPages={totalPages}
      hasNext={!!next}
      hasPrevious={!!previous}
      baseHref={`/radio/dj-mixes/${id}`}
      backHref="/radio/dj-mixes"
      backLabel="Back to All DJ Mixes"
    />
  )
}
