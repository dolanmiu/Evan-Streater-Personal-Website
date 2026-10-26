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

  it("includes the Cal.com booking trigger button", () => {
    render(<LessonsPage />);

    const bookButton = screen.getByRole("button", {
      name: "Book a Lesson Online",
    });
    expect(bookButton).toHaveAttribute("data-cal-link", "evanstreater/lesson");
    expect(bookButton).toHaveAttribute("data-cal-namespace", "lesson");
    expect(bookButton).toHaveAttribute(
      "data-cal-config",
      '{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
    );
  });

  it("displays single lessons and lesson bundles with pricing", () => {
    render(<LessonsPage />);

    expect(
      screen.getByRole("heading", { level: 2, name: "Single Lessons" })
    ).toBeInTheDocument();
    expect(screen.getByText("USD$120 per lesson")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Lesson Bundles" })
    ).toBeInTheDocument();
    expect(
      screen.getByText("USD$550 (USD$110 per lesson)")
    ).toBeInTheDocument();
    expect(
      screen.getByText("USD$1000 (USD$100 per lesson)")
    ).toBeInTheDocument();
  });

  it("links single lessons and bundles booking to contact page", () => {
    render(<LessonsPage />);

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
