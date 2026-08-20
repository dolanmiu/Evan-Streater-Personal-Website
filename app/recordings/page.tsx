import type { Metadata } from "next";
import { recordings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Recordings",
  description: "Discography and recordings by pianist Evan Streater.",
};

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
      {children}
    </p>
  );
}

export default function RecordingsPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:py-28">
          <Kicker>Recordings</Kicker>
          <h1 className="font-serif text-4xl leading-tight md:text-5xl">
            Selected Discography
          </h1>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-col gap-10">
            {recordings.map((rec) => (
              <div
                key={rec.title}
                className="flex flex-col gap-8 border-t border-line py-8 md:flex-row"
              >
                <div className="aspect-square w-full shrink-0 bg-gradient-to-br from-surface-2 to-background md:w-56" />
                <div className="flex flex-col gap-2">
                  <p className="text-xs uppercase tracking-widest text-muted">
                    {rec.label} · {rec.year}
                  </p>
                  <h2 className="font-serif text-2xl md:text-3xl">
                    {rec.title}
                  </h2>
                  <p className="max-w-xl leading-relaxed text-muted">
                    {rec.blurb}
                  </p>
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
            Recordings are available on major streaming platforms. Links to
            stream or purchase will be added here.
          </p>
        </div>
      </section>
    </>
  );
}
