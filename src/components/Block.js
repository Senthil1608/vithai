import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import '../stylesheets/block.css';

const Block = ({ text1, text2, text3, text4 }) => {
  return (
    <div className="block">
      <h1>{text1}</h1>
      <h3>{text2}</h3>
      <p>{text3}</p>
      {/* Use Link without wrapping it inside <a> */}
      <Link to={text4}>Read More</Link>
    </div>
  );
};

export default Block;
