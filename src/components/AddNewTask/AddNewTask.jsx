'use client'
import { toggleTaskModal } from '@/store/actions/system.actions'
import { X } from 'lucide-react'
import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { ToggleBtn } from '../ToggleBtn'
import { TaskRepeat } from './TaskRepeat'

export function AddNewTask({}) {
  const taskModalOpen = useSelector(state => state.systemModule.taskModalOpen)
  const colorInputRef = useRef(null)
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    bg: '#fff',
    recurrence: { isOn: false, onDays: [0,1,2,3,4,5,6] },
    isTodo: false,
    isDone: false,
    subtasks: [],
    timestamp: '',
    finishTimestamp: '',
    logo: ''
  })
  console.log('newTask:', newTask)

  function handleChange({ target }) {
    console.log('target:', target.name)
    setNewTask(task => ({ ...task, [target.name]: target.value }))
  }

  function onToggleTaskModal() {
    toggleTaskModal(false)
  }

  function onColorClick() {
    colorInputRef.current.click()
  }

  return (
    <dialog
      id="my_modal_1"
      className="modal shadow-lg bg-black/60"
      open={taskModalOpen}
    >
      <div className="modal-box flex flex-col h-[90%] w-[90%]">
        <button className="btn rounded-full min-w-10 max-w-10 min-h-10 max-h-10 p-0 mb-4">
          <X className="text-white" size={17} onClick={onToggleTaskModal}></X>
        </button>
        <div className="flex flex-col gap-4 w-full">
          <h3 className="font-bold text-lg">Create Task</h3>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="Title"
            className="input input-bordered focus:outline-0 w-full max-w-full"
          />
          <input
            type="text"
            name="description"
            onChange={handleChange}
            placeholder="Description"
            className="input input-bordered focus:outline-0 w-full max-w-full"
          />
          <div className="w-full flex flex-row justify-between items-center rounded-[0.5em] input input-bordered">
            <h4 className="text-gray-400">Color</h4>
            <div
              onClick={onColorClick}
              style={{ backgroundColor: newTask?.bg }}
              className="h-8 w-8 rounded-[10px]"
            ></div>
            <input
              type="color"
              name="bg"
              onChange={handleChange}
              value={newTask.bg}
              className="hidden"
              ref={colorInputRef}
            />
          </div>
          <TaskRepeat setNewTask={setNewTask} newTask={newTask} />
        </div>
      </div>
    </dialog>
  )
}
