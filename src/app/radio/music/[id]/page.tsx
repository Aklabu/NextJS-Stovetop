import { getMusicDetail } from '@/features/radio/api'
import MusicPlayerPage from '@/features/radio/MusicPlayerPage'

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const track = await getMusicDetail(id)
  if (!track) return { title: 'Music | Stovetop Radio' }
  return {
    title: `${track.name} | Stovetop Radio`,
    description: `Listen to ${track.name} by ${track.dj.name} on Stovetop Radio.`,
  }
}

export default async function Page({ params }: PageProps) {
  const { id } = await params
  return <MusicPlayerPage id={id} />
}
