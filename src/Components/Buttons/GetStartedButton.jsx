import React from "react";
import "./GetStartedButton.css";
const GetStartedButton = ({ label, onClick, style }) => {
  return (
    <button className="get-started-btn" onClick={onClick} style={style}>
      {label}
    </button>
  );
};

export default GetStartedButton;
