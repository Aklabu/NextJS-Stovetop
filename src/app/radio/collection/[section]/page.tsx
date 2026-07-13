import { notFound } from 'next/navigation'
import CollectionSectionPage from '@/features/radio/CollectionSectionPage'
import { CollectionSection } from '@/features/radio/api'

const VALID_SECTIONS: CollectionSection[] = [
  'Mashups',
  'Throwback',
  'R&B',
  'Soul',
  'Feel Good',
  'Slow Jams',
  'Motivation',
  'Hip Hop',
  'Reggae',
]

interface PageProps {
  params: Promise<{ section: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { section } = await params
  const decoded = decodeURIComponent(section)
  return {
    title: `${decoded} | Stovetop Radio`,
    description: `Browse ${decoded} folders on Stovetop Radio.`,
  }
}

export default async function Page({ params }: PageProps) {
  const { section } = await params
  const decoded = decodeURIComponent(section) as CollectionSection
  if (!VALID_SECTIONS.includes(decoded)) notFound()
  return <CollectionSectionPage section={decoded} />
}
