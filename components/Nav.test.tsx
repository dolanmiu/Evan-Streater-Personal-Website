import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Nav } from "./Nav";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/concerts", label: "Concerts" },
  { href: "/recordings", label: "Recordings" },
  { href: "/contact", label: "Contact" },
];

describe("Nav", () => {
  it("renders the brand and all navigation links", () => {
    render(<Nav />);

    expect(screen.getByRole("link", { name: "Evan Streater" })).toHaveAttribute(
      "href",
      "/"
    );

    for (const link of links) {
      const navLink = screen.getByRole("link", { name: link.label });
      expect(navLink).toHaveAttribute("href", link.href);
    }
  });

  it("toggles the mobile menu", async () => {
    const user = userEvent.setup();
    render(<Nav />);

    const toggle = screen.getByRole("button", { name: "Toggle menu" });
    expect(screen.getAllByRole("link", { name: "Home" })).toHaveLength(1);

    await user.click(toggle);
    expect(screen.getAllByRole("link", { name: "Home" })).toHaveLength(2);

    await user.click(screen.getAllByRole("link", { name: "Home" })[1]);
    expect(screen.getAllByRole("link", { name: "Home" })).toHaveLength(1);
  });
});
