"use client"
import { useParams } from "next/navigation"

export function MonthViewTitle() {
    const params = useParams()

     const monthsList = [
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
     
    return <h2 className="font-semibold text-white mb-7">
    {params?.time ? monthsList[+params.time - 1] : ''}, 2024
  </h2>
}