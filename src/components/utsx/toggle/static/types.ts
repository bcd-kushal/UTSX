import { SetStateAction } from "react"

type SetStateType<T> = React.Dispatch<SetStateAction<T>>
export type ToggleType = { value: boolean, setValue: SetStateType<boolean>, onClickCallback?: () => void, activeColor?: string, inactiveColor?: string, activeBGColor?: string, inactiveBGColor?: string, className?: string, pillClassName?: string }