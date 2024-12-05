import { useRef } from "react"
import { TaskPreview } from "./TaskPreview";

export function TodoContainer({ tasks }) {
  return (
    <div className="flex flex-col items-start justify-start mt-5 gap-4">
      <h3 className="text-white gap-2">
        To-dos{' '}
        <span className="text-white py-2 px-3 bg-base-300 rounded-full">
          3 Tasks
        </span>
      </h3>
      <ul className="flex flex-col w-full gap-3">

      {tasks.map(task => (
          <TaskPreview key={task.id} task={task} />
      ))}
      </ul>
    </div>
  )
}
