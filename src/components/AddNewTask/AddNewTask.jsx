export function AddNewTask({}) {
  const taskModalOpen = useSelector(state => state.systemModule.taskModalOpen)
  const colorInputRef = useRef(null)
  function onToggleTaskModal() {
    toggleTaskModal(false)
  }

  function onColorClick() {
    colorInputRef.current.click()
  }

  return (
    <dialog
      id="my_modal_1"
      className="modal shadow-lg bg-black/60"
      open={taskModalOpen}
    >
      <div className="modal-box flex flex-col h-[90%] w-[90%]">
        <button className="btn rounded-full min-w-10 max-w-10 min-h-10 max-h-10 p-0 mb-4">
          <X className="text-white" size={17} onClick={onToggleTaskModal}></X>
        </button>
        <div className="flex flex-col gap-4 w-full">
          <h3 className="font-bold text-lg">Create Task</h3>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            placeholder="Title"
            className="input input-bordered focus:outline-0 w-full max-w-full"
          />
          <input
            type="text"
            name="description"
            onChange={handleChange}
            placeholder="Description"
            className="input input-bordered focus:outline-0 w-full max-w-full"
          />
          <div className="w-full flex flex-row justify-between items-center rounded-[0.5em] input input-bordered">
            <h4 className="text-gray-400">Color</h4>
            <div
              onClick={onColorClick}
              style={{ backgroundColor: newTask?.bg }}
              className="h-8 w-8 rounded-[10px]"
            ></div>
            <input
              type="color"
              name="bg"
              onChange={handleChange}
              value={newTask.bg}
              className="hidden"
              ref={colorInputRef}
            />
          </div>
        </div>
      </div>
    </dialog>
  )
}
