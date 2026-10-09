// src/utils/resources.test.ts
import { describe, expect, it } from "vitest";
import { groupByCategory } from "./resourceUtils";

const makeResource = (overrides: Partial<Resource> = {}): Resource => ({
  id: "1",
  category: "Podcasts",
  title: "Mindful Moments",
  thumbnail: "https://example.com/image.jpg",
  tags: ["wellbeing"],
  duration: 25,
  description: "A calming resource.",
  date_uploaded: "2025-07-10",
  ...overrides,
});

describe("groupByCategory", () => {
  it("groups resources under their category", () => {
    const result = groupByCategory([
      makeResource({ id: "1", category: "Podcasts", title: "A" }),
      makeResource({ id: "2", category: "Articles", title: "B" }),
      makeResource({ id: "3", category: "Podcasts", title: "C" }),
    ]);

    expect(result.Podcasts.map(({ id }) => id)).toEqual(["1", "3"]);
    expect(result.Articles.map(({ id }) => id)).toEqual(["2"]);
  });

  it("returns an empty object when there are no resources", () => {
    expect(groupByCategory([])).toEqual({});
  });
});