import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ConcertsPage from "./page";

describe("ConcertsPage", () => {
  it("shows coming soon", () => {
    render(<ConcertsPage />);

    expect(screen.getByText("Concerts")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 1, name: "Coming Soon" })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/New concert dates are on their way/i)
    ).toBeInTheDocument();
  });

  it("links to the contact page", () => {
    render(<ConcertsPage />);

    expect(screen.getByRole("link", { name: "get in touch" })).toHaveAttribute(
      "href",
      "/contact"
    );
  });
});
