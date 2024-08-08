"use client"
import { usePathname } from "next/navigation"
import MaxWidthWrapper from "./components/MaxWidthWrapper"
import { FooterLinksSectionType } from "../static/types"
import FooterBottomLeft from "./components/BottomLeft"
import FooterBottomRight from "./components/BottomRight"
import FooterTopLeft from "./components/TopLeft"
import FooterTopRight from "./components/TopRight"

export default function DefaultFooterLayout({ footerLinks, disallowedRoutes }: { footerLinks: FooterLinksSectionType , disallowedRoutes: string[] }) {
  const currPath = usePathname()
  if (disallowedRoutes.includes(currPath)) return <></>

  return (
    <footer className="relative overflow-hidden flex-none flex h-fit mt-10 px-3 pb-4 pt-6 sm:px-5 sm:pb-5 sm:pt-8 md:pt-12 md:pb-8 1200:px-0 bg-gold/15 text-white">
      <MaxWidthWrapper className="z-20">
        <div className="grid grid-rows-[auto_auto] grid-cols-1 sm:grid-cols-[1fr_3fr] md:grid-cols-[1fr_4fr] gap-1.5 sm:gap-x-6">
          <FooterTopLeft />
          <FooterTopRight data={footerLinks} />
          <FooterBottomLeft />
          <FooterBottomRight />
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}
