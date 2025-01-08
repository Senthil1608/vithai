import React from "react";
import '../stylesheets/block.css'
const Block = ({ text1, text2 ,text3 , text4 }) =>{
    return(
        <div className="block">
            <h1> {text1}</h1>
            <h3>{text2}</h3>
           
            <p>{text3}</p>
            <a>{text4}</a>
        </div>
    );
}
export default Block;