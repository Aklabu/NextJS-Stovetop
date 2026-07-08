import { notFound } from 'next/navigation'
import DJDetailPage from '@/features/radio/DJDetailPage'
import { getDJDetail } from '@/features/radio/api'

interface PageProps {
  params: Promise<{ id: string }>
  searchParams: Promise<{ page?: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const dj = await getDJDetail(id, 1, 1)
  if (!dj) return { title: 'DJ | Stovetop Radio' }
  return {
    title: `${dj.name} | Stovetop Radio`,
    description: `Browse all mixes and tracks by ${dj.name} on Stovetop Radio.`,
  }
}

export default async function Page({ params, searchParams }: PageProps) {
  const { id } = await params
  const sp = await searchParams
  const page = Math.max(1, parseInt(sp?.page ?? '1', 10))
  return <DJDetailPage id={id} page={page} />
}
