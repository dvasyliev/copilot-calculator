import React from "react";
import type { Button as BtnType } from "../types";

interface Props {
  button: BtnType;
  onClick: (id: string) => void;
}

const KeyButton: React.FC<Props> = ({ button, onClick }) => {
  const cls = `button ${button.type}`;
  return (
    <button
      className={cls}
      onClick={() => onClick(button.id)}
      aria-label={button.id}
    >
      {button.label}
    </button>
  );
};

export default KeyButton;
