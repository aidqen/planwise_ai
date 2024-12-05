'use client'

import { useParams, usePathname } from 'next/navigation'
import React, { useState } from 'react'

export default function CalendarPage() {
  const params = useParams()
  console.log('params:', params.view)
  const [view, setView] = useState(params?.view)
  const monthsOfTheYear = [
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
      <h1
        className="text-white/60 hover:scale-110 hover:text-white'
                    text-3xl duration-300 3xl"
      >
        Year
      </h1>
    </div>
  )
}
