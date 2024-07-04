import Backdrop from "./Backdrop"

export default function Modal({
  title,
  onCancel,
  onAction,
  triggerType
}: {
  title: string
  onCancel: () => void
  onAction: () => void
  triggerType?: "normal" | "destructive"
}) {
  return (
    <Backdrop
      handleClick={onCancel}
      verticalPosition="center"
      horizontalPosition="center"
    >
      <div
        className={`bg-card-primary py-6 px-8 min-w-[280px] shadow-lg rounded-xl flex flex-col items-stretch justify-between gap-3`}
      >
        <div
          className={`text-center text-[#121212] text-2xl pb-3 pt-2`}
        >
          <h5>{title}</h5>
        </div>
        <div
          className={`w-full flex items-end justify-between *:rounded-lg *:py-2 *:px-3 *:cursor-pointer *:transition-colors *:duration-300`}
        >
          
          <button
            onClick={onCancel}
            className="text-[#121212] bg-[#12121215] hover:bg-[#12121240]"
          >
            Cancel
          </button>
          
          <button
            onClick={onAction}
            className={`text-white bg-[#121212] ${triggerType === "destructive" ? "hover:bg-red-700" : "hover:bg-[#0075FE]"}`}
          >
            Confirm
          </button>
        </div>
      </div>
    </Backdrop>
  )
}
