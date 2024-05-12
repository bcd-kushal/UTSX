import { ReactNode } from "react"
// import styles from "./backdrop.module.css"
import { vertical, horizontal } from "../constants/defaults"

export default function Backdrop({
  handleClick = () => {},
  verticalPosition = "center",
  horizontalPosition = "center",
  children
}: {
  handleClick?: () => void
  verticalPosition?: "top" | "center" | "bottom"
  horizontalPosition?:
    | "left"
    | "center"
    | "right"
  children: ReactNode
}) {
  return (
    <div
      className={``}
      style={{
        alignItems: vertical[verticalPosition],
        justifyContent:
          horizontal[horizontalPosition]
      }}
    >
      <div
        className={``}
        onClick={handleClick}
      />
      <div className={``}>
        {children}
      </div>
    </div>
  )
}
