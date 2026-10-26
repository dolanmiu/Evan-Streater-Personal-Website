import Link from "next/link";
import { recordings, youtubeUrl } from "@/lib/content";

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
      {children}
    </p>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative border-b border-line">
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-36">
          <div className="flex flex-col gap-6">
            <Kicker>Pianist · Collaborator · Composer</Kicker>
            <h1
              className="font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl text-white"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}
            >
              Evan Streater
            </h1>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/lessons"
                className="border border-accent bg-accent px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-transparent hover:text-accent"
              >
                Book a Lesson
              </Link>
              <Link
                href="/contact"
                className="border border-line-strong px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Book a Performance
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Recordings */}
      <section className="border-b border-line bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex flex-col gap-4">
              <Kicker>Recordings</Kicker>
              <h2 className="font-serif text-3xl md:text-4xl">
                Selected discography
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link
                href="/recordings"
                className="text-sm font-medium text-accent transition-colors hover:text-foreground"
              >
                All recordings →
              </Link>
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-accent transition-colors hover:text-foreground"
              >
                Watch on YouTube →
              </a>
            </div>
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
      <section className="border-b border-line bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-20 md:py-28">
          <Kicker>Engagement</Kicker>
          <h2 className="max-w-2xl font-serif text-3xl leading-tight md:text-4xl">
            Performance inquiries
          </h2>
          <p className="max-w-xl leading-relaxed text-muted">
            For booking inquiries, collaborations, or private engagements, reach
            out below.
          </p>
          <Link
            href="/contact"
            className="border border-accent bg-accent px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-transparent hover:text-accent"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Concerts */}
      <section className="border-b border-line bg-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:py-28">
          <Kicker>Concerts</Kicker>
          <div className="border border-line bg-surface p-8 md:p-12">
            <p className="font-serif text-3xl leading-snug md:text-5xl">
              Coming Soon
            </p>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
              New concert dates are on their way — check back soon.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block text-sm font-medium text-accent transition-colors hover:text-foreground"
            >
              Get in touch →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
