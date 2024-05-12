import { ReactNode } from "react"
import styles from "./backdrop.module.css"
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
      className={styles.container}
      style={{
        alignItems: vertical[verticalPosition],
        justifyContent:
          horizontal[horizontalPosition]
      }}
    >
      <div
        className={styles.backdrop}
        onClick={handleClick}
      />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
