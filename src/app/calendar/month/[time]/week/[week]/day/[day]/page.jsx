'use client'

import { OpenCloseBtn } from '@/app/components/OpenCloseBtn'
import { DAYS, MONTHS, SHORT_DAYS } from '@/services/calendarConstants'
import { assignTasksToDay } from '@/services/calendarUtils'
import { format } from 'date-fns'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { TimeSlots } from './components/TimeSlots'

export default function DayView() {
  const pathname = usePathname()
  const urlParams = pathname.split('/')
  const year = useSelector(state => state.systemModule.year)
  const user = useSelector(state => state.userModule.user)

  const [date, setDate] = useState({ year: 2024, month: null, week: null, day: null })
  const [daySchedule, setDaySchedule] = useState(null)
  const [selectedWeek, setSelectedWeek] = useState([])

  const monthIdx = urlParams[3]
  const weekIdx = urlParams[5]
  const dayIdx = urlParams[7]

  useEffect(() => {
    var monthInput = MONTHS[+monthIdx - 1]
    const dayInput = DAYS[dayIdx]
    setDate(state => ({ ...state, month: monthInput, week: weekIdx, day: dayInput }))
    fetchDay(monthIdx)
  }, [year, pathname])

  function fetchDay(monthIdx) {
    if (year?.length) {
      const currentWeek = year?.find((_, idx) => idx === monthIdx - 1)[weekIdx - 1]
      // console.log('currentWeek:', currentWeek)
      setSelectedWeek(currentWeek)
      var selectedDay = currentWeek?.find((day, idx) => {
        return +day.day === +dayIdx * +weekIdx
      })
    }
    if (selectedDay?.timestamp) {
      const dayWithTasks = assignTasksToDay(selectedDay, user?.tasks)
      console.log('dayWithTasks:', dayWithTasks)
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
      <div className="flex flex-row items-center justify-between gap-2 w-full mb-3 text-white">
        {selectedWeek?.map((day, idx) => {
          const dayOfWeek = format(new Date(day.timestamp), "EEE")

          return <div
            key={idx}
            className={`${idx + 1 === +dayIdx ? 'font-bold' : ''
              } flex flex-col items-center gap-2`}
          >
            {day?.day && <>
              <h3>{day.day}</h3>
              <h3>{dayOfWeek}</h3>
            </>}
          </div>
        }

        )}
      </div>
      <TimeSlots daySchedule={daySchedule} />
    </div>
  )
}
