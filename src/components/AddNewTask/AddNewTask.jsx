export function AddNewTask({}) {
  const taskModalOpen = useSelector(state => state.systemModule.taskModalOpen)
  return (
    <dialog
      id="my_modal_1"
      className="modal shadow-lg bg-black/60"
      open={taskModalOpen}
    >
    </dialog>
  )
}
