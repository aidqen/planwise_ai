import { useState } from "react"
import { ImCheckmark } from "react-icons/im"
import { CircularProgress } from "@/components/CircularProgress"
import { ChevronDown, ChevronUp } from "lucide-react"
import { ChevronUpDown } from "./ChevronUpDown"
import { SubtaskPreview } from "./SubtaskPreview"



export function TaskPreview({ task }) {

  const [taskToEdit, setTaskToEdit] = useState(task);
  const [isOpen, setIsOpen] = useState(false)
  const { bg, title, description, subtasks, isDone } = taskToEdit;
  const subtasksDone = subtasks?.filter(subtask => subtask.isDone).length;
  const subtasksDonePercent =
    subtasks?.length > 0 ? (subtasksDone / subtasks.length) * 100 : 0;
  console.log('subtasksDonePercent:', subtasksDonePercent)


  const handleSpanClick = () => {
    setTaskToEdit({ ...taskToEdit, isDone: !taskToEdit.isDone })
  };

  return (
    <li style={{ backgroundColor: bg }} className={`flex flex-col gap-1 p-3 rounded-[15px] transition-all w-full ${isOpen ? '' : 'max-h-[5.6rem]'}`}>
      <div className="flex flex-row items-center justify-between">
        <label onClick={handleSpanClick} className="flex flex-row items-center">
          <span className={`flex justify-center items-center w-5 h-5 border-2 border-white rounded-full mr-2 flex-shrink-0 peer-checked:bg-white
                `}>
            <ImCheckmark className={`${isDone ? '' : 'hidden'} text-white`} size={10} />
          </span>
          <h3 className="text-md text-white">{title}</h3>
        </label>
        {subtasks.length ? (
          <ChevronUpDown setIsOpen={setIsOpen} />
        ) : ''}
      </div>
      {(description && !subtasks.length) && <p className="text-white/60 me-3 whitespace-nowrap truncate">{description}</p>}
      {subtasks.length ? <CircularProgress percent={subtasksDonePercent} /> : ''}
      <div className={`subtasks-list flex flex-col justify-start gap-2`}>
        {subtasks.length ? subtasks.map(subtask => <SubtaskPreview key={subtask?.id} subtask={subtask} isOpen={isOpen} />) : ''}
      </div>
    </li>
  )
}
