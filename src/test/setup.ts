import "@testing-library/jest-dom";
import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import * as matchers from "@testing-library/jest-dom/matchers";

// Extend Vitest's expect with testing-library matchers
expect.extend(matchers as any);

// Cleanup DOM after each test
afterEach(() => {
  cleanup();
});
