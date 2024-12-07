'use client'
import { assignTasksToMonth } from '@/services/calendarUtils'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { MonthDayPreview } from './MonthDayPreview'

export function MonthDays({}) {
  const params = useParams()
  const year = useSelector(state => state.systemModule.year)
  const user = useSelector(state => state.userModule.user)
  const [month, setMonth] = useState([])

  useEffect(() => {
    if (params?.time) {
      const newMonth = year?.find((_, idx) => idx + 1 === +(params?.time ?? 0))
      if (newMonth) {
        const updatedMonth = assignTasksToMonth(newMonth, user?.tasks)
        setMonth(updatedMonth)
      }
    }
  }, [params, year, user])


  return (
    <div className="flex flex-col gap-1">
      {month?.map((week, weekIdx) => (
        <ul key={weekIdx} className={`week-${weekIdx + 1} grid grid-cols-7 gap-1`}>
          {week.map((day, dayIdx) => (
            <MonthDayPreview key={dayIdx} day={day} monthIdx={params?.time} weekIdx={weekIdx} dayIdx={dayIdx} />
          ))}
        </ul>
      ))}
    </div>
  )
}
