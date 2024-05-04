'use client'

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { itemCardListType, itemCardType, itemListDataType } from "./utils/types"
import "./utils/hideScrollbar.css"

function ItemListCarousel({ data }:{ data:itemCardListType }) {
    return (
        <Carousel className="w-full">
            <CarouselContent className="md:px-10 mr-[-60px] py-2">
                {data.map((item,index) => (
                    <CarouselItem key={index} className="basis-1/2 min-[500px]:basis-1/3 md:basis-1/4 min-[930px]:basis-1/5 min-[1120px]:basis-1/6" >
                        
                        <ItemCard data={item} />

                    </CarouselItem>
                ))}

                {/* scrap data .. ignore ----------------- */}
                <article className="w-[60px] text-transparent h-full ">aefaefae</article>
            </CarouselContent>
            <CarouselPrevious className="translate-x-[48px] hidden md:flex"/>
            <CarouselNext className="-translate-x-[48px] hidden md:flex"/>
        </Carousel>
    )
}


function ItemCard({ data }:{ data:itemCardType }) {
    return (
        <Link href={data.link} className="cursor-pointer flex flex-col items-stretch justify-stretch rounded-md shadow-md hover:shadow-[#ff385c50] transition-all duration-500  bg-white p-1 min-w-[140px] pb-3">
            <span className="aspect-video bg-[#aaa] rounded-md overflow-hidden"><Image src={data.img} alt={""} height={250} width={250}/></span>
            <h3 className="py-2 text-lg md:text-base font-semibold pl-1 truncate">{data.title}</h3>
            <span className="flex gap-2 items-baseline justify-start mt-[-8px] pl-1">
                <h3 className="font-bold text-lg">{data.discount <= 0 ? data.mrp : data.mrp*(1 - data.discount) }</h3>
                <del className={`text-[#7779] text-sm ${data.discount > 0 ? "" : "hidden"}`}>{data.mrp}</del>
            </span>
            
        </Link>
    )
}


export function ItemsList({ title, data }:{ title:string, data:itemListDataType }) {
    const [ currTabIndex, setCurrTabIndex ] = useState(0)
    const totalHeaderTypes = data.length
    const handleTabChange = (index:number) => {
        setCurrTabIndex(prev => index)
    }
    return (
        <section className="my-5 flex flex-col items-stretch justify-center max-[768px]:px-3 max-[1199px]:px-5">
            <h1 className="text-2xl font-medium mb-3">{title}</h1>
            {totalHeaderTypes < 2 ? <></> : <div className="flex gap-2 items-center justify-start relative overflow-x-scroll scrollbar-hide *:py-1 *:px-2 *:text-xs *:border-[1px] *:rounded-sm *:cursor-pointer *:transition-all *:duration-300">
                                                {data.map((item,index) => (
                                                    <span onClick={()=>handleTabChange(index)} className={index === currTabIndex ? "bg-[#ff385c] text-white border-[#ff385c]" : `hover:border-[#ff385c] hover:text-[#ff385c] hover:font-semibold text-[#121212] border-[#12121265]`}>{item.header}</span>
                                                ))}
                                            </div> 
            }
            
            <div className="flex items-center justify-start gap-3 mb-5 mt-2 max-w-[100dvw]">
                {data.map((item,index) => (
                    (index === currTabIndex) ? (
                        <ItemListCarousel data={item.data} />
                    ) : <></>
                ))}
            </div>
        </section>
    )
}

