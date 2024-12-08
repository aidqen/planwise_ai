import { DayCalendarTaskList } from './DayCalendarTaskList'
import { TaskCalendarPreview } from './TaskCalendarPreview'
import { TimeLabel } from './TimeLabel'

export function TimeSlots({ daySchedule }) {
  const timeSlots = Array.from({ length: 20 }, (_, i) => `${i + 5}:00`)
  console.log(daySchedule)

  return (
    <div className="relative flex flex-col h-[calc(20*4rem)]">
      {timeSlots.map((time, idx) => (
        <TimeLabel key={idx} time={time} />
      ))}
      <TimeLabel time="1:00" />
      <DayCalendarTaskList tasks={daySchedule?.tasks} />
    </div>
  )
}
