import { useState } from 'react'

export function DayPicker({ setNewTask, recurrence }) {
  const { onDays } = recurrence

  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

  function toggleDay(dayIndex) {
    if (onDays.includes(dayIndex)) {
      setNewTask(newTask => ({
        ...newTask,
        recurrence: { ...recurrence, onDays: onDays?.filter(day => day !== dayIndex) },
      }))
    } else {
      setNewTask(newTask => ({
        ...newTask,
        recurrence: { ...recurrence, onDays: [...onDays, dayIndex] },
      }))
    }
  }

  return (
    <div className={`flex space-x-2 w-full min-h-[3em] items-center justify-around px-4 dropdown-animation`}>
      {days.map((day, index) => (
        <button
          key={index}
          onClick={() => toggleDay(index)}
          className={`w-6 h-6 flex items-center justify-center rounded-[8px] font-medium text-xs ${
            onDays?.includes(index)
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          } transition-colors`}
        >
          {day}
        </button>
      ))}
    </div>
  )
}
