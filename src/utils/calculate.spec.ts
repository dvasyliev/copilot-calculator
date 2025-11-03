import { describe, it, expect } from "vitest";
import { calculate } from "./calculate";

describe("calculate", () => {
  it("should add two numbers", () => {
    expect(calculate(2, 3, "+")).toBe(5);
    expect(calculate(-2, 3, "+")).toBe(1);
    expect(calculate(2.5, 3.3, "+")).toBeCloseTo(5.8);
  });

  it("should subtract two numbers", () => {
    expect(calculate(5, 3, "-")).toBe(2);
    expect(calculate(3, 5, "-")).toBe(-2);
    expect(calculate(5.5, 3.3, "-")).toBeCloseTo(2.2);
  });

  it("should multiply two numbers", () => {
    expect(calculate(2, 3, "*")).toBe(6);
    expect(calculate(-2, 3, "*")).toBe(-6);
    expect(calculate(2.5, 2, "*")).toBe(5);
  });

  it("should divide two numbers", () => {
    expect(calculate(6, 2, "/")).toBe(3);
    expect(calculate(-6, 2, "/")).toBe(-3);
    expect(calculate(5, 2, "/")).toBe(2.5);
  });

  it("should return NaN when dividing by zero", () => {
    expect(calculate(6, 0, "/")).toBe(NaN);
  });

  it("should return second operand for unknown operator", () => {
    expect(calculate(6, 2, "x")).toBe(2);
  });
});
