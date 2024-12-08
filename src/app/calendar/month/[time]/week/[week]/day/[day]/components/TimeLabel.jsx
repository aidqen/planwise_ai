export function TimeLabel({ time }) {
  return (
    <div
      key={time}
      className="grid grid-cols-[12.3%,88%] items-start justify-end h-16 relative"
    >
      {/* Time Label */}

      <div className="absolute -top-2 max-sm:left-0 left-[8%] flex justify-start items-start w-11 pr-2 text-sm text-white/70">
        <h4>{time === '24:00' ? '00:00' : time}</h4>
      </div>
      <div className=" absolute bg-white/20 left-2 h-full w-[1px] col-start-2" />
      <div className="bg-white/20 h-[1px] w-full px-3 col-start-2"></div>
    </div>
  )
}
