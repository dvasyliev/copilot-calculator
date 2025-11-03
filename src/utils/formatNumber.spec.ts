import { describe, it, expect } from "vitest";
import { formatNumber } from "./formatNumber";

describe("formatNumber", () => {
  it("should handle empty input", () => {
    expect(formatNumber("")).toBe("0");
  });

  it("should handle minus sign", () => {
    expect(formatNumber("-")).toBe("-");
  });

  it("should format integer with thousands separator", () => {
    expect(formatNumber("1234567")).toBe("1 234 567");
  });

  it("should format decimal numbers", () => {
    expect(formatNumber("1234.567")).toBe("1 234.567");
  });

  it("should format negative numbers", () => {
    expect(formatNumber("-1234.567")).toBe("-1 234.567");
  });

  it("should handle zero", () => {
    expect(formatNumber("0")).toBe("0");
  });

  it("should handle leading zeros", () => {
    expect(formatNumber("00123")).toBe("123");
  });

  it("should handle decimal numbers up to 10 digits", () => {
    expect(formatNumber("1234.5670")).toBe("1 234.567");
  });

  it("should format large numbers", () => {
    expect(formatNumber("1234567890.123")).toBe("1 234 567 890.123");
  });

  it("should handle invalid number strings", () => {
    expect(formatNumber("12.34.56")).toBe("12.34");
  });
});
