import { SVGType } from "./types"

export const SearchSVG = ({ dimensions, stroke, fill, className }: SVGType) => { return ( <svg xmlns="http://www.w3.org/2000/svg" width={dimensions || "18"} height={dimensions || "18"} viewBox="0 0 24 24" fill={fill || "none"} stroke={stroke || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className || ""} ><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>)}




