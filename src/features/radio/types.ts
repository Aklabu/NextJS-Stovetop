export interface MediaItem {
  id: string
  title: string
  subtitle?: string
  image?: string
  gradient?: string
}

export interface DJ {
  id: string
  name: string
  role: string
  image?: string
  gradient?: string
}

export interface GenreTag {
  id: string
  title: string
  gradient: string
}

export interface RadioSection {
  id: string
  title: string
  items: MediaItem[]
}

export interface NowPlaying {
  title: string
  subtitle: string
  image?: string
  gradient?: string
  currentTime: string
  duration: string
  progress: number // 0 - 100
}
