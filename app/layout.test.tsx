import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import RootLayout from "./layout";

vi.mock("next/font/google", () => ({
  Geist: () => ({ variable: "--font-geist-sans" }),
  Geist_Mono: () => ({ variable: "--font-geist-mono" }),
  Playfair_Display: () => ({ variable: "--font-playfair" }),
}));

describe("RootLayout", () => {
  it("wraps the page in a document with the nav, footer, and content", () => {
    render(
      <RootLayout>
        <p>Page content</p>
      </RootLayout>
    );

    expect(document.documentElement).toHaveAttribute("lang", "en");
    const brandLinks = screen.getAllByRole("link", { name: "Evan Streater" });
    expect(brandLinks).toHaveLength(2);
    for (const link of brandLinks) {
      expect(link).toHaveAttribute("href", "/");
    }
    expect(screen.getByText("Page content")).toBeInTheDocument();
    expect(
      screen.getByText(
        `© ${new Date().getFullYear()} Evan Streater. All rights reserved.`
      )
    ).toBeInTheDocument();
  });
});
