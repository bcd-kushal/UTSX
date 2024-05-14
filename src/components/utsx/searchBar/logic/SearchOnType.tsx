'use client'
import { useState } from "react"
import { NoSearchResult } from "../utils/NoSearchResult"
import Image from "next/image"
import Link from "next/link"

export type SearchResultDataType = { title: string, description: string, icon?: string, link: string }[]

{/* SEARCH SHOW ON INPUT VALUE ENTRY ############################### */ }
export const FilledSearchFieldBox = ({ needle, haystack }: { needle: string, haystack: any }) => {
    const [hasLoaded, setHasLoaded] = useState<boolean>(true)
    const searchResults: SearchResultDataType = [
        {title:"Wordpress",description:"lorem ipsum",link:"#"},
        {title:"Wordpress",description:"lorem ipsum",link:"#"},
        {title:"Wordpress",description:"lorem ipsum",link:"#"},
    ]
    return (
        <section className="max-h-screen flex flex-col items-stretch justify-start gap-1">
            {hasLoaded ? <ShowSearchResults needle={needle} data={searchResults} /> : <NoSearchResult searchWord={needle} />}
        </section>
    )
}

export function ShowSearchResults({ data, needle }: { data: SearchResultDataType, needle: string }) {
    if(data.length===0)
        return ( <NoSearchResult searchWord={needle} /> )

    return (
        <>
            <span className="py-2 px-3 text-xs text-[#12121275] w-full text-right">Showing search results for &apos;{needle}&apos;</span>
            <div className="flex flex-col items-stretch justify-start even:*:bg-[#12121211]">
                {data.map((data, index) => (
                    <Link href={data.link} key={index} className="flex items-center justify-start px-4 gap-3 py-2 transition-all duration-300 hover:bg-[#12121225]">
                        <span className="overflow-hidden aspect-square rounded-full h-9"><Image src={"https://github.com/bcd-kushal.png"} width={40} height={40} alt="iconPfp"/></span>
                        <div className="flex flex-col w-full ">
                            <h2 className="text-lg font-semibold">{data.title}</h2>
                            <span className="mt-[-2px] text-sm">{data.description}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}
