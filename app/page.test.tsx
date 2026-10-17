import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import HomePage from "./page";
import { youtubeUrl } from "@/lib/content";

type MockRecording = {
  title: string;
  label: string;
  year: string;
  blurb: string;
};

const recording: MockRecording = {
  title: "Études: Reflections",
  label: "Independent Release",
  year: "2026",
  blurb: "A recording of Chopin's Études.",
};

const mockRecordings = vi.hoisted(() => ({ value: [] as MockRecording[] }));
const mockYoutubeUrl = vi.hoisted(() => ({
  value: "https://www.youtube.com/@EvanStreater",
}));

vi.mock("@/lib/content", () => ({
  get recordings() {
    return mockRecordings.value;
  },
  get youtubeUrl() {
    return mockYoutubeUrl.value;
  },
}));

beforeEach(() => {
  mockRecordings.value = [recording];
});

describe("HomePage", () => {
  it("renders the hero section with calls to action", () => {
    render(<HomePage />);

    expect(
      screen.getByText("Pianist · Collaborator · Composer")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 1, name: "Evan Streater" })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Book a Lesson" })).toHaveAttribute(
      "href",
      "/lessons"
    );
    expect(
      screen.getByRole("link", { name: "Book a Performance" })
    ).toHaveAttribute("href", "/contact");
  });

  it("shows coming soon for concerts", () => {
    render(<HomePage />);

    expect(screen.getByText("Coming Soon")).toBeInTheDocument();
    expect(
      screen.getByText(/New concert dates are on their way/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Get in touch →" })
    ).toHaveAttribute("href", "/contact");
  });

  it("renders the selected discography", () => {
    render(<HomePage />);

    expect(
      screen.getByRole("heading", { level: 2, name: "Selected discography" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "All recordings →" })
    ).toHaveAttribute("href", "/recordings");
    expect(
      screen.getByRole("link", { name: "Watch on YouTube →" })
    ).toHaveAttribute("href", youtubeUrl);

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
        name: "Performance inquiries",
      })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Get in Touch" })).toHaveAttribute(
      "href",
      "/contact"
    );
  });
});
