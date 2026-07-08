import AllDJsPage from '@/features/radio/AllDJsPage'

export const metadata = {
  title: 'All DJs | Stovetop Radio',
  description: 'Browse all DJs on Stovetop Radio.',
}

interface PageProps {
  searchParams: Promise<{ page?: string }>
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams
  const page = Math.max(1, parseInt(params?.page ?? '1', 10))
  return <AllDJsPage page={page} />
}
