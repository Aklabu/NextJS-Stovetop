import VideosPage from '@/features/videos/VideosPage'

export const metadata = {
  title: 'Videos | Stovetop Radio',
  description: 'Watch featured mixes, interviews, and live sets from Stovetop Radio.',
}

interface PageProps {
  searchParams: Promise<{ page?: string }>
}

export default async function Page({ searchParams }: PageProps) {
  const { page } = await searchParams
  const pageNum = Math.max(1, parseInt(page ?? '1', 10))
  return <VideosPage page={pageNum} />
}
