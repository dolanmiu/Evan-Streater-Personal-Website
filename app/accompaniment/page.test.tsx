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
      screen.getByRole("link", { name: "Discuss your accompaniment needs" })
    ).toHaveAttribute("href", "/contact");
  });
});
