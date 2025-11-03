import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Display from "./Display";
import { screen } from "@testing-library/react";

describe("Display", () => {
  it("should render value", () => {
    const { getByText } = render(<Display value="123.45" />);
    expect(getByText("123.45")).toBeInTheDocument();
  });

  it("should render history if provided", () => {
    const { getByText } = render(<Display value="123" history="100 +" />);
    expect(getByText("100 +")).toBeInTheDocument();
    expect(getByText("123")).toBeInTheDocument();
  });

  it("should render message if provided", () => {
    const { getByText } = render(
      <Display value="123" message="Max digits reached" />
    );
    expect(getByText("Max digits reached")).toBeInTheDocument();
  });

  it("should not render empty history", () => {
    const { container } = render(<Display value="123" />);
    const historyElement = container.querySelector(".history");
    expect(historyElement).toBeInTheDocument();
    expect(historyElement?.textContent).toBe("");
  });

  it("should render empty string for undefined history", () => {
    const { container } = render(<Display value="123" history={undefined} />);
    const historyElement = container.querySelector(".history");
    expect(historyElement).toBeInTheDocument();
    expect(historyElement?.textContent).toBe("");
  });

  it("should have correct ARIA roles", () => {
    render(<Display value="123" history="100 +" message="Test message" />);

    // Check main display
    const display = screen.getByRole("textbox");
    expect(display).toBeInTheDocument();
    expect(display).toHaveAttribute("aria-readonly", "true");

    // Check history and value sections
    const textElements = screen.getAllByRole("text");
    expect(textElements).toHaveLength(2);
    expect(textElements[0]).toHaveTextContent("100 +");
    expect(textElements[1]).toHaveTextContent("123");

    // Check message
    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent("Test message");
  });
});
