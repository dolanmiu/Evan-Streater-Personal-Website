import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from "./Footer";
import { youtubeUrl } from "@/lib/content";

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

  it("links to YouTube", () => {
    render(<Footer />);

    const link = screen.getByRole("link", {
      name: "Evan Streater on YouTube",
    });
    expect(link).toHaveAttribute("href", youtubeUrl);
    expect(link).toHaveAttribute("target", "_blank");
  });
});
