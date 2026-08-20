import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ContactPage from "./page";

describe("ContactPage", () => {
  it("renders the booking heading and intro", () => {
    render(<ContactPage />);

    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 1, name: "Book a Performance" })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/For presenters, ensembles, and venues/i)
    ).toBeInTheDocument();
  });

  it("collects the required booking details", () => {
    render(<ContactPage />);

    expect(screen.getByRole("textbox", { name: "Name" })).toBeRequired();
    expect(screen.getByRole("textbox", { name: "Email" })).toBeRequired();
    expect(
      screen.getByRole("textbox", { name: "Organization / Venue" })
    ).not.toBeRequired();
    expect(screen.getByRole("textbox", { name: "Message" })).toBeRequired();

    const email = screen.getByRole("textbox", { name: "Email" });
    expect(email).toHaveAttribute("type", "email");

    expect(
      screen.getByRole("button", { name: "Send Inquiry" })
    ).toHaveAttribute("type", "submit");
  });

  it("provides a direct email address", () => {
    render(<ContactPage />);

    const emailLink = screen.getByRole("link", {
      name: "hello@evanstreater.com",
    });
    expect(emailLink).toHaveAttribute("href", "mailto:hello@evanstreater.com");
    expect(
      screen.getByText(/Management & representation details to be added/i)
    ).toBeInTheDocument();
  });
});
