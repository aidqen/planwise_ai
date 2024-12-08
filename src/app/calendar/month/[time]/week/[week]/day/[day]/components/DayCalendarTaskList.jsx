import { TaskCalendarPreview } from './TaskCalendarPreview'

export function DayCalendarTaskList({ tasks }) {
  const sortedTasks = tasks?.sort((a, b) => a.timestamp - b.timestamp)
  console.log('sortedTasks:', sortedTasks)

  const isOverlapping = (taskA, taskB) => {
    return (
      taskA.timestamp < taskB.finishTimestamp &&
      taskB.timestamp < taskA.finishTimestamp
    )
  }

  return sortedTasks?.map((task, idx) => {
    const overlapsWithPrevious = idx > 0 && isOverlapping(task, sortedTasks[idx - 1])
    const overlapsWithNext =
      idx < sortedTasks.length - 1 && isOverlapping(task, sortedTasks[idx + 1])

    return (
      <TaskCalendarPreview
        task={task}
        idx={idx}
        key={task.id}
        overlapsWithPrevious={overlapsWithPrevious}
        overlapsWithNext={overlapsWithNext}
      />
    )
  })
}
