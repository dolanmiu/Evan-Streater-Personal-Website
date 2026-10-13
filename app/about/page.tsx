import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Biography of concert pianist Evan Streater.",
};

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent">
      {children}
    </p>
  );
}

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:py-28">
          <Kicker>Biography</Kicker>
          <h1 className="max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
            Concert Pianist, Collaborator, Composer
          </h1>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex max-w-3xl flex-col gap-12">
            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-2xl text-foreground">Pianist</h2>
              <div className="flex flex-col gap-6 leading-relaxed text-muted">
                <p>
                  Evan Streater is a Sydney-based classical pianist,
                  collaborator, and composer whose work brings high-calibre
                  performance beyond the concert hall. Whether in bars,
                  restaurants, galleries, or other unconventional spaces, his
                  aim is to make chamber music feel immediate, social, and
                  alive.
                </p>
                <p>
                  After completing a Bachelor of Music with First Class Honours
                  at the Sydney Conservatorium of Music and finishing his Master
                  of Music at the Royal College of Music in London, Evan spent
                  several years working across Sydney&apos;s music-education
                  scene as a teacher and accompanist while maintaining an active
                  performance practice.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-2xl text-foreground">
                Collaborator
              </h2>
              <div className="flex flex-col gap-6 leading-relaxed text-muted">
                <p>
                  A defining early project was The Chamber Project, a series he
                  founded to present classical music in a more relaxed,
                  &ldquo;gig-style&rdquo; format. Through site-specific programs
                  in bars and other informal venues, it brought classical,
                  cabaret, and jazz-inspired music to new audiences, pairing
                  world-class musicianship with the atmosphere of the space.
                </p>
                <p>
                  Alongside his own projects, Evan has worked as a casual
                  pianist with the Sydney Symphony Orchestra and the Australian
                  Chamber Orchestra. He maintains a close network of
                  instrumentalists for duo and chamber collaborations, creating
                  performances shaped around particular venues, audiences, and
                  occasions.
                </p>
                <p>
                  Online, Evan shares the working life of a pianist through
                  regular practice livestreams on YouTube. The channel offers an
                  open, educational look at repertoire study, technique,
                  interpretation, and the daily process behind performance.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-2xl text-foreground">Composer</h2>
              <div className="flex flex-col gap-6 leading-relaxed text-muted">
                <p>
                  Composition is an increasingly central part of his practice.
                  His music blends classical craft with a contemporary, personal
                  voice, often drawing on memory, reflection, and narrative. His
                  latest project, A Year to Remember, is a set of three original
                  piano pieces focused on moments of his life from the past
                  year. Across the stage, the studio, and online, Evan&apos;s
                  work is united by a simple aim: to make music welcoming,
                  transparent, and part of everyday life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
