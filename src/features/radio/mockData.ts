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

export const mashups: MediaItem[] = [
  { id: 'ms1', title: 'Pop Remix Mania', subtitle: 'The Blender Crew', gradient: 'from-amber-800 to-zinc-900' },
  { id: 'ms2', title: 'Hip Hop Fusion', subtitle: 'Street Melodies', gradient: 'from-zinc-700 to-zinc-900' },
  { id: 'ms3', title: 'Retro Soul Flip', subtitle: 'Vintage Vibes', gradient: 'from-red-800 to-black' },
  { id: 'ms4', title: 'House Anthems', subtitle: 'Mainstage Mix', gradient: 'from-blue-950 to-black' },
  { id: 'ms5', title: 'Island Bounce', subtitle: 'Tropical Storm', gradient: 'from-zinc-500 to-zinc-800' },
]

export const throwback: MediaItem[] = [
  { id: 'tb1', title: '90s Gold', subtitle: 'The Classics', gradient: 'from-zinc-800 to-black' },
  { id: 'tb2', title: '80s Synth', subtitle: 'Retrowave', gradient: 'from-zinc-600 to-zinc-900' },
  { id: 'tb3', title: 'Disco Fever', subtitle: 'Night Life', gradient: 'from-zinc-400 to-zinc-800' },
  { id: 'tb4', title: 'Old School Rap', subtitle: 'The Roots', gradient: 'from-amber-700 to-black' },
  { id: 'tb5', title: 'Rock Anthems', subtitle: 'Vintage', gradient: 'from-zinc-300 to-zinc-700' },
]

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

export const additionalSections: RadioSection[] = [
  {
    id: 'rnb',
    title: 'R&B',
    items: gradientRow(
      [
        { title: 'Smooth Slows', subtitle: '' },
        { title: 'Modern Soul', subtitle: '' },
        { title: 'Love Ballads', subtitle: '' },
        { title: 'Neo Soul', subtitle: '' },
        { title: '90s Vibes', subtitle: '' },
      ],
      ['from-orange-500 to-amber-700', 'from-rose-300 to-orange-500', 'from-lime-200 to-emerald-500', 'from-yellow-500 to-amber-700', 'from-orange-400 to-amber-600']
    ),
  },
  {
    id: 'soul',
    title: 'Soul',
    items: gradientRow(
      [
        { title: 'Timeless Soul', subtitle: '' },
        { title: 'Jazz & Soul', subtitle: '' },
        { title: 'Motown Magic', subtitle: '' },
        { title: 'Funky Roots', subtitle: '' },
        { title: 'Pure Harmony', subtitle: '' },
      ],
      ['from-teal-200 to-cyan-500', 'from-orange-400 to-amber-600', 'from-zinc-300 to-zinc-600', 'from-teal-700 to-emerald-800', 'from-yellow-300 to-lime-500']
    ),
  },
  {
    id: 'feel-good',
    title: 'Feel Good',
    items: gradientRow(
      [
        { title: 'Happy Beats', subtitle: '' },
        { title: 'Sunday Morning', subtitle: '' },
        { title: 'Bright Side', subtitle: '' },
        { title: 'Positive Vibes', subtitle: '' },
        { title: 'Energy Boost', subtitle: '' },
      ],
      ['from-fuchsia-400 to-indigo-600', 'from-teal-400 to-emerald-600', 'from-zinc-500 to-zinc-800', 'from-orange-400 to-amber-600', 'from-orange-500 to-red-600']
    ),
  },
  {
    id: 'slow-jams',
    title: 'Slow Jams',
    items: gradientRow(
      [
        { title: 'Night Cap', subtitle: '' },
        { title: 'Dim the Lights', subtitle: '' },
        { title: 'Midnight Love', subtitle: '' },
        { title: 'Pure Romance', subtitle: '' },
        { title: 'Slow Burn', subtitle: '' },
      ],
      ['from-orange-400 to-amber-700', 'from-blue-300 to-indigo-600', 'from-emerald-300 to-teal-600', 'from-cyan-300 to-blue-500', 'from-zinc-400 to-emerald-700']
    ),
  },
  {
    id: 'motivation',
    title: 'Motivation',
    items: gradientRow(
      [
        { title: 'Power Hour', subtitle: '' },
        { title: 'Grind Mode', subtitle: '' },
        { title: 'Success Mindset', subtitle: '' },
        { title: 'Daily Hustle', subtitle: '' },
        { title: 'Rise Up', subtitle: '' },
      ],
      ['from-orange-500 to-amber-700', 'from-cyan-300 to-blue-600', 'from-orange-300 to-rose-500', 'from-yellow-300 to-amber-600', 'from-cyan-300 to-teal-500']
    ),
  },
  {
    id: 'hip-hop',
    title: 'Hip Hop',
    items: gradientRow(
      [
        { title: 'Boom Bap', subtitle: '' },
        { title: 'Trap Bangers', subtitle: '' },
        { title: 'Underground', subtitle: '' },
        { title: 'Lyricists', subtitle: '' },
        { title: 'Fresh Flows', subtitle: '' },
      ],
      ['from-orange-400 to-amber-700', 'from-cyan-200 to-blue-500', 'from-slate-300 to-slate-600', 'from-amber-600 to-yellow-800', 'from-indigo-400 to-rose-400']
    ),
  },
  {
    id: 'reggae',
    title: 'Reggae',
    items: gradientRow(
      [
        { title: 'Island Vibes', subtitle: '' },
        { title: 'Roots Rock', subtitle: '' },
        { title: 'Dancehall Fever', subtitle: '' },
        { title: 'Chill Reggae', subtitle: '' },
        { title: 'Reggae Fusion', subtitle: '' },
      ],
      ['from-emerald-500 to-green-800', 'from-amber-500 to-orange-700', 'from-teal-600 to-emerald-800', 'from-yellow-300 to-amber-500', 'from-zinc-400 to-zinc-700']
    ),
  },
]

export const nowPlaying: NowPlaying = {
  title: 'Summer Vibes 2024',
  subtitle: 'Stovetop DJs',
  gradient: 'from-amber-700 to-zinc-900',
  currentTime: '1:24',
  duration: '3:45',
  progress: 35,
}
