import { format, getHours } from "date-fns"

export function UpcomingTaskPreview({task}) {
    const startTimeHours = format(task.timestamp, "h:mmaaa");
    const endTimeHours = format(task.finishTimestamp, "h:mmaaa");

    return (
        <li className="flex items-center gap-2">
            <div className="w-0.5 h-5 bg-cyan-400"></div>
            <div>
                <div className="text-white font-medium">{task?.title}</div>
                <div className="text-gray-400 text-sm">{startTimeHours} - {endTimeHours}</div>
            </div>
        </li>
    )

}