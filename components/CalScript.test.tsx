import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CalScript } from "./CalScript";

describe("CalScript", () => {
  it("renders without crashing and injects the Cal script", () => {
    render(<CalScript />);

    const script = Array.from(document.querySelectorAll("script")).find((s) =>
      s.textContent?.includes('Cal("init", "lesson"')
    );
    expect(script).toBeTruthy();
  });
});
