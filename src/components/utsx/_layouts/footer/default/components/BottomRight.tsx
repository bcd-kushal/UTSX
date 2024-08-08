import { ChildrenType, ClassNameType } from "@/common/types/reactTypes";
import Link from "next/link";
import { FooterSocialLinksType } from "../../static/types";

export default function FooterBottomRight({ socialLinks }: { socialLinks: FooterSocialLinksType }) {
	return (
		<section className="max-sm:col-start-1 max-sm:row-start-3 flex max-sm:flex-col items-center justify-center sm:justify-end max-sm:py-5 gap-1.5 sm:gap-3.5 text-obsidian-muted/50 sm:text-obsidian-muted text-sm">
			{socialLinks.showLabel ?
				<span className="sm:text-[17px]">Follow Us:</span>
				: <></>
			}

			<div className="flex items-center justify-center sm:justify-end gap-3">
				{socialLinks.links.map(({ link, svg }, index) => (
					<Social link={link} key={index}> {svg} </Social>
				))}
			</div>
		</section>
	);
}

const Social = ({
	link,
	children,
	className
}: {
	link: string;
	children: ChildrenType;
	className?: ClassNameType;
}) => {
	return (
		<Link
			href={link}
			prefetch
			className={`text-obsidian-secondary/70 sm:text-obsidian-secondary/80 min-w-fit px-1 transition-all duration-300 hover:text-gold hover:brightness-75 ${className || ""}`}
		>
			{children}
		</Link>
	);
};
