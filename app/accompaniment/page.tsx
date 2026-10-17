import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accompaniment",
  description:
    "Piano accompaniment for exams, auditions, and performances by Evan Streater.",
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
            Professional piano accompaniment for exams, auditions, recitals, and
            performances. Sensitive, reliable, and attentive to the soloist.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="flex max-w-3xl flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                Exams & auditions
              </h2>
              <p className="leading-relaxed text-muted">
                Accompaniment for graded music exams, conservatory auditions,
                and competitions. I work with instrumentalists and singers to
                ensure a confident, well-rehearsed performance on the day.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                Recitals & performances
              </h2>
              <p className="leading-relaxed text-muted">
                From student recitals to professional concerts, I provide
                tasteful, responsive accompaniment shaped around your repertoire
                and interpretation.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                Rehearsals
              </h2>
              <p className="leading-relaxed text-muted">
                Regular rehearsal sessions available to prepare your program,
                work on ensemble balance, and build confidence before stepping
                on stage.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="border border-accent bg-accent px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-transparent hover:text-accent"
          >
            Discuss your accompaniment needs
          </Link>
        </div>
      </section>
    </>
  );
}
