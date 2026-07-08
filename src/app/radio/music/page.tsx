import AllMusicPage from '@/features/radio/AllMusicPage'

export const metadata = {
  title: 'All Music | Stovetop Radio',
  description: 'Browse the full Stovetop Radio music catalogue — tracks, mixes, podcasts, and albums.',
}

interface PageProps {
  searchParams: Promise<{ page?: string }>
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams
  const page = Math.max(1, parseInt(params?.page ?? '1', 10))
  return <AllMusicPage page={page} />
}
