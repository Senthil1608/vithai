import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import BlogsBlock from "../components/BlogsBlock";
import "../blogs/blogs.css";

const Blogs = () => {
    return (
        <div className="blogs-page">
            <NavigationBar />
            <div className="blogs-container">
                <BlogsBlock text1= "Empowering Communities Through Education and Skill Development " 
                text2=" Stories of Change and Hope" 
                text3="edu1"/>
                   
            </div>
            <Footer />
        </div>
    );
};

export default Blogs;
