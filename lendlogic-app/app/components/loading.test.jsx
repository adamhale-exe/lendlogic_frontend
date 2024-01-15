import { render, screen } from "@testing-library/react";
import Loading from "./Loading";
import { describe } from "node:test";

describe("Loading component", () => {
  it("renders the Loading component correctly", () => {
    render(<Loading />);
    expect(screen.getByText("Loading")).toBeInTheDocument();

    const svgElement = screen.getByTestId("loading-svg");
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute("aria-hidden", "true");
    expect(svgElement).toHaveClass("animate-spin");
  });
});
