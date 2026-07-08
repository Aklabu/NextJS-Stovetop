import MusicListPage from '@/features/radio/MusicListPage'
import { getAllMusic } from '@/features/radio/api'

export const metadata = {
  title: 'All Music | Stovetop Radio',
  description: 'Browse the full Stovetop Radio music catalogue — tracks, mixes, podcasts, and albums.',
}

const PAGE_SIZE = 20

interface PageProps {
  searchParams: Promise<{ page?: string }>
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams
  const page = Math.max(1, parseInt(params?.page ?? '1', 10))

  const { count, next, previous, data: tracks } = await getAllMusic(page, PAGE_SIZE)
  const totalPages = count > 0 ? Math.ceil(count / PAGE_SIZE) : 0

  return (
    <MusicListPage
      eyebrow="Universal Music"
      title="All Music"
      tracks={tracks}
      count={count}
      page={page}
      totalPages={totalPages}
      hasNext={!!next}
      hasPrevious={!!previous}
      baseHref="/radio/music"
      backHref="/radio"
    />
  )
}
