import { Bell } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
          Music Discovery
        </h2>
      </div>
      <div className="flex items-center gap-4">
        <button
          aria-label="Notifications"
          className="text-zinc-400 hover:text-white transition-colors"
        >
          <Bell className="w-5 h-5" />
        </button>
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-xs font-bold text-white ring-2 ring-zinc-800">
          ST
        </div>
      </div>
    </div>
  )
}
