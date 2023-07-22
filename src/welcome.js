import React from "react";
import "./welcome.css";

const WelcomePage = ({ onEnterClick }) => {
  return (
    <div className="welcome">
      <h1>Welcome to Random Quote Generator!</h1>

      <button onClick={onEnterClick}>Enter</button>
    </div>
  );
};

export default WelcomePage;
