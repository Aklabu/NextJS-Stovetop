import apiClient, { BASE_URL } from '@/lib/api'

// ─── Interfaces ──────────────────────────────────────────────────────────────

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

export interface ApiDJ {
  id: string
  name: string
  image: string
  total_play_count: number
}

export interface DJsResponse {
  count: number
  next: string | null
  previous: string | null
  data: ApiDJ[]
}

export interface ApiDJMix {
  id: string
  name: string
  dj_names: string
  image: string
  total_play_count: number
}

export interface ApiGenre {
  id: string
  name: string
  banner: string
  created_at: string
}

export interface ApiMusic {
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

export interface ApiGenreDetail extends ApiGenre {
  music_count: number
  music_list: ApiMusic[]
}

export interface MusicListResponse {
  count: number
  next: string | null
  previous: string | null
  data: ApiMusic[]
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getImageUrl(path: string): string {
  if (!path) return ''
  if (path.startsWith('http')) return path
  return `${BASE_URL}${path}`
}

// ─── Fetchers ─────────────────────────────────────────────────────────────────

export async function getRecentMusic(): Promise<RecentTrack[]> {
  try {
    const { data: json } = await apiClient.get('/api/music/recent/', {
      // Disable Next.js fetch cache (axios uses fetch under the hood in Node 18+)
      // @ts-expect-error – Next.js extended fetch options passed through
      next: { revalidate: 0 },
    })
    return json?.data ?? []
  } catch {
    return []
  }
}

export async function getTopDJs(): Promise<ApiDJ[]> {
  try {
    const { data: json } = await apiClient.get('/api/music/top-djs/', {
      // @ts-expect-error – Next.js extended fetch options
      next: { revalidate: 0 },
    })
    return json?.data ?? []
  } catch {
    return []
  }
}

export async function getAllDJs(page = 1, pageSize = 10): Promise<DJsResponse> {
  try {
    const { data: json } = await apiClient.get('/api/music/djs/', {
      params: { page, page_size: pageSize },
      // @ts-expect-error – Next.js extended fetch options
      next: { revalidate: 0 },
    })
    const data: ApiDJ[] = json?.results?.data ?? json?.data ?? []
    return {
      count: json?.count ?? data.length,
      next: json?.next ?? null,
      previous: json?.previous ?? null,
      data,
    }
  } catch {
    return { count: 0, next: null, previous: null, data: [] }
  }
}

export async function getTopDJMixes(): Promise<ApiDJMix[]> {
  try {
    const { data: json } = await apiClient.get('/api/music/top-dj-mixes/', {
      // @ts-expect-error – Next.js extended fetch options
      next: { revalidate: 0 },
    })
    return json?.data ?? []
  } catch {
    return []
  }
}

export async function getAllMusic(page = 1, pageSize = 20): Promise<MusicListResponse> {
  try {
    const { data: json } = await apiClient.get('/api/music/tracks/', {
      params: { page, page_size: pageSize },
      // @ts-expect-error – Next.js extended fetch options
      next: { revalidate: 0 },
    })
    const data: ApiMusic[] = json?.results?.data ?? json?.data ?? []
    return {
      count: json?.count ?? data.length,
      next: json?.next ?? null,
      previous: json?.previous ?? null,
      data,
    }
  } catch {
    return { count: 0, next: null, previous: null, data: [] }
  }
}

export async function getGenres(): Promise<ApiGenre[]> {
  try {
    const { data: json } = await apiClient.get('/api/music/genres/', {
      // @ts-expect-error – Next.js extended fetch options
      next: { revalidate: 0 },
    })
    return json?.results?.data ?? json?.data ?? []
  } catch {
    return []
  }
}

export async function getGenreDetail(id: string): Promise<ApiGenreDetail | null> {
  try {
    const { data: json } = await apiClient.get(`/api/music/genres/${id}/`, {
      // @ts-expect-error – Next.js extended fetch options
      next: { revalidate: 0 },
    })
    return json?.data ?? null
  } catch {
    return null
  }
}
