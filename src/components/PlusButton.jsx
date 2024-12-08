'use client'
import { toggleTaskModal } from "@/store/actions/system.actions";
import { SET_TASK_MODAL } from "@/store/reducers/system.reducer";
import { Plus } from "lucide-react";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";

export function PlusButton() {
  const pathname = usePathname()
  const dispatch = useDispatch()

  function onToggleTaskModal() {
    toggleTaskModal(true)
  }

  return <div onClick={onToggleTaskModal} className={`${pathname.includes('task/new') ? 'hidden' : ''} fixed left-1/2 transform -translate-x-1/2 bottom-10 flex flex-row h-14 max-sm:w-14 justify-center items-center text-lg bg-primary z-[50] rounded-full text-white gap-1`}>
    <Plus size={20} className="text-white"/>
    <span className="max-sm:hidden block">New Task</span>
  </div>
}
