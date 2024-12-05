
export function MonthDaysTitles() {

    const daysList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  return (
    <ul className="grid grid-cols-7 items-center gap-1 w-full">
      {daysList.map((day, idx) => (
        <h3
          key={day}
          className={`flex justify-center items-center py-1 px-2 bg-[#133E87] text-gray-300 min-w-[14%] text-sm rounded-md col-start-${
            idx + 1
          }`}
        >
          {day}
        </h3>
      ))}
    </ul>
  )
}
