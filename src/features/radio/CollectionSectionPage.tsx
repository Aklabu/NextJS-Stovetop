import Link from 'next/link'
import { ChevronLeft, FolderOpen } from 'lucide-react'
import { getCollectionSection, getImageUrl, CollectionSection } from './api'

// Gradient per section for visual identity
const SECTION_GRADIENTS: Record<string, string> = {
  Mashups: 'from-amber-700 to-zinc-900',
  Throwback: 'from-zinc-600 to-zinc-900',
  'R&B': 'from-orange-600 to-amber-900',
  Soul: 'from-rose-700 to-pink-950',
  'Feel Good': 'from-fuchsia-600 to-purple-900',
  'Slow Jams': 'from-blue-800 to-indigo-950',
  Motivation: 'from-orange-500 to-red-800',
  'Hip Hop': 'from-cyan-700 to-blue-950',
  Reggae: 'from-emerald-700 to-green-950',
}

interface Props {
  section: CollectionSection
}

export default async function CollectionSectionPage({ section }: Props) {
  const result = await getCollectionSection(section)
  const folders = result?.folders ?? []
  const gradient = SECTION_GRADIENTS[section] ?? 'from-zinc-700 to-zinc-900'

  return (
    <main className="bg-zinc-950 text-white min-h-screen px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto">

        {/* Back */}
        <Link
          href="/radio"
          className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Radio
        </Link>

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold tracking-wider text-fuchsia-400 uppercase mb-1">
            Collection
          </p>
          <h1 className="text-3xl font-bold text-white">{section}</h1>
          <p className="text-zinc-400 text-sm mt-1">
            {folders.length > 0
              ? `${folders.length} folder${folders.length !== 1 ? 's' : ''}`
              : 'No folders yet'}
          </p>
        </div>

        {/* Folders grid */}
        {folders.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {folders.map((folder) => (
              <Link
                key={folder.id}
                href={`/radio/collection/${encodeURIComponent(section)}/${folder.id}`}
                className="group block"
              >
                {/* Thumbnail */}
                <div
                  className={`aspect-square rounded-xl overflow-hidden relative shadow-lg group-hover:scale-[1.02] transition-transform duration-200 mb-2 ${
                    folder.image ? '' : `bg-gradient-to-br ${gradient}`
                  }`}
                >
                  {folder.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={getImageUrl(folder.image)}
                      alt={folder.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full">
                      <FolderOpen className="w-10 h-10 text-white/40" />
                    </div>
                  )}
                  {/* Track count badge */}
                  <span className="absolute bottom-2 right-2 rounded bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-zinc-300">
                    {folder.music_count} track{folder.music_count !== 1 ? 's' : ''}
                  </span>
                </div>

                <p className="text-sm font-semibold text-zinc-100 truncate">{folder.name}</p>
                <p className="text-xs text-zinc-500 truncate">{folder.section}</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-24 text-center">
            <FolderOpen className="w-14 h-14 text-zinc-700 mb-4" />
            <p className="text-zinc-400 text-lg font-medium">No folders in {section} yet</p>
            <Link
              href="/radio"
              className="mt-6 text-sm text-fuchsia-400 hover:text-white transition-colors"
            >
              ← Back to Radio
            </Link>
          </div>
        )}

      </div>
    </main>
  )
}
