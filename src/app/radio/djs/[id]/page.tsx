import { notFound } from 'next/navigation'
import MusicListPage from '@/features/radio/MusicListPage'
import { getDJDetail, getImageUrl } from '@/features/radio/api'

const PAGE_SIZE = 20

interface PageProps {
  params: Promise<{ id: string }>
  searchParams: Promise<{ page?: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const dj = await getDJDetail(id)
  if (!dj) return { title: 'DJ | Stovetop Radio' }
  return {
    title: `${dj.name} | Stovetop Radio`,
    description: `Browse all mixes and tracks by ${dj.name} on Stovetop Radio.`,
  }
}

export default async function DJDetailPage({ params, searchParams }: PageProps) {
  const { id } = await params
  const sp = await searchParams
  const page = Math.max(1, parseInt(sp?.page ?? '1', 10))

  const dj = await getDJDetail(id)
  if (!dj) notFound()

  // API returns all tracks in music_list — paginate client-side
  const allTracks = dj.music_list ?? []
  const count = dj.music_count ?? allTracks.length
  const totalPages = count > 0 ? Math.ceil(count / PAGE_SIZE) : 0
  const start = (page - 1) * PAGE_SIZE
  const tracks = allTracks.slice(start, start + PAGE_SIZE)

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
      hasNext={page < totalPages}
      hasPrevious={page > 1}
      baseHref={`/radio/djs/${id}`}
      backHref="/radio/djs"
      backLabel="Back to All DJs"
    />
  )
}
