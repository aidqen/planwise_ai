'use client'
import { SET_YEAR } from '@/store/reducers/system.reducer'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getDaysOfYear } from '../../services/calendarUtils'
import Link from 'next/link'

export default function CalendarLayout({ children }) {
  const dispatch = useDispatch()
  const pathname = usePathname()
  const pathType = pathname.split('/')[2]

  useEffect(() => {
    dispatch({ type: SET_YEAR, year: getDaysOfYear(2024) })
  }, [])

  const heading = ['year', 'month']

  function href(type) {
    if (type === 'year') return '/calendar'
    else return `/calendar/${type}/1`
  }

  return (
    
    <div className="flex flex-col w-full h-full">
    {/* //   <div className="flex flex-row text-white gap-7 mb-10"> */}
    {/* //     {heading.map(text => ( */}
    {/* //       <Link */}
    {/* //         key={text} */}
    {/* //         href={href(text)} */}
    {/* //         className={`${pathType === text || (text === 'year' && !pathType) ? 'font-bold' : ''} capitalize`} */}
    {/* //       > */}
    {/* //         {text} */}
    {/* //       </Link> */}
    {/* //     ))} */}
    {/* //   </div> */}
      {children}
     </div>
  )
}
