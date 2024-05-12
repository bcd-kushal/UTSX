'use client'
import { Input } from "@/components/ui/input"
import { REGEX_TEST } from "../utils/regex"
import { ChangeEvent, useEffect, useState } from "react"
import { setCookie } from "../utils/cookies"
import { allCitiesType, popularCitiesType } from "../utils/types"

interface LocationSearchLogicInterface { setGlobalLoc: React.Dispatch<React.SetStateAction<string>>, popularCities?: popularCitiesType, allCities: allCitiesType, cookieKey: string }

export function LocationSearchLogic({ setGlobalLoc, popularCities, allCities, cookieKey }: LocationSearchLogicInterface) {
    const [currLoc, setCurrLoc] = useState("")
    const [dots, setDots] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => setDots(prev => (prev + 1) % 4), 750)
        return () => clearInterval(interval)
    }, [])

    const filteredCities = {
        popularCities: () => {
            return popularCities ? currLoc === "" ? popularCities : popularCities.filter((city) => city.name.toLowerCase().includes(currLoc.toLowerCase())) : []
        },
        allCities: () => {
            return currLoc === "" ? allCities : allCities.filter((city) => city.toLowerCase().includes(currLoc.toLowerCase()))
        }
    }

    const handleLocation = (e: ChangeEvent<HTMLInputElement>) => {
        if (REGEX_TEST.ALPHABETS.test(e.target.value))
            setCurrLoc(prev => e.target.value)
    }

    const handleLocationClick = (e: any) => {
        let selectedLocation = ''

        // selection from all cities ----------------
        if (e.target.children.length === 0) {
            const name = e.target.textContent
            if (name === 'svg' || name === undefined)
                selectedLocation = e.target.nextSibling.textContent
            else
                selectedLocation = name
        }

        // selection from popular cities ------------
        else
            selectedLocation = e.target.children[1]?.textContent


        // once location is provided, set it as cookie -----------
        setCookie({ key: cookieKey, value: selectedLocation })
        setGlobalLoc(_prev => selectedLocation)
    }

    return (

        <div className="mt-4 mb-4 flex flex-col items-stretch justify-start gap-3">
            <Input placeholder="Select location" className="py-5" onChange={handleLocation} value={currLoc} />
            <section className="flex flex-col items-stretch justify-start overflow-y-scroll h-[calc(100dvh_-_142px)] scrollbar-hide">

                {/* Popular cities ---------------- */}
                {filteredCities.popularCities().length === 0 ?
                    <></> : <>
                        <span className="font-medium text-lg my-3 pt-3">Popular cities</span>
                        <article className="grid grid-cols-3 gap-3">
                            {filteredCities.popularCities().map((city, index) => (
                                <div className="group flex flex-col items-center justify-center p-2 shadow-sm border-[0.667px] border-[#12121215] hover:border-[#ff385c85] hover:shadow-lg hover:text-[#ff385c] hover:bg-[#ff385c15] transition-all duration-500 cursor-pointer rounded-lg" onClick={handleLocationClick} key={index}>
                                    <span>svg</span>
                                    <span className="text-sm text-[#2229] group-hover:text-[#ff385c] duration-500 transition-colors">{city.name}</span>
                                </div>
                            ))}
                        </article>
                    </>
                }



                {/* All cities -------------------- */}
                {filteredCities.allCities().length === 0 ?
                    <></> : <>
                        <span className="font-medium text-lg my-3 pt-3">All cities</span>
                        <article className="flex flex-col items-stretch justify-start *:cursor-pointer *:px-3 *:rounded-md *:py-1 *:text-[#2229] *:transition-all *:duration-300">
                            {filteredCities.allCities().map((city, index) => (
                                <div className="hover:bg-[#12121215] hover:text-[#121212]" key={index} onClick={handleLocationClick}>{city}</div>
                            ))}
                        </article>
                    </>
                }


                {/* If no city -------------------- */}
                {filteredCities.allCities().length === 0 && filteredCities.popularCities().length === 0 ?
                    <div className="mt-16 flex flex-col items-center justify-center">
                        <span className="text-lg text-[#121212] font-bold">Oops{Array(dots).fill('.').join('')}</span>
                        <span className="text-[#3339] text-sm pt-1">Service unavailable for &ldquo;{currLoc}&rdquo;</span>
                    </div> : <></>
                }
            </section>
        </div>

    )
}