import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import LessonsPage from "./page";

describe("LessonsPage", () => {
  it("renders the lessons heading", () => {
    render(<LessonsPage />);

    expect(screen.getByText("Lessons")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 1, name: "Piano Lessons" })
    ).toBeInTheDocument();
  });

  it("links the overview cards to the single and bundle sections", () => {
    render(<LessonsPage />);

    const moreLinks = screen.getAllByRole("link", { name: "More →" });
    expect(moreLinks).toHaveLength(2);
    expect(moreLinks[0]).toHaveAttribute("href", "#single");
    expect(moreLinks[1]).toHaveAttribute("href", "#bundles");
  });

  it("describes single lessons and bundles with booking links", () => {
    render(<LessonsPage />);

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "A fresh perspective on your playing.",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: "Commit to your musical growth.",
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Get in touch to book" })
    ).toHaveAttribute("href", "/contact");
    expect(
      screen.getByRole("link", { name: "Enquire about bundles" })
    ).toHaveAttribute("href", "/contact");
  });

  it("covers good to know and how it works", () => {
    render(<LessonsPage />);

    expect(screen.getByText("Good to Know")).toBeInTheDocument();
    expect(screen.getByText(/Bring a prepared piece/i)).toBeInTheDocument();
    expect(screen.getByText("How It Works")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: "Say hello" })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Get in Touch" })).toHaveAttribute(
      "href",
      "/contact"
    );
  });
});
