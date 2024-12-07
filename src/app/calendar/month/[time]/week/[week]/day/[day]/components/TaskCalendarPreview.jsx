import { format } from "date-fns";

export function TaskCalendarPreview({ task, idx }) {
    console.log("task:", task);
    const startTime = task?.timestamp
        ? format(new Date(task.timestamp), "HH:mm")
        : "";
    const endTime = task?.finishTimestamp
        ? format(new Date(task.finishTimestamp), "HH:mm")
        : "";

    const topPosition = timeToPosition(startTime);
    const height = timeToPosition(endTime) - topPosition;
    console.log("topPosition:", topPosition);
    console.log("height:", height);

    function timeToPosition(time) {
        const [hours, minutes] = time.split(":").map(Number);
        const adjustedHours = hours - 5; // Subtract 5 hours to align with 5AM
        if (adjustedHours < 0) return 0; // Prevent negative positions
        return adjustedHours * 64 + (minutes / 60) * 64; // 4rem = 64px per hour
    }

    return (
        <div
            className="absolute left-10 w-[calc(100%-2rem)] bg-blue-500 text-white rounded-md p-2 shadow-lg"
            style={{
                top: `${topPosition}px`,
                height: `${height}px`,
            }}
        >
            <h3 className="text-sm font-bold text-white">{task.title}</h3>
            <p className="text-xs text-white/60">
                {startTime} - {endTime}
            </p>
        </div>
    );
}