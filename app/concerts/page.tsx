import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concerts",
  description: "Concert dates coming soon.",
};

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
      {children}
    </p>
  );
}

export default function ConcertsPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:py-28">
          <Kicker>Concerts</Kicker>
          <h1 className="font-serif text-4xl leading-tight md:text-5xl">
            Coming Soon
          </h1>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="max-w-xl leading-relaxed text-muted">
            New concert dates are on their way — check back soon. To request a
            performance in your city,{" "}
            <Link
              href="/contact"
              className="text-accent transition-colors hover:text-foreground"
            >
              get in touch
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
