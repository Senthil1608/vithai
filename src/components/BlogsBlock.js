import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/blogsblock.css";
import skill from "../blogs/skill.png";

const BlogsBlock = ({ text1, text2, text3 }) => {
    return (
        <div className="blogsblock">
            <div className="blogsblock-image-container">
                <img src={skill} alt="Skill Development" className="blogsblock-image" />
            </div>
            <div className="blogsblock-content">
                <h3 className="blogsblock-title">{text1}</h3>
                <p className="blogsblock-subtitle">{text2}</p>
                <Link to={text3} className="blogsblock-link">
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default BlogsBlock;
