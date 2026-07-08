import { notFound } from 'next/navigation'
import MusicListPage from './MusicListPage'
import { getGenreDetail } from './api'

const PAGE_SIZE = 20

interface GenreDetailPageProps {
  id: string
  page: number
}

export default async function GenreDetailPage({ id, page }: GenreDetailPageProps) {
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
