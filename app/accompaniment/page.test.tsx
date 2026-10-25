import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AccompanimentPage from "./page";

describe("AccompanimentPage", () => {
  it("renders the accompaniment heading", () => {
    render(<AccompanimentPage />);

    expect(screen.getByText("Accompaniment")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 1, name: "Piano Accompaniment" })
    ).toBeInTheDocument();
  });

  it("describes accompaniment services", () => {
    render(<AccompanimentPage />);

    expect(
      screen.getByText(/over 20 years of experience/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/best soloists and chamber musicians/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/AUD\$150 per hour/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Discuss your accompaniment needs" })
    ).toHaveAttribute("href", "/contact");
  });
});
