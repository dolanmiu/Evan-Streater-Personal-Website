import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import HomePage from "./page";

type MockConcert = {
  date: string;
  venue: string;
  city: string;
  program: string;
  note?: string;
};

type MockRecording = {
  title: string;
  label: string;
  year: string;
  blurb: string;
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

const recording: MockRecording = {
  title: "Études: Reflections",
  label: "Independent Release",
  year: "2026",
  blurb: "A recording of Chopin's Études.",
};

const mockConcerts = vi.hoisted(() => ({ value: [] as MockConcert[] }));
const mockRecordings = vi.hoisted(() => ({ value: [] as MockRecording[] }));

vi.mock("@/lib/content", () => ({
  get concerts() {
    return mockConcerts.value;
  },
  get recordings() {
    return mockRecordings.value;
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
  mockConcerts.value = [withNote, withoutNote];
  mockRecordings.value = [recording];
});

describe("HomePage", () => {
  it("renders the hero section with calls to action", () => {
    render(<HomePage />);

    expect(screen.getByText("Concert Pianist")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 1, name: "Evan Streater" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Upcoming Concerts" })
    ).toHaveAttribute("href", "/concerts");
    expect(
      screen.getByRole("link", { name: "Book a Performance" })
    ).toHaveAttribute("href", "/contact");
  });

  it("renders the about preview", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "A performer devoted to the full depth of the repertoire.",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Read the full biography →" })
    ).toHaveAttribute("href", "/about");
  });

  it("highlights the next performance including its note", () => {
    render(<HomePage />);

    expect(screen.getByText("Next Performance")).toBeInTheDocument();
    expect(screen.getByText(withNote.program)).toBeInTheDocument();
    expect(screen.getByText(formatDate(withNote.date))).toBeInTheDocument();
    expect(
      screen.getByText(`${withNote.venue} · ${withNote.city}`)
    ).toBeInTheDocument();
    expect(screen.getByText(withNote.note!)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "View all concerts →" })
    ).toHaveAttribute("href", "/concerts");
  });

  it("omits the note when the next performance has none", () => {
    const noNote = { ...withNote, note: undefined };
    mockConcerts.value = [noNote, withoutNote];

    render(<HomePage />);

    expect(screen.getByText(noNote.program)).toBeInTheDocument();
    expect(screen.queryByText(withNote.note!)).not.toBeInTheDocument();
  });

  it("hides the next performance section when there are no concerts", () => {
    mockConcerts.value = [];

    render(<HomePage />);

    expect(screen.queryByText("Next Performance")).not.toBeInTheDocument();
  });

  it("renders the selected discography", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { level: 2, name: "Selected discography" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "All recordings →" })
    ).toHaveAttribute("href", "/recordings");

    const recording = mockRecordings.value[0];
    expect(
      screen.getByText(`${recording.label} · ${recording.year}`)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: recording.title })
    ).toBeInTheDocument();
    expect(screen.getByText(recording.blurb)).toBeInTheDocument();
  });

  it("renders the engagement call to action", () => {
    render(<HomePage />);

    expect(screen.getByText("Engagement")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Presenters, ensembles, and venues — let's talk.",
      })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Get in Touch" })).toHaveAttribute(
      "href",
      "/contact"
    );
  });
});
