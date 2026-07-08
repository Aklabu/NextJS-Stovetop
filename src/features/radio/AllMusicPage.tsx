import MusicListPage from './MusicListPage'
import { getAllMusic } from './api'

const PAGE_SIZE = 20

interface AllMusicPageProps {
  page: number
}

export default async function AllMusicPage({ page }: AllMusicPageProps) {
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
