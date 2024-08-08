import { FooterLinksSectionType, FooterSocialLinksType } from "../../static/types"

export type DefaultFooterType = { 
    header: string | JSX.Element, 
    footerLinks: FooterLinksSectionType , 
    disallowedRoutes: string[],
    socialLinks: FooterSocialLinksType,
    brandName: string
}