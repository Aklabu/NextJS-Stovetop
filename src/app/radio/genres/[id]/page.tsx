import { notFound } from 'next/navigation'
import MusicListPage from '@/features/radio/MusicListPage'
import { getGenreDetail } from '@/features/radio/api'

const PAGE_SIZE = 20

interface PageProps {
  params: Promise<{ id: string }>
  searchParams: Promise<{ page?: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const genre = await getGenreDetail(id)
  if (!genre) return { title: 'Genre | Stovetop Radio' }
  return {
    title: `${genre.name} | Stovetop Radio`,
    description: `Browse ${genre.name} music on Stovetop Radio.`,
  }
}

export default async function GenrePage({ params, searchParams }: PageProps) {
  const { id } = await params
  const sp = await searchParams
  const page = Math.max(1, parseInt(sp?.page ?? '1', 10))

  const genre = await getGenreDetail(id)
  if (!genre) notFound()

  // The API returns all tracks in music_list — paginate client-side
  const allTracks = genre.music_list ?? []
  const count = genre.music_count ?? allTracks.length
  const totalPages = count > 0 ? Math.ceil(count / PAGE_SIZE) : 0
  const start = (page - 1) * PAGE_SIZE
  const tracks = allTracks.slice(start, start + PAGE_SIZE)

  return (
    <MusicListPage
      eyebrow="Browse by Genre"
      title={genre.name}
      description={`${count} track${count !== 1 ? 's' : ''} in ${genre.name}`}
      tracks={tracks}
      count={count}
      page={page}
      totalPages={totalPages}
      hasNext={page < totalPages}
      hasPrevious={page > 1}
      baseHref={`/radio/genres/${id}`}
      backHref="/radio"
      backLabel="Back to Radio"
    />
  )
}
