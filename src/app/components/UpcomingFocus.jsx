import { getDate, getHours, getMonth, getYear } from 'date-fns'
import { useEffect, useState } from 'react'
import { UpcomingTaskPreview } from './UpcomingTaskPreview';



export function UpcomingFocus(props) {
  const { todayTasks, today } = props
  const [nextTasks, setNextTasks] = useState([])
  const [todayFormatted, setTodayFormatted] = useState({ monthName: '', dayName: '' })
  const { monthName, dayName } = todayFormatted
  console.log('todayFormatted:', todayFormatted)

  useEffect(() => {
    setNextUpTasks()
    setTodayFormatted(getMonthAndDayWords(today.month, today.day))
  }, [todayTasks, today])

  function getMonthAndDayWords(month, day) {
    const date = new Date(2024, month - 1, day);
    const monthName = date.toLocaleString('en', { month: 'short' });
    const dayName = date.toLocaleString('en', { weekday: 'long' });
    return { monthName, dayName };
  }
  function setNextUpTasks() {
    const tasks = todayTasks.filter(
      task => getHours(task?.timestamp) >= today?.hour
    )
    setNextTasks(tasks)
  }


  return (
    <>
      <h3 className="mb-4 flex flex-row items-center text-white font-normal">
        Upcoming Focus{' '}
      </h3>
      <div className="w-full max-w-md rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-4 shadow-2xl">
        <div className="flex gap-4">
          {/* Date Card */}
          <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-cyan-400 via-sky-400 to-pink-300 p-4 shadow-xl">
            <div className="text-white">
              <div className="text-3xl font-bold mb-1">Jun 9</div>
              <div className="text-sm font-medium opacity-90">{todayFormatted.dayName}</div>
              <div className="text-sm mt-4 font-medium opacity-75">{todayTasks?.length} Tasks</div>
            </div>
          </div>

          {/* Events List */}
          <div className="flex-1">
            <h3 className="text-gray-400 text-sm font-medium mb-3">UPCOMING</h3>
            <ul className="space-y-3">
              {todayTasks?.slice(0,2).map(task => (
                <UpcomingTaskPreview key={task?.id} task={task} />
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-[40%,60%] gap-3 p-2 rounded-[25px] bg-eerieBlack">
        <div className="flex flex-col justify-between p-5 col-start-1 text-white w-[9rem] h-[9rem] bg-cyan-600 rounded-[25px]">
          <h3 className="font-semibold whitespace-nowrap text-white text-md">{monthName}</h3>
          <div className="flex flex-col gap-0 text-sm ">
            <p className='text-base-content font-semibold'>{dayName}</p>
            <p className='font-semibold text-white'>{todayTasks.length} tasks</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start col-start-2 gap-3 p-4">
          <p className='uppercase text-base-content'>Upcoming</p>
          {todayTasks?.slice(0,2)?.map(task => (
            <UpcomingTaskPreview task={task} />
          ))}
        </div>
      </div> */}
      {/* <div className="grid grid-cols-[50%50%] p-4 bg-base-300 shadow-upcomingFocus  text-black rounded-[15px]"> */}
      {/* <div className="flex flex-col justify-between col-start-1">
          <ul className="flex flex-col items-start gap-3 mb-1">
            {todayTasks?.slice(0, 2).map(task => {
              return <UpcomingTaskPreview key={task?.id} task={task} />
            })}
          </ul>
          <div className="flex flex-row items-center justify-start gap-2 pt-4">
            <ul className="gap-1 flex flex-row items-center">
              {todayTasks?.map(task => (
                <li
                  key={task?.id}
                  className="list-none w-1 h-4 rounded-[15px]"
                  style={{ backgroundColor: task?.bg }}
                ></li>
              ))}
            </ul>
            <p className="text-base-content text-[0.825em]">
              {todayTasks.length ? `${todayTasks.length} Tasks Up Next` : (
                <>
                  No tasks today.<br />Enjoy your day!
                </>
              )}
            </p>
          </div>
        </div>
        <div className="h-full flex items-center justify-center">
          <button className="btn btn-neutral text-white shadow-lg">Open Calendar</button>
        </div> */}
      {/* </div> */}
    </>
  )
}
