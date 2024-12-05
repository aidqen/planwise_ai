import { ChevronDown, ChevronUp } from "lucide-react";



export function ChevronUpDown({setIsOpen}) {

    function toggleSubtasksView() {
        setIsOpen((state) => !state)
    }

    return (
        <div className="flex justify-center items-center h-8 w-8 
        bg-whiteLowOpacity rounded-[10px]">
            <label className="relative h-max w-max rounded-[10px] swap swap-rotate ">
                <input type="checkbox" className="absolute inset-0 opacity-0" onChange={toggleSubtasksView} />
                <ChevronDown className="swap-off text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                <ChevronUp className="swap-on text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </label>
        </div>
    )
}