import { getDJMixDetail } from '@/features/radio/api'
import DJMixDetailPage from '@/features/radio/DJMixDetailPage'

interface PageProps {
  params: Promise<{ id: string }>
  searchParams: Promise<{ page?: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params
  const mix = await getDJMixDetail(id, 1, 1)
  if (!mix) return { title: 'DJ Mix | Stovetop Radio' }
  return {
    title: `${mix.name} | Stovetop Radio`,
    description: `Listen to ${mix.name} on Stovetop Radio.`,
  }
}

export default async function Page({ params, searchParams }: PageProps) {
  const { id } = await params
  const sp = await searchParams
  const page = Math.max(1, parseInt(sp?.page ?? '1', 10))
  return <DJMixDetailPage id={id} page={page} />
}
