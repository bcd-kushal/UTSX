'use state'
import { ToggleType } from "./static/types"

export default function Toggle({ value, setValue, onClickCallback, activeColor, inactiveColor, activeBGColor, inactiveBGColor, className, pillClassName }: ToggleType) {
    const clickHandler = () => {
        setValue(prev => !prev)
        if(onClickCallback)
            onClickCallback()
    }

    return (
        <div onClick={clickHandler} className={`relative rounded-full p-1 w-9 flex items-center transition-all duration-300 cursor-pointer hover:brightness-90 ${value ? ( activeBGColor || `bg-green-200/70` ) : ( inactiveBGColor || "bg-neutral-300/70" )} ${className || ""}`}>
            <div className={`rounded-full h-3 aspect-square transition-all duration-300 ${value ? `translate-x-4 ${activeColor || "bg-green-500"}` : inactiveColor || "bg-neutral-800"} ${pillClassName || ""}`} />
        </div>
    )
}