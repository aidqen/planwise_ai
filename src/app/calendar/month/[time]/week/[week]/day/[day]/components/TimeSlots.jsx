import { TaskCalendarPreview } from "./TaskCalendarPreview"

export function TimeSlots({daySchedule}) {
    const timeSlots = Array.from({ length: 23 }, (_, i) => `${i + 5}:00`)
    console.log(daySchedule);
    

    return (
        <div className="relative flex flex-col h-[calc(23*4rem)]">
        {timeSlots.map(time => (
          <div
            key={time}
            className="grid grid-cols-[12.3%,88%] items-center h-16 relative"
          >
            {/* Time Label */}
            <div className="flex justify-end w-11 pr-2 text-sm text-white/70">
              {time}
            </div>
            <div className="bg-white/50 h-[1px] w-full px-3"></div>
          </div>
        ))}
        {daySchedule?.tasks.map((task, idx) => (
            <TaskCalendarPreview task={task} idx={idx} key={task.id} />
        ))}
      </div>
    )
}