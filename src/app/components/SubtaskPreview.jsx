import { ImCheckmark } from "react-icons/im"

export function SubtaskPreview({ subtask, isOpen }) {
    const { title, isDone } = subtask;

    return (
        <div className={`ps-3 overflow-hidden transition-all duration-200 ${isOpen ? "max-h-[200px] opacity-100 translate-y-0" : " -translate-y-[100%] max-h-0 opacity-0"
            }`}>

            <div className={`flex flex-row items-center justify-start text-white ${isOpen ? '': 'max-h-0'}`}>
                {isDone ? (
                    <div className="flex justify-center items-center h-3 w-3 mr-2">
                        <ImCheckmark className={` ${isDone ? 'text-neutral-content' : 'text-white'}`} size={10} />
                    </div>
                    ) :
                    <span className={`flex justify-center items-center w-3 h-3 border-2 border-white rounded-full mr-2 flex-shrink-0 peer-checked:bg-white`}>
                    </span>
                }
                <h4 className={`${isDone ? 'line-through text-neutral-content' : ''} text-sm`}>{title}</h4>
            </div>
        </div>
    )
}