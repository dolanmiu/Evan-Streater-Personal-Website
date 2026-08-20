import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("links to the main pages", () => {
    render(<Footer />);

    for (const [label, href] of [
      ["About", "/about"],
      ["Concerts", "/concerts"],
      ["Recordings", "/recordings"],
      ["Contact", "/contact"],
    ]) {
      expect(screen.getByRole("link", { name: label })).toHaveAttribute(
        "href",
        href
      );
    }
  });

  it("shows the current copyright year", () => {
    render(<Footer />);

    expect(
      screen.getByText(
        `© ${new Date().getFullYear()} Evan Streater. All rights reserved.`
      )
    ).toBeInTheDocument();
  });
});
