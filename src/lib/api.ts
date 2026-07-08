const BASE_URL = 'https://stovetopmusic.com'

// Always fetch fresh — no caching so backend changes reflect immediately
const FETCH_OPTS: RequestInit = { cache: 'no-store' }

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

// ─── Fetchers ─────────────────────────────────────────────────────────────────

export async function getRecentMusic(): Promise<RecentTrack[]> {
  try {
    const res = await fetch(`${BASE_URL}/api/music/recent/`, FETCH_OPTS)
    if (!res.ok) return []
    const json = await res.json()
    return json?.data ?? []
  } catch {
    return []
  }
}

export async function getTopDJs(): Promise<ApiDJ[]> {
  try {
    const res = await fetch(`${BASE_URL}/api/music/top-djs/`, FETCH_OPTS)
    if (!res.ok) return []
    const json = await res.json()
    return json?.data ?? []
  } catch {
    return []
  }
}

export async function getAllDJs(page = 1, pageSize = 10): Promise<DJsResponse> {
  try {
    const res = await fetch(
      `${BASE_URL}/api/music/djs/?page=${page}&page_size=${pageSize}`,
      FETCH_OPTS
    )
    if (!res.ok) return { count: 0, next: null, previous: null, data: [] }
    const json = await res.json()
    // Handle both { data: [...] } and { results: { data: [...] } } shapes
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
    const res = await fetch(`${BASE_URL}/api/music/top-dj-mixes/`, FETCH_OPTS)
    if (!res.ok) return []
    const json = await res.json()
    return json?.data ?? []
  } catch {
    return []
  }
}

export async function getGenres(): Promise<ApiGenre[]> {
  try {
    const res = await fetch(`${BASE_URL}/api/music/genres/`, FETCH_OPTS)
    if (!res.ok) return []
    const json = await res.json()
    return json?.data ?? []
  } catch {
    return []
  }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getImageUrl(path: string): string {
  if (!path) return ''
  if (path.startsWith('http')) return path
  return `${BASE_URL}${path}`
}
