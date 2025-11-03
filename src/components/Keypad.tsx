import React from "react";
import type { Button as BtnType } from "../types";
import KeyButton from "./KeyButton";
import IconButton from "./IconButton";

interface Props {
  buttons: BtnType[];
  onButtonClick: (id: string) => void;
}

const Keypad: React.FC<Props> = ({ buttons, onButtonClick }) => {
  return (
    <div className="keypad">
      {buttons.map((b) => (
        <div key={b.id}>
          {b.type === "control" ? (
            <IconButton button={b} onClick={onButtonClick} />
          ) : (
            <KeyButton button={b} onClick={onButtonClick} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Keypad;
