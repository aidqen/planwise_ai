import { format } from 'date-fns'

export function TaskCalendarPreview({
  task,
  idx,
  overlapsWithPrevious,
  overlapsWithNext,
}) {
  const startTime = task?.timestamp ? format(new Date(task.timestamp), 'HH:mm') : ''
  const endTime = task?.finishTimestamp
    ? format(new Date(task.finishTimestamp), 'HH:mm')
    : ''

  const topPosition = timeToPosition(startTime)
  const height = timeToPosition(endTime) - topPosition

  function timeToPosition(time) {
    const [hours, minutes] = time.split(':').map(Number)
    const adjustedHours = hours - 5 // Subtract 5 hours to align with 5AM
    if (adjustedHours < 0) {
      console.log('hi')
      return 0
    } // Prevent negative positions
    return adjustedHours * 64 + (minutes / 60) * 64 // 4rem = 64px per hour
  }

  function setOpacity(hexColor, opacity) {
    hexColor = hexColor.replace('#', '')

    const r = parseInt(hexColor.substring(0, 2), 16)
    const g = parseInt(hexColor.substring(2, 4), 16)
    const b = parseInt(hexColor.substring(4, 6), 16)

    return `rgba(${r}, ${g}, ${b}, ${opacity})`
  }

  return (
    <div
      className={`absolute flex flex-row left-[18%] ${
        overlapsWithPrevious ? 'left-[55%]' : ''
      } w-[35%] rounded-lg py-2 ps-2 pe-3 shadow-lg gap-2`}
      style={{
        top: `${topPosition}px`,
        height: `${height}px`,
        backgroundColor: setOpacity(task.bg, 0.6),
      }}
    >
      <div
        className="h-auto rounded-full my-2 min-w-1"
        style={{ backgroundColor: task.bg }}
      ></div>
      <div className="flex flex-col justify-center items-start h-full">
        <h3 className="text-sm font-bold text-white truncate">{task.title}</h3>
        <p className="text-xs text-white/70">
          {startTime} - {endTime}
        </p>
      </div>
    </div>
  )
}
