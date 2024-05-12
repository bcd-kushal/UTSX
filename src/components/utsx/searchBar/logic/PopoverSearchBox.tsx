import { ArrowTopRightIcon, CardStackPlusIcon, CounterClockwiseClockIcon, ImageIcon, Link2Icon, ReaderIcon, ResumeIcon } from "@radix-ui/react-icons"
import { SearchTagsType } from "../utils/types"
import { isValidInput } from "../utils/validInput"

const recentSearches = [
    { label:"Rajesh", timePast:"3m ago" },
    { label:"Rajesh", timePast:"3m ago" },
    { label:"Rajesh", timePast:"3m ago" },
    { label:"Rajesh", timePast:"3m ago" },
    { label:"Rajesh", timePast:"3m ago" },
    { label:"Rajesh", timePast:"3m ago" },
    { label:"Rajesh", timePast:"3m ago" },
    { label:"Rajesh", timePast:"3m ago" },
    { label:"Rajesh", timePast:"3m ago" },
    { label:"Rajesh", timePast:"3m ago" },
    { label:"Rajesh", timePast:"3m ago" },
    { label:"Rajesh", timePast:"3m ago" },
    { label:"Rajesh", timePast:"3m ago" },
    { label:"Rajesh", timePast:"3m ago" },
    { label:"Rajesh", timePast:"3m ago" },
]

export function PopoverSearchBox({ inputValue, setState, searchTags }: { inputValue: string, setState:React.Dispatch<React.SetStateAction<string>>, searchTags?:SearchTagsType }) {
    return (
        <section className="grid max-w-[calc(100dvw_-_32px)] w-[360px] sm:w-[450px] md:w-[640px] *:row-start-1 *:col-start-1"> 
            {isValidInput(inputValue) ? <FilledSearchFieldBox needle={inputValue} haystack={{}}/> : <EmptySearchFieldBox inputValue={inputValue} setState={setState} tags={searchTags}/>} 
        </section>
    )
}




{/* DEFAULT SEARCH SHOW ON CLICK ############################### */ }
const EmptySearchFieldBox = ({ inputValue, setState, tags }:{ inputValue:string, tags?:SearchTagsType, setState:React.Dispatch<React.SetStateAction<string>> }) => {

    return (
        <section className="max-h-screen min-h-[200px] pt-3 h-fit flex flex-col items-stretch justify-start">

            {/* tags ------------------------ */
            tags && tags.length > 0 ?   <div className="px-3 pb-3 border-b-[1px] border-[#cdcdcd] flex flex-wrap items-center justify-start gap-[6px] *:rounded-md *:py-1 *:px-2 *:border-[1px] *:border-[#12121225] *:duration-300 *:transition-all">
                                            {tags.map((tag,index) => (
                                                <span className="flex items-center justify-evenly gap-[6px] text-xs cursor-pointer hover:border-[#12121245] hover:shadow-md" key={index}>{tag.svg} {tag.label}</span>
                                            ))}
                                        </div> : <></>
                                    
            }
            

            {/* recent searches ------------------------ */}
            <div className="px-4 flex flex-col relative gap-1 items-stretch justify-start max-h-[300px] overflow-y-scroll">
                <span className="text-sm sticky top-0 text-[#12121285] bg-background py-3 hidden sm:block">Recent searches</span>
                <article className="flex flex-col items-stretch justify-start pb-3 pt-3 sm:pt-0">
                    {recentSearches.map((recent,index) => (
                        <div onClick={()=>setState(prev=>recent.label)} className={`group py-2 text-sm flex items-center justify-between transition-all duration-300 select-none ${index===0?"":"border-t-[1px] border-t-[#12121220]"}`} key={index}>
                            <span className="flex items-center gap-2"><CounterClockwiseClockIcon width={14} height={14} /> {recent.label}</span>
                            <span className="group-hover:opacity-100 opacity-0 text-xs text-[#12121240] transition-all duration-300">{recent.timePast}</span>
                        </div>
                    ))}
                </article>
            </div>

        </section>
    )
}


{/* DEFAULT SEARCH SHOW ON CLICK ############################### */ }
const FilledSearchFieldBox = ({needle,haystack}:{needle:string,haystack:any}) => {
    return (
        <section className="max-h-screen min-h-[200px] h-fit flex flex-col items-stretch justify-start gap-1">

            {/* tags ------------------------ */}
            {/* recent searches ------------------------ */}
            Search key: {needle}

        </section>
    )
}