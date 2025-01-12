import React from "react";
import "../stylesheets/contactblock.css"
const Contactblock = ({text1,text2,text3,link}) =>{
    return(
        <div className="block31">
            <h1>{text1}</h1>
            <p>{text2}</p>
            <a href={link}>{text3}</a>
        </div>
    );
}
export default Contactblock;