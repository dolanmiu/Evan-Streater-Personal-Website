export type Concert = {
  date: string;
  venue: string;
  city: string;
  program: string;
  note?: string;
};

export type Recording = {
  title: string;
  label: string;
  year: string;
  blurb: string;
};

export const concerts: Concert[] = [
  {
    date: "2026-09-27",
    venue: "College of Mount St. Vincent",
    city: "Riverdale, Bronx, NY",
    program: "An Evening of Liszt",
    note: "Works of Liszt, Scriabin, and Medtner.",
  },
  {
    date: "2026-10-18",
    venue: "Merkin Hall",
    city: "New York, NY",
    program: "Beethoven & Beyond",
    note: "Sonata in C minor, Op. 111 and works by Thomas Adès.",
  },
  {
    date: "2026-11-07",
    venue: "Conservatory Concert Hall",
    city: "Cambridge, MA",
    program: "Chopin Recital",
    note: "Ballades, Nocturnes, and the B-flat minor Sonata.",
  },
  {
    date: "2026-12-12",
    venue: "St. Martin's-in-the-Fields",
    city: "London, UK",
    program: "Bach to Rachmaninoff",
    note: "A program spanning three centuries of keyboard music.",
  },
];

export const recordings: Recording[] = [
  {
    title: "Études: Reflections",
    label: "Independent Release",
    year: "2026",
    blurb:
      "A recording of Chopin's Études paired with contemporary responses to the genre.",
  },
  {
    title: "Letters from the Keys",
    label: "Arcadia Records",
    year: "2025",
    blurb:
      "Intimate miniatures and character pieces tracing a private musical correspondence.",
  },
  {
    title: "The Late Works",
    label: "Meridian Classics",
    year: "2024",
    blurb:
      "Late sonatas and late songs of Schubert in a program of quiet farewells.",
  },
];
