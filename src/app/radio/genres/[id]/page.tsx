import { getGenreDetail } from '@/features/radio/api'
import GenreDetailPage from '@/features/radio/GenreDetailPage'

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

export default async function Page({ params, searchParams }: PageProps) {
  const { id } = await params
  const sp = await searchParams
  const page = Math.max(1, parseInt(sp?.page ?? '1', 10))
  return <GenreDetailPage id={id} page={page} />
}
