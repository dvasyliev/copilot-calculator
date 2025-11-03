import React, { useState, useCallback, useRef } from "react";

export default function useCalculator() {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState<boolean>(false);
  const [history, setHistory] = useState<string | undefined>(undefined);
  const [message, setMessage] = useState<string | null>(null);
  const messageTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const inputDigit = useCallback(
    (digit: string) => {
      setDisplayValue((prev) => {
        if (waitingForOperand) {
          setWaitingForOperand(false);
          return digit;
        }
        // Count digits (ignore sign and decimal)
        const digits = prev.replace(/[^0-9]/g, "");
        if (digits.length >= 10) {
          // Show message and block input
          if (!message) {
            setMessage("Max 10 digits");
            if (messageTimeout.current) clearTimeout(messageTimeout.current);
            messageTimeout.current = setTimeout(() => setMessage(null), 3000);
          }
          return prev;
        }
        if (prev === "0") return digit;
        return prev + digit;
      });
    },
    [waitingForOperand, message]
  );

  const inputDot = useCallback(() => {
    setDisplayValue((prev) => (prev.includes(".") ? prev : prev + "."));
  }, []);

  const clearAll = useCallback(() => {
    setDisplayValue("0");
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(false);
    setHistory(undefined);
    setMessage(null);
    if (messageTimeout.current) clearTimeout(messageTimeout.current);
  }, []);

  const backspace = useCallback(() => {
    setDisplayValue((prev) => {
      if (prev.length <= 1) return "0";
      return prev.slice(0, -1);
    });
  }, []);

  const toggleSign = useCallback(() => {
    setDisplayValue((prev) =>
      prev.startsWith("-") ? prev.slice(1) : "-" + prev
    );
  }, []);

  const inputPercent = useCallback(() => {
    setDisplayValue((prev) => {
      const num = parseFloat(prev || "0");
      return String(num / 100);
    });
  }, []);

  const performOperation = useCallback(
    (nextOperator: string) => {
      const inputValue = parseFloat(displayValue);

      if (previousValue == null) {
        setPreviousValue(String(inputValue));
      } else if (operator) {
        const currentValue = parseFloat(previousValue);
        const result = calculate(currentValue, inputValue, operator);
        setPreviousValue(String(result));
        setDisplayValue(String(result));
      }

      setWaitingForOperand(true);
      setOperator(nextOperator);
      setHistory(`${previousValue ?? displayValue} ${nextOperator}`);
    },
    [displayValue, previousValue, operator]
  );

  const evaluate = useCallback(() => {
    if (operator == null || previousValue == null) return;
    const result = calculate(
      parseFloat(previousValue),
      parseFloat(displayValue),
      operator
    );
    setDisplayValue(String(result));
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(false);
    setHistory(undefined);
  }, [operator, previousValue, displayValue]);

  function handleButton(id: string) {
    if (id === "ac") return clearAll();
    if (id === "back") return backspace();
    if (id === "neg") return toggleSign();
    if (id === "percent") return inputPercent();
    if (id === "dot") return inputDot();
    if (id === "equals") return evaluate();

    // digits
    if (/^[0-9]$/.test(id)) return inputDigit(id);

    // operators mapping
    if (id === "add") return performOperation("+");
    if (id === "subtract") return performOperation("-");
    if (id === "multiply") return performOperation("*");
    if (id === "divide") return performOperation("/");
  }

  return {
    displayValue,
    history,
    message,
    handleButton,
  };
}

// small local calculate implementation to avoid circular imports
function calculate(a: number, b: number, op: string) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b === 0 ? NaN : a / b;
    default:
      return b;
  }
}
