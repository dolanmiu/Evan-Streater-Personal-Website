import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AboutPage from "./page";

describe("AboutPage", () => {
  it("renders the biography title and section kickers", () => {
    render(<AboutPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Concert Pianist · Chamber Musician · Collaborator",
      })
    ).toBeInTheDocument();

    for (const kicker of ["Biography", "Early Years", "Career", "Philosophy"]) {
      expect(screen.getByText(kicker)).toBeInTheDocument();
    }
  });

  it("tells the story across early years, career, and philosophy", () => {
    render(<AboutPage />);

    expect(
      screen.getByText(/began piano studies at age six/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Royal Academy of Music/)).toBeInTheDocument();
    expect(screen.getByText(/since his debut/i)).toBeInTheDocument();
    expect(
      screen.getByText(/a whole orchestra contained in a single/i)
    ).toBeInTheDocument();
  });
});
