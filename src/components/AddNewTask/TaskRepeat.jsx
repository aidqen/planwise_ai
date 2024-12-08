import { ToggleBtn } from '../ToggleBtn'
import { DayPicker } from './DayPicker'

export function TaskRepeat({ setNewTask, newTask }) {
  const { recurrence } = newTask
  return (
    <div className={`${recurrence?.isOn ? 'h-auto' : ''} flex flex-col justify-between input input-bordered focus:outline-0 focus-within:outline-0`}>
      <div className={`w-full flex flex-row justify-between items-center min-h-[3em] rounded-[0.5em] focus-within:outline-0`}>
        <span>Repeat</span>
        <ToggleBtn setNewTask={setNewTask} isOn={newTask.recurrence.isOn} />
      </div>
      {recurrence?.isOn && (
        <DayPicker setNewTask={setNewTask} recurrence={recurrence} />
      )}
    </div>
  )
}
