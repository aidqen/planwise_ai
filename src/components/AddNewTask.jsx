'use client'
import { toggleTaskModal } from '@/store/actions/system.actions'
import { X } from 'lucide-react'
import { useSelector } from 'react-redux'

export function AddNewTask({}) {
  const taskModalOpen = useSelector(state => state.systemModule.taskModalOpen)

  function onToggleTaskModal() {
    toggleTaskModal(false)
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
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-lg">Create Task</h3>
          <input
            type="text"
            name='title'
            placeholder="Title"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name='description'
            placeholder="Description"
            className="input input-bordered w-full max-w-xs"
          />
          <div className="w-full flex flex-row justify-between">
            <h4>Color</h4>
          <input
            type="color"
            name='description'
            placeholder="Description"
            className="w-10 h-10 max-w-xs border-none outline-none appearance-none bg-transparent rounded-[20px]"
            />
            </div>
        </div>
      </div>
    </dialog>
  )
}
