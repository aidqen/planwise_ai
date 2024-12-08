import { OpenCloseBtn } from '@/app/components/OpenCloseBtn'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function CalendarTypeModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [onHover, setOnHover] = useState(false)

  console.log('isOpen:', isOpen)

  useEffect(() => {}, [isOpen])

  function toggleOpenModal(e) {
    e.preventDefault()
    setIsOpen(state => !state)
  }

  return (
    <form
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
      onClick={toggleOpenModal}
      className="flex flex-row items-center w-16 relative"
    >
      <label className={`${isOpen ? 'text-white' : 'text-white/70'} hover:text-white font-semibold transition-colors`}>
        Week
      </label>
      {onHover &&
        (isOpen ? (
          <ChevronDown className="opacity-show" />
        ) : (
          <ChevronUp className="opacity-show" />
        ))}
      {isOpen && (
        <div className="absolute top-5 -left-[10%] dropdown-animation flex flex-col">
          <option className="p-2 text-white/70 hover:text-white font-semibold" value="month">
            Month
          </option>
        </div>
      )}
    </form>
  )
}
