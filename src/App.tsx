import React from "react";
import Card from "./components/Card";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import { BUTTONS } from "./constants/buttons";
import useCalculator from "./hooks/useCalculator";

export default function App() {
  const calculator = useCalculator();

  return (
    <div className="app-card">
      <Display
        value={calculator.displayValue}
        history={calculator.history}
        message={calculator.message}
      />
      <Keypad buttons={BUTTONS} onButtonClick={calculator.handleButton} />
    </div>
  );
}
