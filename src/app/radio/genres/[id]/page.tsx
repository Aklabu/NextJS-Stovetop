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
  const genre = await getGenreDetail(id, 1, 1)
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

  const genre = await getGenreDetail(id, page, PAGE_SIZE)
  if (!genre) notFound()

  const { count, next, previous, results: tracks } = genre.music
  const totalPages = count > 0 ? Math.ceil(count / PAGE_SIZE) : 0

  return (
    <MusicListPage
      eyebrow="Browse by Genre"
      title={genre.name}
      description={`${count} track${count !== 1 ? 's' : ''} in ${genre.name}`}
      tracks={tracks}
      count={count}
      page={page}
      totalPages={totalPages}
      hasNext={!!next}
      hasPrevious={!!previous}
      baseHref={`/radio/genres/${id}`}
      backHref="/radio"
      backLabel="Back to Radio"
    />
  )
}
