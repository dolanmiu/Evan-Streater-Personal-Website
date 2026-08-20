import Link from "next/link";
import { concerts, recordings } from "@/lib/content";

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
      {children}
    </p>
  );
}

export default function HomePage() {
  const upcoming = concerts.toSorted((a, b) => a.date.localeCompare(b.date))[0];

  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-24 md:py-36">
          <Kicker>Concert Pianist</Kicker>
          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
            Evan Streater
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            Performing with expressive depth and clarity — from the great
            Classical and Romantic masters to the composers of our own time.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/concerts"
              className="border border-accent bg-accent px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-transparent hover:text-accent"
            >
              Upcoming Concerts
            </Link>
            <Link
              href="/contact"
              className="border border-line-strong px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Book a Performance
            </Link>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_2fr] md:py-28">
          <Kicker>About</Kicker>
          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-3xl leading-tight md:text-4xl">
              A performer devoted to the full depth of the repertoire.
            </h2>
            <p className="leading-relaxed text-muted">
              Evan Streater has appeared as soloist and chamber musician across
              North America and Europe, known for programs that balance
              canonical masterworks with living voices. His playing has been
              praised for its warmth, architectural clarity, and quiet
              intensity.
            </p>
            <Link
              href="/about"
              className="text-sm font-medium text-accent transition-colors hover:text-foreground"
            >
              Read the full biography →
            </Link>
          </div>
        </div>
      </section>

      {/* Next performance */}
      {upcoming && (
        <section className="border-b border-line">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:py-28">
            <Kicker>Next Performance</Kicker>
            <div className="border border-line bg-surface p-8 md:p-12">
              <p className="font-serif text-3xl leading-snug md:text-5xl">
                {upcoming.program}
              </p>
              <p className="mt-4 text-lg text-muted">
                {new Date(upcoming.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              <p className="text-lg text-muted">
                {upcoming.venue} · {upcoming.city}
              </p>
              {upcoming.note && (
                <p className="mt-6 max-w-xl leading-relaxed text-muted">
                  {upcoming.note}
                </p>
              )}
              <Link
                href="/concerts"
                className="mt-8 inline-block text-sm font-medium text-accent transition-colors hover:text-foreground"
              >
                View all concerts →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Recordings */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex flex-col gap-4">
              <Kicker>Recordings</Kicker>
              <h2 className="font-serif text-3xl md:text-4xl">
                Selected discography
              </h2>
            </div>
            <Link
              href="/recordings"
              className="text-sm font-medium text-accent transition-colors hover:text-foreground"
            >
              All recordings →
            </Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {recordings.map((rec) => (
              <div
                key={rec.title}
                className="flex flex-col border border-line bg-surface p-6"
              >
                <div className="aspect-square w-full bg-gradient-to-br from-surface-2 to-background" />
                <div className="mt-6 flex flex-1 flex-col">
                  <p className="text-xs uppercase tracking-widest text-muted">
                    {rec.label} · {rec.year}
                  </p>
                  <h3 className="mt-2 font-serif text-xl">{rec.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {rec.blurb}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section>
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-20 md:py-28">
          <Kicker>Engagement</Kicker>
          <h2 className="max-w-2xl font-serif text-3xl leading-tight md:text-4xl">
            Presenters, ensembles, and venues — let&apos;s talk.
          </h2>
          <p className="max-w-xl leading-relaxed text-muted">
            For booking inquiries, collaborations, or private engagements, reach
            out through the contact page.
          </p>
          <Link
            href="/contact"
            className="border border-accent bg-accent px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-transparent hover:text-accent"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
