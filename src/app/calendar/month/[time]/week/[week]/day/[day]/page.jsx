'use client'

import { OpenCloseBtn } from '@/app/components/OpenCloseBtn'
import { DAYS, MONTHS, SHORT_DAYS } from '@/services/calendarConstants'
import { assignTasksToDay } from '@/services/calendarUtils'
import { format } from 'date-fns'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function DayView() {
  const pathname = usePathname()
  const urlParams = pathname.split('/')
  const year = useSelector(state => state.systemModule.year)
  const user = useSelector(state => state.userModule.user)

  const [date, setDate] = useState({ year: 2024, month: null, week: null, day: null })
  const [daySchedule, setDaySchedule] = useState(null)
  const timeSlots = Array.from({ length: 20 }, (_, i) => `${i + 5}:00`)

  const monthIdx = urlParams[3]
  const weekIdx = urlParams[5]
  const dayIdx = urlParams[7]

  // year.map((month) => month.map((week) => week.map((day) => console.log(format(day.timestamp, 'dd')))))

  useEffect(() => {
    var monthInput = MONTHS[+monthIdx - 1]
    const dayInput = DAYS[dayIdx]
    setDate(state => ({ ...state, month: monthInput, week: weekIdx, day: dayInput }))
    fetchDay(monthIdx)
  }, [year, pathname])

  function fetchDay(monthIdx) {
    if (year?.length) {
      var selectedWeek = year?.find((_, idx) => idx === monthIdx - 1)[weekIdx - 1]
      var selectedDay = selectedWeek.find((day, idx) => day.day === +dayIdx)
    }
    if (selectedDay?.timestamp) {
      const dayWithTasks = assignTasksToDay(selectedDay, user?.tasks)
      setDaySchedule(dayWithTasks)
    }
  }

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-row items-center justify-between mb-5">
        <h1 className="font-bold text-xl text-white p-0 m-0">
          {date.month} {date.year}
        </h1>
        <OpenCloseBtn />
      </div>
      <div className="flex flex-row items-center justify-between gap-2 w-full mb-3">
        {SHORT_DAYS.map((day, idx) => (
          <div
            key={day}
            className={`${
              +dayIdx + idx === +dayIdx ? 'font-bold' : ''
            } flex flex-col items-center gap-2`}
          >
            <h3>{day}</h3>
            <h3>{+dayIdx + idx}</h3>
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        {timeSlots.map(time => (
          <div
            key={time}
            className="grid grid-cols-[12.3%,88%] items-center h-12 relative"
          >
            {/* Time Label */}
            <div className="flex justify-end w-11 pr-2 text-sm text-white/70">
              {time}
            </div>
            <div className="bg-white/50 h-[1px] w-full px-3"></div>
          </div>
        ))}
      </div>
    </div>
  )
}
