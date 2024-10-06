/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const SmallLogo = ({ className }) => {
  return (
    <div className={`small-logo ${className}`}>
      <div className="overlap-group">
        <img className="your-paragraph-text" alt="Your paragraph text" src="/img/your-paragraph-text-processed-1.png" />
        <div className="text-wrapper">ContApp</div>
      </div>
    </div>
  );
};
