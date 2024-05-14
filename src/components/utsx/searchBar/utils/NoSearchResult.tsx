import { TelescopeSVG } from "./svgs"

export const NoSearchResult = ({searchWord}:{searchWord:string}) => {
    return (
        <div className="w-full h-full flex items-center justify-center gap-1 flex-col">
            <span className="pb-1"><TelescopeSVG dimensions={28} stroke="#333"/></span>
            <span className="text-lg">Oops...</span>
            <span className="text-sm text-[#12121275]">We searched far and wide but found nothing for &apos;{searchWord}&apos;</span>
        </div>
    )
}