'use client'
import { Plus } from "lucide-react";
import { usePathname } from "next/navigation";

export function PlusButton() {
  const pathname = usePathname()

  return <div className={`${pathname.includes('task/new') ? 'hidden' : ''} fixed bottom-10 right-10 flex flex-row h-14 max-sm:w-14 justify-center items-center text-lg bg-blueCrayola z-[50] rounded-full text-white gap-1`}>
    <Plus size={30} className="text-white"/>
    <span className="max-sm:hidden block">New Task</span>
  </div>
}
