import { useRouter } from "next/navigation"

export function MonthDayPreview({day,monthIdx, dayIdx, weekIdx}) {
  const router = useRouter()

  function navigateToDay() {
    console.log('dayIdx + 1 * weekIdx + 1:', dayIdx + 1 * weekIdx + 1)
    router.replace(`/calendar/month/${monthIdx}/week/${weekIdx + 1}/day/${dayIdx + 1 * weekIdx + 1}`)
  }
  return (
    <li
      key={dayIdx}
      onClick={navigateToDay}
      className={`day flex flex-col items-center justify-between text-xs col-start-${
        dayIdx + 1
      } ${
        day.day === null ? 'bg-transparent' : 'border-[#7AB2D3] border'
      } pb-1 text-white min-w-[14%] min-h-[3.5em] rounded-md cursor-pointer`}
    >
      <ul className="flex flex-row justify-start w-full gap-[0.1em] p-2">
        {(day?.tasks).map(task => (
          <li
            key={task.id}
            className="w-[0.35em] h-[0.35em] rounded-full"
            style={{ backgroundColor: task.bg }}
          ></li>
        ))}
      </ul>
      <span>{day.day !== null ? day.day : ''}</span>
    </li>
  )
}
