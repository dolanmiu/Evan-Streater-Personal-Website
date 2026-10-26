import type { Metadata } from "next";
import Link from "next/link";
import { CalScript } from "@/components/CalScript";

export const metadata: Metadata = {
  title: "Lessons",
  description:
    "One-on-one piano lessons and lesson bundles with Evan Streater.",
};

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
      {children}
    </p>
  );
}

export default function LessonsPage() {
  return (
    <>
      <CalScript />
      <section className="border-b border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:py-28">
          <Kicker>Lessons</Kicker>
          <h1 className="font-serif text-4xl leading-tight md:text-5xl">
            Piano Lessons
          </h1>
          <p className="max-w-xl leading-relaxed text-muted">
            One-on-one piano lessons for pianists seeking new insight into
            technique, repertoire, or interpretation — guided by over 20 years
            of teaching experience, so you can feel confident you&apos;re in
            good hands.
          </p>
          <button
            data-cal-link="evanstreater/lesson"
            data-cal-namespace="lesson"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className="border border-accent bg-accent px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-transparent hover:text-accent mt-4 md:mt-0"
          >
            Book a Lesson Online
          </button>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2 md:py-20">
          <div className="flex flex-col gap-6 border border-line bg-surface p-8">
            <h2 className="font-serif text-2xl">Single Lessons</h2>
            <p className="text-sm leading-relaxed text-muted">
              A one-off lesson focused on your repertoire and questions.
            </p>
            <p className="leading-relaxed text-muted">USD$120 per lesson</p>
            <Link
              href="/contact"
              className="border border-accent bg-accent px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-transparent hover:text-accent"
            >
              Get in touch to book
            </Link>
          </div>
          <div className="flex flex-col gap-6 border border-line bg-surface p-8">
            <h2 className="font-serif text-2xl">Lesson Bundles</h2>
            <p className="text-sm leading-relaxed text-muted">
              Regular lessons with a plan shaped around your goals and
              repertoire.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-xl">5 Lessons</h3>
                <p className="leading-relaxed text-muted">
                  USD$550 (USD$110 per lesson)
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-serif text-xl">10 Lessons</h3>
                <p className="leading-relaxed text-muted">
                  USD$1000 (USD$100 per lesson)
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="border border-line-strong px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Enquire about bundles
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_2fr] md:py-24">
          <Kicker>Good to Know</Kicker>
          <div className="flex flex-col gap-6">
            <h2 className="font-serif text-3xl leading-tight md:text-4xl">
              Before your first lesson.
            </h2>
            <ul className="flex flex-col gap-4 leading-relaxed text-muted">
              <li>
                Bring a prepared piece to work on — the choice of repertoire is
                entirely up to you.
              </li>
              <li>Lessons are one-on-one and tailored to your level.</li>
              <li>
                To discuss format, scheduling, and fees,{" "}
                <Link
                  href="/contact"
                  className="text-accent transition-colors hover:text-foreground"
                >
                  get in touch
                </Link>
                .
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="flex flex-col gap-12">
            <Kicker>How It Works</Kicker>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col gap-3">
                <p className="font-serif text-2xl text-accent">01</p>
                <h3 className="font-serif text-xl">Say hello</h3>
                <p className="text-sm leading-relaxed text-muted">
                  Tell me about your playing, your goals, and the repertoire
                  you&apos;d like to work on.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-serif text-2xl text-accent">02</p>
                <h3 className="font-serif text-xl">Arrange a time</h3>
                <p className="text-sm leading-relaxed text-muted">
                  We&apos;ll find a one-off or regular slot that fits your
                  routine.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-serif text-2xl text-accent">03</p>
                <h3 className="font-serif text-xl">Take your lesson</h3>
                <p className="text-sm leading-relaxed text-muted">
                  Meet for your lesson and leave with clear next steps for your
                  practice.
                </p>
              </div>
            </div>
            <div>
              <Link
                href="/contact"
                className="border border-accent bg-accent px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-transparent hover:text-accent"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
