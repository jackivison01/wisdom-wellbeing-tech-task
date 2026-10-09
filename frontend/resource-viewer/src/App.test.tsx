import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

function visibleResourceTitles() {
  return screen
    .getAllByRole("button", { name: /^View / })
    .map((button) => button.getAttribute("aria-label")?.replace("View ", ""));
}

describe("resource sorting", () => {
  it("sorts resources into alphabetical category order", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Category" }));

    expect(visibleResourceTitles()).toEqual([
      "The Science of Sleep",
      "10-Minute Morning Stretch",
      "Guided Meditation for Stress Relief",
      "Wellness Weekly",
      "Mindful Moments",
      "Energy Boost Smoothie",
    ]);
  });

  it("sorts all resources newest first by upload date", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Date" }));

    expect(visibleResourceTitles()).toEqual([
      "10-Minute Morning Stretch",
      "Guided Meditation for Stress Relief",
      "Energy Boost Smoothie",
      "Mindful Moments",
      "The Science of Sleep",
      "Wellness Weekly",
    ]);
  });

  it("groups resources by category in the initial three-column layout", () => {
    render(<App />);

    const categorySections = screen.getAllByRole("region");

    expect(categorySections.map((section) => section.getAttribute("aria-label")))
      .toEqual([
        "Articles",
        "Fitness",
        "Meditation",
        "Newsletters",
        "Podcasts",
        "Recipes",
      ]);
    expect(
      categorySections.every((section) =>
        section.closest(".MuiGrid-grid-sm-4"),
      ),
    ).toBe(true);
  });

  it("shows the sort controls underneath the main title", () => {
    render(<App />);

    const main = screen.getByRole("main");
    const title = within(main).getByRole("heading", { name: "Resource Centre" });
    const sortLabel = within(main).getByText("Sort by");

    expect(title.compareDocumentPosition(sortLabel) & Node.DOCUMENT_POSITION_FOLLOWING)
      .toBeTruthy();
  });
});
