import { CROSS, TICK } from "../constants/texts"


export function TickCross({ isValid }:{ isValid:boolean }) {
    return (
        <>{isValid ? TICK : CROSS}</>
    )
}