import { getAdminPlaylists } from '@/features/radio/api'
import PlaylistDetailPage from '@/features/radio/PlaylistDetailPage'

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const playlists = await getAdminPlaylists()
  const pl = playlists.find((p) => p.id === id)
  if (!pl) return { title: 'Playlist | Stovetop Radio' }
  return {
    title: `${pl.name} | Stovetop Radio`,
    description: pl.description || `Browse ${pl.name} on Stovetop Radio.`,
  }
}

export default async function Page({ params }: PageProps) {
  const { id } = await params
  return <PlaylistDetailPage id={id} />
}
