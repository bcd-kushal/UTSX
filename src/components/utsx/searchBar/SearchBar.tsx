'use client'
import { useState } from "react"
import { PopoverSearchBox } from "./logic/PopoverSearchBox"
import { SearchSVG } from "./utils/svgs"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { SearchBoxInputType, SearchBarProps, SearchTagsType } from "./utils/types"

const SearchBoxInput = ({ placeholder, onKeyUp, searchVal }:SearchBoxInputType) => {
    return (
        <input type="text" placeholder={placeholder} value={searchVal} onChange={(e)=>onKeyUp(prev=>(e.target as HTMLInputElement).value)} className="outline-none bg-transparent border-none max-w-full w-[100%]" />
    )
}



export default function SearchBar({props, searchTags}:{props:SearchBarProps, searchTags?:SearchTagsType}) {
    const [searchValue, setSearchValue] = useState<string>("")

    const placeholder = props.placeholder || "Search"
    const searchBoxSide = props.popupSide || "bottom"

    return (
        <div className="w-full h-fit py-2 px-3 flex gap-2 items-center justify-start rounded-lg border-[1px] border-[#12121240] hover:border-[#12121299] focus-within:border-[#12121299] transition-all duration-300">
            <SearchSVG className="stroke-[#303030]"/>
            <Popover modal={true}>
                {/* Input field ------------------------------------ */}
                <PopoverTrigger className="w-full">
                    <SearchBoxInput searchVal={searchValue} onKeyUp={setSearchValue} placeholder={placeholder} />
                </PopoverTrigger>

                {/* Popup field ------------------------------------ */}
                <PopoverContent sideOffset={15} onOpenAutoFocus={(e)=>e.preventDefault()} side={searchBoxSide}  className="p-0 w-fit max-w-[calc(100dvw_-_32px)] min-w-[288px] -translate-x-[12px]">
                    <PopoverSearchBox inputValue={searchValue} setState={setSearchValue} searchTags={searchTags} />
                </PopoverContent>
            </Popover>
        </div>
    )
}