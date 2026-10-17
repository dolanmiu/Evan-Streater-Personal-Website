import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import OriginalWorksPage from "./page";

describe("OriginalWorksPage", () => {
  it("renders the original works heading", () => {
    render(<OriginalWorksPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Original Works" })
    ).toBeInTheDocument();
  });

  it("describes original compositions", () => {
    render(<OriginalWorksPage />);

    expect(screen.getByText(/I blend classical craft/i)).toBeInTheDocument();
    expect(screen.getByText(/A Year to Remember/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Purchase sheet music" })
    ).toHaveAttribute("href", "/contact");
  });
});
