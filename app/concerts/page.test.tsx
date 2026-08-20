import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import ConcertsPage from "./page";

type MockConcert = {
  date: string;
  venue: string;
  city: string;
  program: string;
  note?: string;
};

const withNote: MockConcert = {
  date: "2026-09-27",
  venue: "College of Mount St. Vincent",
  city: "Riverdale, Bronx, NY",
  program: "An Evening of Liszt",
  note: "Works of Liszt, Scriabin, and Medtner.",
};

const withoutNote: MockConcert = {
  date: "2026-10-18",
  venue: "Merkin Hall",
  city: "New York, NY",
  program: "Beethoven & Beyond",
};

const mockConcerts = vi.hoisted(() => ({ value: [] as MockConcert[] }));

vi.mock("@/lib/content", () => ({
  get concerts() {
    return mockConcerts.value;
  },
}));

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

beforeEach(() => {
  mockConcerts.value = [withoutNote, withNote];
});

describe("ConcertsPage", () => {
  it("renders performances sorted by date", () => {
    render(<ConcertsPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Upcoming & Recent Performances",
      })
    ).toBeInTheDocument();

    const concerts = screen.getAllByRole("heading", { level: 2 });
    expect(concerts).toHaveLength(2);
    expect(concerts[0]).toHaveTextContent(withNote.program);
    expect(concerts[1]).toHaveTextContent(withoutNote.program);

    expect(screen.getByText(formatDate(withNote.date))).toBeInTheDocument();
    expect(
      screen.getByText(`${withNote.venue} · ${withNote.city}`)
    ).toBeInTheDocument();
  });

  it("shows the note when a concert has one and omits it otherwise", () => {
    render(<ConcertsPage />);

    expect(screen.getByText(withNote.note!)).toBeInTheDocument();
    expect(screen.queryByText("Some note")).not.toBeInTheDocument();

    const headings = screen.getAllByRole("heading", { level: 2 });
    const noNoteHeading = headings.find(
      (heading) => heading.textContent === withoutNote.program
    );
    expect(noNoteHeading?.closest("div")?.parentElement).not.toHaveTextContent(
      withNote.note!
    );
  });

  it("links to the contact page", () => {
    render(<ConcertsPage />);

    expect(screen.getByRole("link", { name: "get in touch" })).toHaveAttribute(
      "href",
      "/contact"
    );
  });
});
