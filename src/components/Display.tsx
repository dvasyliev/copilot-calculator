import React from "react";

interface Props {
  value: string;
  history?: string;
}

const Display: React.FC<Props> = ({ value, history }) => {
  return (
    <div className="display">
      <div className="history">{history ?? ""}</div>
      <div className="value">{value}</div>
    </div>
  );
};

export default Display;
