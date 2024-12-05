"use client"

import { format, getDate, getDay, getHours, getMonth, getYear } from 'date-fns'
import { userEx } from './../../jsons/daily';
import { UpcomingFocus } from './components/UpcomingFocus'
import { useEffect, useState } from 'react'
import { TodoContainer } from './components/TodoContainer'

export default function Home() {
  const user = userEx

  const now = Date.now()
  const dayOfWeek = format(now, 'EEE')
  const todayFormatted = format(now, 'MMM, dd')

  const [today, setToday] = useState({ year: 0, month: 0, day: 0, hour: 0 });
  const [todayTasks, setTodayTasks] = useState([])


  useEffect(() => {
    getTodaysTime()
  }, [user?.tasks])

  useEffect(() => {
    if (today.year && today.month && today.day) {
      getTodaysTasks();
    }
  }, [today])
  

  function getTodaysTime() {
    const hour = getHours(now)
    const year = getYear(now)
    const day = getDate(now)
    const month = getMonth(now) + 1
    setToday({ year, month, day, hour })
  }


  function getTodaysTasks() {
    console.log('user:', user)
    setTodayTasks(
      user?.tasks?.filter(
        task => {
          console.log('getDay(task?.timestamp):', getDay(task?.timestamp))
          return getDate(task?.timestamp) === today.day &&
            getMonth(task?.timestamp) + 1 === today.month &&
            getYear(task?.timestamp) === today.year
        }
      )
    )
    console.log('setTodaytasks:', todayTasks)
  }


  console.log('dateNow:', todayFormatted)
  return (
    <>
        <h1 className="text-4xl mb-2 text-white">Today</h1>
        <h2 className="flex flex-row items-center ps-1 gap-2 text-base-content mb-5">
          <span>{todayFormatted}</span>
          <span>•</span>
          <span>{dayOfWeek}</span>
        </h2>
        <UpcomingFocus todayTasks={todayTasks} today={today} />
        <TodoContainer tasks={todayTasks}/>
    </>
  )
}
