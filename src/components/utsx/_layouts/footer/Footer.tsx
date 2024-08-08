import DefaultFooterLayout from "./default/DefaultFooter"
import { FooterType } from "./static/types"

export default async function Footer({ theme, footerLinks, disallowedRoutes }:FooterType) {
    if(theme==="default")
        return <DefaultFooterLayout footerLinks={footerLinks} disallowedRoutes={disallowedRoutes} />
}