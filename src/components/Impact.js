import React from "react";
import "../stylesheets/impact.css";

const Impact = ({ text1, text2 }) => {
  return (
    <div className="impact-box">
      <div className="text1">{text1}</div>
      <div className="small-box">
        <div className="text2">{text2}</div>
      </div>
    </div>
  );
};

export default Impact;
