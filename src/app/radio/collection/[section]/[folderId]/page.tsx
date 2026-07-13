import CollectionFolderPage from '@/features/radio/CollectionFolderPage'

interface PageProps {
  params: Promise<{ section: string; folderId: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { section } = await params
  const decoded = decodeURIComponent(section)
  return {
    title: `${decoded} Folder | Stovetop Radio`,
    description: `Browse tracks in this ${decoded} collection folder.`,
  }
}

export default async function Page({ params }: PageProps) {
  const { section, folderId } = await params
  const decoded = decodeURIComponent(section)
  return <CollectionFolderPage section={decoded} folderId={folderId} />
}
