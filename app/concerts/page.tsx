import type { Metadata } from "next";
import { concerts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Concerts",
  description: "Upcoming and recent performances by Evan Streater.",
};

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
      {children}
    </p>
  );
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

export default function ConcertsPage() {
  const sorted = [...concerts].sort((a, b) => a.date.localeCompare(b.date));

  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:py-28">
          <Kicker>Concerts</Kicker>
          <h1 className="font-serif text-4xl leading-tight md:text-5xl">
            Upcoming & Recent Performances
          </h1>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-col">
            {sorted.map((c) => (
              <div
                key={c.date + c.venue}
                className="flex flex-col gap-3 border-t border-line py-8 md:flex-row md:items-baseline md:gap-8"
              >
                <p className="w-56 shrink-0 text-sm text-muted">{formatDate(c.date)}</p>
                <div className="flex flex-col gap-1">
                  <h2 className="font-serif text-2xl">{c.program}</h2>
                  <p className="text-sm text-muted">
                    {c.venue} · {c.city}
                  </p>
                  {c.note && <p className="mt-2 text-sm text-muted">{c.note}</p>}
                </div>
              </div>
            ))}
            <div className="border-t border-line" />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="max-w-xl leading-relaxed text-muted">
            For the most current schedule, venue changes, or to request a
            performance in your city,{" "}
            <a
              href="/contact"
              className="text-accent transition-colors hover:text-foreground"
            >
              get in touch
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}