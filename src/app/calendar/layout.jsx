'use client'
import { SET_YEAR } from '@/store/reducers/system.reducer'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getDaysOfYear } from '../../services/calendarUtils'

export default function CalendarLayout({ children }) {
  const dispatch = useDispatch()
  const pathname = usePathname()
  const [isYearView, setIsYearView] = useState(true)

  useEffect(() => {
    setIsYearView(!(pathname.includes('month') || pathname.includes('week')))
  }, [pathname])

  useEffect(() => {
    dispatch({ type: SET_YEAR, year: getDaysOfYear(2024) })
  }, [])

  const heading = isYearView ? ['year'] : ['week', 'month']

  return (
    <div className="flex flex-col">
      <div className="flex flex-row text-white gap-7 mb-10">
        {heading.map(text => (
          <h1 key={text} className="capitalize">
            {text}
          </h1>
        ))}
      </div>
      {children}
    </div>
  )
}
