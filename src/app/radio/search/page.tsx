import { redirect } from 'next/navigation'
import SearchResultsPage from '@/features/radio/SearchResultsPage'

interface PageProps {
  searchParams: Promise<{ q?: string; page?: string }>
}

export async function generateMetadata({ searchParams }: PageProps) {
  const { q } = await searchParams
  return {
    title: q ? `"${q}" — Search | Stovetop Radio` : 'Search | Stovetop Radio',
    description: q ? `Search results for "${q}" on Stovetop Radio.` : 'Search Stovetop Radio.',
  }
}

export default async function Page({ searchParams }: PageProps) {
  const { q, page } = await searchParams

  // Nothing to search — send back to radio
  if (!q?.trim()) redirect('/radio')

  const pageNum = Math.max(1, parseInt(page ?? '1', 10))

  return <SearchResultsPage q={q.trim()} page={pageNum} />
}
