import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Booking and contact information for pianist Evan Streater.",
};

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
      {children}
    </p>
  );
}

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:py-28">
          <Kicker>Contact</Kicker>
          <h1 className="font-serif text-4xl leading-tight md:text-5xl">
            Book a Performance
          </h1>
          <p className="max-w-xl leading-relaxed text-muted">
            For presenters, ensembles, and venues. Please include proposed
            dates, venue details, and programming interests.
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <form className="grid max-w-3xl gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-muted">
                Name
                <input
                  type="text"
                  name="name"
                  required
                  className="border border-line-strong bg-surface px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-accent"
                  placeholder="Your name"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-muted">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  className="border border-line-strong bg-surface px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-accent"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm text-muted">
              Organization / Venue
              <input
                type="text"
                name="organization"
                className="border border-line-strong bg-surface px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-accent"
                placeholder="Optional"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-muted">
              Message
              <textarea
                name="message"
                required
                rows={6}
                className="resize-y border border-line-strong bg-surface px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-accent"
                placeholder="Tell me about your event, dates, and programming."
              />
            </label>
            <div>
              <button
                type="submit"
                className="border border-accent bg-accent px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-transparent hover:text-accent"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      <section>
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 md:py-20">
          <Kicker>Direct</Kicker>
          <p className="text-muted">
            Email:{" "}
            <a
              href="mailto:hello@evanstreater.com"
              className="text-foreground transition-colors hover:text-accent"
            >
              hello@evanstreater.com
            </a>
          </p>
          <p className="text-sm text-muted">
            Management & representation details to be added.
          </p>
        </div>
      </section>
    </>
  );
}