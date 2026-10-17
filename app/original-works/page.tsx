import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Original Works",
  description: "Original compositions by pianist and composer Evan Streater.",
};

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
      {children}
    </p>
  );
}

export default function OriginalWorksPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:py-28">
          <Kicker>Original Works</Kicker>
          <h1 className="font-serif text-4xl leading-tight md:text-5xl">
            Original Works
          </h1>
          <p className="max-w-xl leading-relaxed text-muted">
            My original compositions are written for solo piano and small
            ensemble. I blend classical craft with a contemporary, personal
            voice — often drawing on memory, reflection, and narrative.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                A Year to Remember
              </h2>
              <p className="leading-relaxed text-muted">
                A set of three original piano pieces focused on moments from the
                past year. Available on the upcoming album of the same name,
                Coming Soon.
              </p>
            </div>
            <Link
              href="/contact"
              className="border border-accent bg-accent px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-transparent hover:text-accent"
            >
              Purchase sheet music
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
