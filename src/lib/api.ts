const BASE_URL = 'https://stovetopmusic.com'

export interface RecentTrack {
  id: string
  name: string
  dj_name: string
  dj_mix_name?: string
  genre_names: string
  image: string
  audio_file: string
  music_type: string
  play_count: number
  created_at: string
}

export async function getRecentMusic(): Promise<RecentTrack[]> {
  try {
    const res = await fetch(`${BASE_URL}/api/music/recent/`, {
      next: { revalidate: 300 }, // revalidate every 5 minutes
    })
    if (!res.ok) return []
    const json = await res.json()
    return json?.data ?? []
  } catch {
    return []
  }
}

export function getImageUrl(path: string): string {
  if (!path) return ''
  if (path.startsWith('http')) return path
  return `${BASE_URL}${path}`
}
