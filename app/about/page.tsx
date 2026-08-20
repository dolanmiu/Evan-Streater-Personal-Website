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
            Concert Pianist · Chamber Musician · Collaborator
          </h1>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_2fr] md:py-24">
          <Kicker>Early Years</Kicker>
          <div className="flex flex-col gap-6 leading-relaxed text-muted">
            <p>
              Evan Streater began piano studies at age six and made his first
              orchestral appearance at fourteen. He studied at the Royal Academy
              of Music in London, where his teachers included some of the most
              distinguished pedagogues of the British school.
            </p>
            <p>
              Early on, he developed a particular affinity for the Romantic
              repertoire — Chopin, Liszt, and Brahms — while pursuing an equally
              deep engagement with contemporary composition.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_2fr] md:py-24">
          <Kicker>Career</Kicker>
          <div className="flex flex-col gap-6 leading-relaxed text-muted">
            <p>
              Since his debut, Evan has performed as soloist and chamber
              musician across North America and Europe, in venues ranging from
              intimate recital halls to major concert stages. He has appeared in
              collaboration with string quartets, wind ensembles, and
              orchestras.
            </p>
            <p>
              His programming is known for pairing canonical masterworks with
              underrepresented and living voices, often built around a single
              narrative thread that runs through an entire evening.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_2fr] md:py-24">
          <Kicker>Philosophy</Kicker>
          <div className="flex flex-col gap-6 leading-relaxed text-muted">
            <p>
              &ldquo;The piano is a whole orchestra contained in a single
              instrument,&rdquo; Evan says. &ldquo;My aim is to make each line
              sing, each harmony breathe, and each silence mean
              something.&rdquo;
            </p>
            <p>
              He approaches every program as an act of curation — shaping
              contrasts of light and shadow, energy and stillness, so that an
              evening of music tells one coherent story.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
