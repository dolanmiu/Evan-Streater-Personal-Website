import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Nav } from "./Nav";
import { youtubeUrl } from "@/lib/content";

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

  it("links to YouTube on desktop and in the mobile menu", async () => {
    const user = userEvent.setup();
    render(<Nav />);

    const desktopLink = screen.getByRole("link", {
      name: "Evan Streater on YouTube",
    });
    expect(desktopLink).toHaveAttribute("href", youtubeUrl);
    expect(desktopLink).toHaveAttribute("target", "_blank");

    await user.click(screen.getByRole("button", { name: "Toggle menu" }));

    const mobileLink = screen.getByRole("link", { name: "YouTube" });
    expect(mobileLink).toHaveAttribute("href", youtubeUrl);
    expect(mobileLink).toHaveAttribute("target", "_blank");

    await user.click(mobileLink);
    expect(screen.getAllByRole("link", { name: "Home" })).toHaveLength(1);
  });
});
