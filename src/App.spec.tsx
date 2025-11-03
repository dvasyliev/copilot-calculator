import { describe, it, expect } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  const getDisplay = () => screen.getByRole("textbox");
  const getDisplayValue = () => {
    const textElements = screen.getAllByRole("text");
    return textElements[1].textContent;
  };

  it("should render calculator with initial state", () => {
    render(<App />);
    expect(getDisplayValue()).toBe("0");
  });

  it("should perform basic calculation", () => {
    render(<App />);

    // Click buttons for: 7 + 8 =
    fireEvent.click(screen.getByText("7"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("8"));
    fireEvent.click(screen.getByText("="));

    expect(getDisplayValue()).toBe("15");
  });

  it("should show formatted large numbers", () => {
    render(<App />);

    // Enter a large number
    ["1", "2", "3", "4", "5", "6"].forEach((digit) => {
      fireEvent.click(screen.getByText(digit));
    });

    expect(getDisplayValue()).toBe("123 456");
  });

  it("should handle chained operations", () => {
    render(<App />);

    // 5 + 3 × 2 = should be 16 (not 11) because of operator precedence
    fireEvent.click(screen.getByText("5"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("3"));
    fireEvent.click(screen.getByText("×"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("="));

    expect(getDisplayValue()).toBe("16");
  });

  it("should handle decimal numbers", () => {
    render(<App />);

    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("."));
    fireEvent.click(screen.getByText("5"));

    expect(getDisplayValue()).toBe("1.5");
  });

  it("should handle clearing with AC", () => {
    render(<App />);

    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("AC"));

    expect(getDisplayValue()).toBe("0");
  });

  it("should handle negative numbers", () => {
    render(<App />);

    fireEvent.click(screen.getByText("±"));
    fireEvent.click(screen.getByText("5"));

    expect(getDisplayValue()).toBe("-5");
  });

  it("should handle percentage calculations", () => {
    render(<App />);

    fireEvent.click(screen.getByText("5"));
    fireEvent.click(screen.getByText("0"));
    fireEvent.click(screen.getByText("%"));

    expect(getDisplayValue()).toBe("0.5");
  });

  it("should prevent multiple decimal points", () => {
    render(<App />);

    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("."));
    fireEvent.click(screen.getByText("5"));
    fireEvent.click(screen.getByText("."));
    fireEvent.click(screen.getByText("2"));

    expect(getDisplayValue()).toBe("1.52");
  });

  it("should display history for operations", () => {
    render(<App />);

    fireEvent.click(screen.getByText("5"));
    fireEvent.click(screen.getByText("+"));

    const textElements = screen.getAllByRole("text");
    expect(textElements[0].textContent).toBe("5 +");
    expect(textElements[1].textContent).toBe("5");
  });
});
