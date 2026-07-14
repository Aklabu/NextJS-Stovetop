import apiClient from '@/lib/api'

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ApiFeaturedVideo {
  id: string
  title: string
  youtube_url: string
}

export interface ApiVideo {
  id: string
  title: string
  youtube_url: string
  created_at: string
}

export interface ApiVideoDetail extends ApiVideo {
  is_active: boolean
  updated_at: string
}

export interface VideoListResponse {
  count: number
  next: string | null
  previous: string | null
  results: ApiVideo[]
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Extract the YouTube video ID from any youtube.com or youtu.be URL.
 * Returns null if the URL is not a recognised YouTube format.
 */
export function getYouTubeId(url: string): string | null {
  try {
    const u = new URL(url)
    if (u.hostname === 'youtu.be') return u.pathname.slice(1)
    if (u.hostname.includes('youtube.com')) return u.searchParams.get('v')
    return null
  } catch {
    return null
  }
}

/** Max-res thumbnail URL for a YouTube video ID. Falls back to hqdefault. */
export function getYouTubeThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
}

// ─── Fetchers ─────────────────────────────────────────────────────────────────

export async function getFeaturedVideos(): Promise<ApiFeaturedVideo[]> {
  try {
    const { data: json } = await apiClient.get('/api/website/featured-videos/', {
      // @ts-expect-error – Next.js extended fetch options
      next: { revalidate: 60 },
    })
    return json?.data ?? []
  } catch {
    return []
  }
}

export async function getVideoList(page = 1, pageSize = 6): Promise<VideoListResponse> {
  try {
    const { data: json } = await apiClient.get('/api/website/videos/', {
      params: { page, page_size: pageSize },
      // @ts-expect-error – Next.js extended fetch options
      next: { revalidate: 60 },
    })
    return {
      count: json?.count ?? 0,
      next: json?.next ?? null,
      previous: json?.previous ?? null,
      results: json?.results ?? [],
    }
  } catch {
    return { count: 0, next: null, previous: null, results: [] }
  }
}

export async function getVideoDetail(id: string): Promise<ApiVideoDetail | null> {
  try {
    const { data: json } = await apiClient.get(`/api/website/videos/${id}/`, {
      // @ts-expect-error – Next.js extended fetch options
      next: { revalidate: 0 },
    })
    return json?.data ?? null
  } catch {
    return null
  }
}
