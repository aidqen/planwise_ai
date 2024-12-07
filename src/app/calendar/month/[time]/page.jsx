import { MonthDaysTitles } from './components/MonthDaysTitles'
import { MonthDays } from './components/MonthDays'
import { MonthViewTitle } from './components/MonthViewTitle'

export default function MonthView({}) {

  return (
    <div className="flex flex-col">
      <MonthViewTitle />
      <div className="flex flex-col gap-2">
        <MonthDaysTitles />
        <MonthDays />
      </div>
    </div>
  )
}
