import { Plus } from 'lucide-react'

interface NoteProps {
  weekday: string
}

export function Note({ weekday }: NoteProps) {
  return (
    <div className="h-[3.875rem] rounded-xl border border-border px-3 py-4 flex items-center justify-between bg-card-background">
      <div className="space-x-2 text-text">
        <span className="font-medium text-sm">14</span>
        <span className="font-medium text-sm">{weekday.slice(0, 3)}</span>
      </div>

      <button type="button" className="text-text p-1 hover:bg-card-tertiary rounded-lg">
        <Plus />
      </button>
    </div>
  )
}