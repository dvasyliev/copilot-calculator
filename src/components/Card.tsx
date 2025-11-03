import React from "react";

const Card: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <div className="app-card">{children}</div>;
};

export default Card;
