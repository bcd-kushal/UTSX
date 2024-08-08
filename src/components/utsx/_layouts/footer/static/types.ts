export type FooterThemeType = "default" | "new-york"

export type FooterLinksSectionType = Array<{
    _id: string
    title: string
    links: { label: string; link: string }[]
}>
  
export type FooterType = { 
    theme: FooterThemeType, 
    header: JSX.Element | string,
    footerLinks: FooterLinksSectionType, 
    disallowedRoutes: string[],
    socialLinks: FooterSocialLinksType,
    brandName: string
}

export type ChildrenType = Readonly<React.ReactNode>

export type FooterSocialLinksType = {
    showLabel?: boolean,
    links: { link: string, svg: JSX.Element }[]
}