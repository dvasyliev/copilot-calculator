import React from "react";
import type { Button as BtnType } from "../types";

interface Props {
  button: BtnType;
  onClick: (id: string) => void;
}

const IconButton: React.FC<Props> = ({ button, onClick }) => {
  return (
    <button
      className={`button control`}
      onClick={() => onClick(button.id)}
      aria-label={button.id}
    >
      {button.label}
    </button>
  );
};

export default IconButton;
