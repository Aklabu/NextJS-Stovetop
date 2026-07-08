import { notFound } from 'next/navigation'
import MusicListPage from './MusicListPage'
import { getDJDetail, getImageUrl } from './api'

const PAGE_SIZE = 20

interface DJDetailPageProps {
  id: string
  page: number
}

export default async function DJDetailPage({ id, page }: DJDetailPageProps) {
  const dj = await getDJDetail(id, page, PAGE_SIZE)
  if (!dj) notFound()

  const { count, next, previous, results: tracks } = dj.music
  const totalPages = count > 0 ? Math.ceil(count / PAGE_SIZE) : 0

  return (
    <MusicListPage
      eyebrow="DJ Music"
      title={dj.name}
      description={`${count} track${count !== 1 ? 's' : ''} by ${dj.name}`}
      headerExtra={
        dj.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={getImageUrl(dj.image)}
            alt={dj.name}
            className="w-20 h-20 rounded-full object-cover shadow-lg border-2 border-zinc-700"
          />
        ) : undefined
      }
      tracks={tracks}
      count={count}
      page={page}
      totalPages={totalPages}
      hasNext={!!next}
      hasPrevious={!!previous}
      baseHref={`/radio/djs/${id}`}
      backHref="/radio/djs"
      backLabel="Back to All DJs"
    />
  )
}
