import { Note } from '@/components/notes'
import { getWeekdays } from '@/utils/get-current-weekdays'

export default function Home() {
  const weekdays = getWeekdays()

  return (
    <div className="min-h-screen bg-background p-4">
      <div className='flex items-center justify-between py-4'>
        <h1 className="font-semibold text-lg text-text">Daily</h1>
        <button type="button" className='text-sm px-3 py-2 bg-card-background hover:bg-card-tertiary text-text rounded-lg'>fabriciolak12@gmail.com</button>
      </div>
      <div className="grid grid-cols-5 grid-rows-1 gap-4">
        {weekdays.map((day, index) => (
          <Note weekday={day} key={index} />
        ))}
      </div>
    </div>
  )
}