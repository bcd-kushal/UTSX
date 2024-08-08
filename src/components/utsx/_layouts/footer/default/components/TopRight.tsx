import Link from "next/link";
import { FooterLinksSectionType } from "../static/types";

export default function FooterTopRight({
  data
}: {
  data: FooterLinksSectionType;
}) {
  return (
    <section className="grid grid-cols-2 sm:flex sm:flex-wrap *:min-w-fit items-start justify-start sm:justify-end gap-x-3 gap-y-8 sm:gap-10 text-obsidian-muted pb-5 sm:pb-12 max-sm:px-1">
      {data.map(({ title, links }, index) => (
        <div
          className="flex flex-col items-start justify-start gap-2 sm:pr-14"
          key={index}
        >
          <span className="text-lg font-semibold capitalize sm:mb-1">
            {title}
          </span>
          <div className="flex flex-col items-start justify-start gap-2 sm:gap-3 text-obsidian-muted/60">
            {links.map(({ label, link }, index2) => (
              <Link
                href={link}
                className={`transition-all duration-300 hover:brightness-75 hover:text-gold`}
                prefetch
                key={index2}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
