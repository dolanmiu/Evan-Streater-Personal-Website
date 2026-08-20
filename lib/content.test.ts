import { describe, expect, it } from "vitest";
import { concerts, recordings } from "@/lib/content";

describe("concerts", () => {
  it("lists at least one performance", () => {
    expect(concerts.length).toBeGreaterThan(0);
  });

  it("uses ISO-formatted dates", () => {
    for (const concert of concerts) {
      expect(concert.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });
});

describe("recordings", () => {
  it("lists at least one recording", () => {
    expect(recordings.length).toBeGreaterThan(0);
  });

  it("has a title, label, and year for every recording", () => {
    for (const recording of recordings) {
      expect(recording.title).toBeTruthy();
      expect(recording.label).toBeTruthy();
      expect(recording.year).toBeTruthy();
    }
  });
});
