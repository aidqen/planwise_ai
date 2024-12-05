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
    if (params?.time && typeof params.time === 'string') {
      const newMonth = year?.find((month, idx) => idx + 1 === +(params?.time ?? 0))
      if (newMonth) {
        const updatedMonth = assignTasksToMonth(newMonth, user?.tasks ?? [])
        setMonth(updatedMonth)
      }
    }
  }, [params, year, user])

  return (
    <div className="flex flex-col gap-1">
      {month?.map((week, idx) => (
        <ul key={idx} className={`week-${idx + 1} grid grid-cols-7 gap-1`}>
          {week.map((day, dayIdx) => (
            <MonthDayPreview key={dayIdx} day={day} dayIdx={dayIdx} />
          ))}
        </ul>
      ))}
    </div>
  )
}
