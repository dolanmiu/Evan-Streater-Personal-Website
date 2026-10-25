import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accompaniment",
  description: "Professional piano accompaniment by Evan Streater.",
};

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
      {children}
    </p>
  );
}

export default function AccompanimentPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:py-28">
          <Kicker>Accompaniment</Kicker>
          <h1 className="font-serif text-4xl leading-tight md:text-5xl">
            Piano Accompaniment
          </h1>
          <p className="max-w-xl leading-relaxed text-muted">
            Professional piano accompaniment by Evan Streater. With over 20
            years of experience performing alongside some of Australia&apos;s
            best soloists and chamber musicians, I bring reliability, attentive
            musicianship and a wealth of educational expertise to every
            collaboration. Starting at AUD$150 per hour, with additional costs
            for travel and advanced repertoire preparation.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="flex flex-col items-start gap-12">
            <Link
              href="/contact"
              className="border border-accent bg-accent px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-transparent hover:text-accent"
            >
              Discuss your accompaniment needs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
