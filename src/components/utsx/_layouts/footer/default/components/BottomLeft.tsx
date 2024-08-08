export default function FooterBottomLeft({ brandName }:{ brandName: string }) {
  return (
    <section className="max-sm:row-start-4 text-xs text-obsidian-muted max-sm:text-center flex flex-col items-center sm:items-start justify-center sm:gap-0.5">
      <span>Copyright &copy; {new Date().getFullYear()} {brandName}</span>
      <span>All rights reserved</span>
    </section>
  );
}
