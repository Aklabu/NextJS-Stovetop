import AllDJMixesPage from '@/features/radio/AllDJMixesPage'

export const metadata = {
  title: 'All DJ Mixes | Stovetop Radio',
  description: 'Browse the full catalogue of DJ mixes on Stovetop Radio.',
}

interface PageProps {
  searchParams: Promise<{ page?: string }>
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams
  const page = Math.max(1, parseInt(params?.page ?? '1', 10))
  return <AllDJMixesPage page={page} />
}
