import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import KeyButton from "./KeyButton";

describe("KeyButton", () => {
  it("should render button with label", () => {
    const button = { id: "1", label: "1", type: "digit" as const };
    const onClick = vi.fn();
    const { getByRole } = render(
      <KeyButton button={button} onClick={onClick} />
    );
    expect(getByRole("button")).toHaveTextContent("1");
  });

  it("should call onClick with button id when clicked", () => {
    const button = { id: "1", label: "1", type: "digit" as const };
    const onClick = vi.fn();
    const { getByRole } = render(
      <KeyButton button={button} onClick={onClick} />
    );

    fireEvent.click(getByRole("button"));
    expect(onClick).toHaveBeenCalledWith("1");
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it.each([["digit" as const], ["operator" as const], ["control" as const]])(
    "should apply correct class based on button type: %s",
    (type) => {
      const button = { id: "test", label: "Test", type };
      const { getByRole } = render(
        <KeyButton button={button} onClick={() => {}} />
      );
      const buttonElement = getByRole("button");
      expect(buttonElement.className).toBe(`button ${type}`);
    }
  );
});
