import DefaultFooterLayout from "./default/DefaultFooter"
import { FooterType } from "./static/types"

export default async function Footer({ theme, header, footerLinks, disallowedRoutes, socialLinks, brandName }: FooterType) {
    if (theme === "default")
        return <DefaultFooterLayout
            header={header}
            footerLinks={footerLinks}
            socialLinks={socialLinks}
            disallowedRoutes={disallowedRoutes}
            brandName={brandName}
        />
}