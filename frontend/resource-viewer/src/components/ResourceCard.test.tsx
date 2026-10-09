import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ResourceCard } from "./ResourceCard";
import type { Resource } from "../models/resource";

const resource: Resource = {
  id: "1",
  category: "Podcasts",
  title: "Mindful Moments",
  thumbnail: "https://example.com/mindful-moments.jpg",
  tags: ["wellbeing", "mindfulness"],
  duration: 25,
  description: "A calming podcast.",
  date_uploaded: "2025-07-10",
};

describe("ResourceCard", () => {
  it("displays a resource's key information", () => {
    render(<ResourceCard resource={resource} onSelect={vi.fn()} />);

    expect(
      screen.getByRole("heading", { name: "Mindful Moments" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("img", { name: "Mindful Moments" }),
    ).toHaveAttribute("src", resource.thumbnail);

    expect(screen.getByText("wellbeing")).toBeInTheDocument();
    expect(screen.getByText("mindfulness")).toBeInTheDocument();
    expect(screen.getByText("25 minutes")).toBeInTheDocument();
  });

  it("calls onSelect with the resource when the card is clicked", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();

    render(<ResourceCard resource={resource} onSelect={onSelect} />);

    await user.click(
        screen.getByRole("button", { name: "View Mindful Moments" }),
    );

    expect(onSelect).toHaveBeenCalledWith(resource);
	});
});
