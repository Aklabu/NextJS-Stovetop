import { notFound } from 'next/navigation'
import MusicListPage from '@/features/radio/MusicListPage'
import { getDJMixDetail, getImageUrl } from '@/features/radio/api'

const PAGE_SIZE = 20

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

export default async function DJMixDetailPage({ params, searchParams }: PageProps) {
  const { id } = await params
  const sp = await searchParams
  const page = Math.max(1, parseInt(sp?.page ?? '1', 10))

  const mix = await getDJMixDetail(id, page, PAGE_SIZE)
  if (!mix) notFound()

  const { count, next, previous, results: tracks } = mix.music
  const totalPages = count > 0 ? Math.ceil(count / PAGE_SIZE) : 0

  // Build DJ names string from the djs array
  const djNames = mix.djs.map((dj) => dj.name).join(', ')

  return (
    <MusicListPage
      eyebrow="DJ Mix"
      title={mix.name}
      description={`${count} track${count !== 1 ? 's' : ''} · ${djNames}`}
      headerExtra={
        mix.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={getImageUrl(mix.image)}
            alt={mix.name}
            className="w-24 h-24 rounded-xl object-cover shadow-lg border border-zinc-700"
          />
        ) : undefined
      }
      tracks={tracks}
      count={count}
      page={page}
      totalPages={totalPages}
      hasNext={!!next}
      hasPrevious={!!previous}
      baseHref={`/radio/dj-mixes/${id}`}
      backHref="/radio/dj-mixes"
      backLabel="Back to All DJ Mixes"
    />
  )
}
