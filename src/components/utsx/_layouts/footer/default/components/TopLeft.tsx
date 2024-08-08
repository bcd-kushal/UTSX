export default function FooterTopLeft({ content }: { content: JSX.Element | string }) {
  return (
    <section className="flex flex-col items-center sm:items-start justify-start pb-6 sm:pb-10">
      {content}
    </section>
  );
}
