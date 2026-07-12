import { MediaItem, DJ, GenreTag, RadioSection, NowPlaying } from './types'

export const trendingPlaylists: MediaItem[] = [
  { id: 'tp1', title: 'Sonic Nights', subtitle: 'Stovetop DJs', gradient: 'from-amber-700 via-yellow-600 to-amber-900' },
  { id: 'tp2', title: 'Studio Sessions', subtitle: 'DJ Ty Boogie', gradient: 'from-zinc-700 via-zinc-800 to-black' },
  { id: 'tp3', title: 'Electric Pulse', subtitle: 'DJ Dat Dat Dat', gradient: 'from-blue-900 via-slate-800 to-black' },
  { id: 'tp4', title: 'Neon Jazz', subtitle: 'Blue Note', gradient: 'from-rose-800 via-fuchsia-900 to-black' },
  { id: 'tp5', title: 'Midnight Drive', subtitle: 'Deep House', gradient: 'from-zinc-800 via-zinc-900 to-black' },
]

export const recentlyAdded: MediaItem[] = [
  { id: 'ra1', title: 'New Wave Mix', gradient: 'from-zinc-700 to-zinc-900' },
  { id: 'ra2', title: 'City Nights', gradient: 'from-zinc-700 to-zinc-900' },
  { id: 'ra3', title: 'Solar Flare', gradient: 'from-amber-800 to-zinc-900' },
  { id: 'ra4', title: 'Underground Beats', gradient: 'from-zinc-700 to-zinc-900' },
  { id: 'ra5', title: 'Dawn Chaser', gradient: 'from-zinc-600 to-zinc-900' },
]

export const genreTags: GenreTag[] = [
  { id: 'g1', title: 'House', gradient: 'from-violet-700 to-purple-900' },
  { id: 'g2', title: 'Techno', gradient: 'from-teal-600 to-teal-900' },
  { id: 'g3', title: 'Soul', gradient: 'from-rose-800 to-pink-950' },
  { id: 'g4', title: 'R&B', gradient: 'from-zinc-600 to-zinc-800' },
  { id: 'g5', title: 'Pop', gradient: 'from-fuchsia-600 to-purple-900' },
]

export const topDJs: DJ[] = [
  { id: 'dj1', name: 'Stovetop Tino', role: 'House Specialist', gradient: 'from-cyan-700 to-blue-900' },
  { id: 'dj2', name: 'DJ Ty Boogie', role: 'Techno King', gradient: 'from-yellow-700 to-amber-900' },
  { id: 'dj3', name: 'Mista Rello', role: 'Reggae Expert', gradient: 'from-zinc-600 to-zinc-800' },
  { id: 'dj4', name: 'DJ Dat Dat Dat', role: 'Hip Hop Guru', gradient: 'from-red-700 to-black' },
  { id: 'dj5', name: 'Blue Note', role: 'Jazz Fusion', gradient: 'from-zinc-700 to-zinc-900' },
]

export const topDJMixes: MediaItem[] = [
  { id: 'mx1', title: 'Ultimate Groove Vol. 1', subtitle: 'Stovetop DJs', gradient: 'from-zinc-700 to-zinc-900' },
  { id: 'mx2', title: 'Techno Pulse', subtitle: 'DJ Ty Boogie', gradient: 'from-zinc-700 to-zinc-900' },
  { id: 'mx3', title: 'Summer Heatwave', subtitle: 'Mista Rello', gradient: 'from-zinc-700 to-zinc-900' },
  { id: 'mx4', title: 'Afrobeat Flow', subtitle: 'DJ Dat Dat Dat', gradient: 'from-zinc-700 to-zinc-900' },
  { id: 'mx5', title: 'Late Night Chill', subtitle: 'Stovetop Tino', gradient: 'from-zinc-700 to-zinc-900' },
]

export const mashups: MediaItem[] = []

export const throwback: MediaItem[] = []

const gradientRow = (
  titles: { title: string; subtitle: string }[],
  gradients: string[]
): MediaItem[] =>
  titles.map((t, i) => ({
    id: `${t.title}-${i}`,
    title: t.title,
    subtitle: t.subtitle,
    gradient: gradients[i % gradients.length],
  }))

export const additionalSections: RadioSection[] = []

export const nowPlaying: NowPlaying = {
  title: 'Summer Vibes 2024',
  subtitle: 'Stovetop DJs',
  gradient: 'from-amber-700 to-zinc-900',
  currentTime: '1:24',
  duration: '3:45',
  progress: 35,
}
