import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AboutPage from "./page";

describe("AboutPage", () => {
  it("renders the biography title", () => {
    render(<AboutPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Pianist, Collaborator, Composer",
      })
    ).toBeInTheDocument();

    expect(screen.getByText("Biography")).toBeInTheDocument();
  });

  it("renders the biography copy", () => {
    render(<AboutPage />);

    for (const heading of ["Pianist", "Collaborator", "Composer"]) {
      expect(
        screen.getByRole("heading", { level: 2, name: heading })
      ).toBeInTheDocument();
    }

    expect(
      screen.getByText(/Sydney-based classical pianist/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/The Chamber Project/)).toBeInTheDocument();
    expect(screen.getByText(/A Year to Remember/)).toBeInTheDocument();
  });
});
