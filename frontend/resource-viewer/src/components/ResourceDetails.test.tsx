import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ResourceDetails } from "./ResourceDetails";
import type { Resource } from "../models/resource";

const resource: Resource = {
  id: "1",
  category: "Podcasts",
  title: "Mindful Moments",
  thumbnail: "https://example.com/mindful-moments.jpg",
  tags: ["wellbeing", "mindfulness"],
  duration: 25,
  description: "A calming podcast focused on mindfulness techniques.",
  date_uploaded: "2025-07-10",
};

describe("ResourceDetails", () => {
  it("displays the selected resource's complete details", () => {
    render(<ResourceDetails open resource={resource} onClose={vi.fn()} />);

    expect(
      screen.getByRole("heading", { name: "Mindful Moments" }),
    ).toBeInTheDocument();

    expect(
      screen.getByText("A calming podcast focused on mindfulness techniques."),
    ).toBeInTheDocument();

    expect(screen.getByText("Uploaded: 10 July 2025")).toBeInTheDocument();
    expect(screen.getByText("Podcasts · 25 minutes")).toBeInTheDocument();
  });
});
