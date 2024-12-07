'use client'

import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import React, { useState } from 'react'

export default function CalendarPage() {
  const params = useParams()
  console.log('params:', params.view)
  const [view, setView] = useState(params?.view)
  const yearMonths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  function onSetView(value, ev) {
    ev.preventDefault()
    setView(value)
  }

  return (
    <div className="flex flex-col justify-start w-full">
      <ul className="flex flex-col justify-start items-center gap-3 px-10 py-5">
        {yearMonths.map((month, idx) => (
          <Link key={month} href={`calendar/month/${idx + 1}`} className="flex justify-center items-center rounded-lg py-1 px-4 border-white border w-full">{month}</Link>
        ))}
      </ul>
    </div>
  )
}
