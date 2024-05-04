'use client'
import React, { useState } from "react"
import { LocationSearchLogic } from "./location-search-logic/LocationSearchLogic"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { allCitiesType, popularCitiesType, TraySideType, BreakpointType } from "./utils/types"
import { CompassIcon } from "lucide-react"


export function LocationSet({ cookieLocation, side, children, cookieKey, allCities, popularCities }:{ cookieLocation:string, side?:TraySideType, cookieKey:string, allCities:allCitiesType, popularCities?:popularCitiesType, children?:Readonly<React.ReactNode> }) {
    const [currLocation,setCurrLocation] = useState(cookieLocation)

    return (
        <Sheet>
            <SheetTrigger className="w-fit" asChild>                

                {children}

            </SheetTrigger>
            <SheetContent side={side || "right"}>
                <SheetHeader>
                    <SheetTitle>Select location</SheetTitle>
                </SheetHeader>

                <SheetDescription>
                    Select your location here. Click save when done.
                </SheetDescription>

                <LocationSearchLogic setGlobalLoc={setCurrLocation} allCities={allCities} popularCities={popularCities} cookieKey={cookieKey}  />

            </SheetContent>
        </Sheet>
    )
}
