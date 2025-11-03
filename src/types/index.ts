export type ButtonType = "digit" | "operator" | "control";

export interface Button {
  id: string;
  label: string;
  type: ButtonType;
}

export interface CalculatorState {
  displayValue: string;
  previousValue?: string;
  operator?: string;
  waitingForOperand?: boolean;
  history?: string;
}
