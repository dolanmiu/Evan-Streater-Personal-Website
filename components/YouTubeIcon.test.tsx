import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { YouTubeIcon } from "./YouTubeIcon";

describe("YouTubeIcon", () => {
  it("renders the YouTube mark", () => {
    const { container } = render(<YouTubeIcon />);

    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});
