import { describe, it, expect, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useCalculator from "./useCalculator";

describe("useCalculator", () => {
  it("should initialize with zero", () => {
    const { result } = renderHook(() => useCalculator());
    expect(result.current.displayValue).toBe("0");
  });

  it("should input digits", () => {
    const { result } = renderHook(() => useCalculator());
    act(() => {
      result.current.handleButton("1");
      result.current.handleButton("2");
      result.current.handleButton("3");
    });
    expect(result.current.displayValue).toBe("123");
  });

  it("should perform basic operations", () => {
    const { result } = renderHook(() => useCalculator());

    // Enter first number: 12
    act(() => {
      result.current.handleButton("1");
      result.current.handleButton("2");
    });
    expect(result.current.displayValue).toBe("12");

    // Press add
    act(() => {
      result.current.handleButton("add");
    });

    // Enter second number: 34
    act(() => {
      result.current.handleButton("3");
    });
    expect(result.current.displayValue).toBe("3");

    act(() => {
      result.current.handleButton("4");
    });
    expect(result.current.displayValue).toBe("34");

    // Calculate result
    act(() => {
      result.current.handleButton("equals");
    });
    expect(result.current.displayValue).toBe("46");
  });

  it("should handle decimal input", () => {
    const { result } = renderHook(() => useCalculator());
    act(() => {
      result.current.handleButton("1");
      result.current.handleButton("dot");
      result.current.handleButton("2");
    });
    expect(result.current.displayValue).toBe("1.2");
  });

  it("should prevent more than one decimal point", () => {
    const { result } = renderHook(() => useCalculator());
    act(() => {
      result.current.handleButton("1");
      result.current.handleButton("dot");
      result.current.handleButton("2");
      result.current.handleButton("dot");
      result.current.handleButton("3");
    });
    expect(result.current.displayValue).toBe("1.23");
  });

  it("should handle backspace", () => {
    const { result } = renderHook(() => useCalculator());
    act(() => {
      result.current.handleButton("1");
      result.current.handleButton("2");
      result.current.handleButton("3");
      result.current.handleButton("back");
    });
    expect(result.current.displayValue).toBe("12");
  });

  it("should clear all with AC", () => {
    const { result } = renderHook(() => useCalculator());
    act(() => {
      result.current.handleButton("1");
      result.current.handleButton("2");
      result.current.handleButton("ac");
    });
    expect(result.current.displayValue).toBe("0");
    expect(result.current.history).toBeUndefined();
  });

  it("should toggle sign", () => {
    const { result } = renderHook(() => useCalculator());
    act(() => {
      result.current.handleButton("1");
      result.current.handleButton("2");
      result.current.handleButton("neg");
    });
    expect(result.current.displayValue).toBe("-12");
  });

  it("should handle percent", () => {
    const { result } = renderHook(() => useCalculator());
    act(() => {
      result.current.handleButton("5");
      result.current.handleButton("0");
      result.current.handleButton("percent");
    });
    expect(result.current.displayValue).toBe("0.5");
  });

  it("should limit to 10 digits", () => {
    const { result } = renderHook(() => useCalculator());
    act(() => {
      // Try to input 11 digits
      for (let i = 0; i < 11; i++) {
        result.current.handleButton("1");
      }
    });
    expect(result.current.displayValue).toBe("1111111111");
    expect(result.current.message).toBe("Max 10 digits");

    // Try additional input
    act(() => {
      result.current.handleButton("2");
    });
    expect(result.current.displayValue).toBe("1111111111");
  });
});
