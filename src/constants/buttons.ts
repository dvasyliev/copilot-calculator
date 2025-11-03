import type { Button } from "../types";

export const BUTTONS: Button[] = [
  { id: "ac", label: "AC", type: "control" },
  { id: "back", label: "⌫", type: "control" },
  { id: "percent", label: "%", type: "operator" },
  { id: "divide", label: "÷", type: "operator" },

  { id: "7", label: "7", type: "digit" },
  { id: "8", label: "8", type: "digit" },
  { id: "9", label: "9", type: "digit" },
  { id: "multiply", label: "×", type: "operator" },

  { id: "4", label: "4", type: "digit" },
  { id: "5", label: "5", type: "digit" },
  { id: "6", label: "6", type: "digit" },
  { id: "subtract", label: "−", type: "operator" },

  { id: "1", label: "1", type: "digit" },
  { id: "2", label: "2", type: "digit" },
  { id: "3", label: "3", type: "digit" },
  { id: "add", label: "+", type: "operator" },

  { id: "neg", label: "±", type: "control" },
  { id: "0", label: "0", type: "digit" },
  { id: "dot", label: ".", type: "digit" },
  { id: "equals", label: "=", type: "control" },
];
