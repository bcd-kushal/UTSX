export type FooterThemeType = "default" | "new-york"

export type FooterLinksSectionType = Array<{
    _id: string
    title: string
    links: { label: string; link: string }[]
}>
  
export type FooterType = { theme: FooterThemeType, footerLinks: FooterLinksSectionType, disallowedRoutes: string[] }