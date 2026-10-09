// src/utils/resources.test.ts
import { describe, expect, it } from "vitest";
import { groupByCategory } from "./resourceUtils";

describe("groupByCategory", () => {
  it("groups resources under their category", () => {
    const result = groupByCategory([
      { id: "1", category: "Podcasts", title: "A" },
      { id: "2", category: "Articles", title: "B" },
      { id: "3", category: "Podcasts", title: "C" },
    ]);

    expect(result.Podcasts.map(({ id }) => id)).toEqual(["1", "3"]);
    expect(result.Articles.map(({ id }) => id)).toEqual(["2"]);
  });

  it("returns an empty object when there are no resources", () => {
    expect(groupByCategory([])).toEqual({});
  });
});