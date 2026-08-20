import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { recordings } from "@/lib/content";
import RecordingsPage from "./page";

describe("RecordingsPage", () => {
  it("renders the discography heading", () => {
    render(<RecordingsPage />);

    expect(screen.getByText("Recordings")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Selected Discography",
      })
    ).toBeInTheDocument();
  });

  it("lists every recording with its details", () => {
    render(<RecordingsPage />);

    for (const recording of recordings) {
      expect(
        screen.getByRole("heading", { level: 2, name: recording.title })
      ).toBeInTheDocument();
      expect(
        screen.getByText(`${recording.label} · ${recording.year}`)
      ).toBeInTheDocument();
      expect(screen.getByText(recording.blurb)).toBeInTheDocument();
    }
  });

  it("mentions streaming availability", () => {
    render(<RecordingsPage />);

    expect(
      screen.getByText(/Recordings are available on major streaming platforms/i)
    ).toBeInTheDocument();
  });
});
