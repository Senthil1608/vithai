import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import "../events/events.css";
import compile from "../events/compile.png";

const Events = () => {
    return (
        <div>
            <NavigationBar />
            <main className="events-container">
                <section className="events-header">
                    <h1>Upcoming Events</h1>
                    <br /><br /> <br />
                    <h3> We will Reach you soon with something, new fresh and exciting</h3>
                </section>
               
            </main>
            <Footer />
        </div>
    );
};

export default Events;


{/* <section className="event-card">
<div className="event-layout">
    {/* Left: Image }
    // <img src={compile} alt="Compile Plus Event" className="event-image" /> 

    {/* Right: Content */}
    {/* <div className="event-content">
        <h3 className="event-title">Compile Plus 1.0</h3>
        <h4 className="event-subtitle">Master the Power of OOPs</h4>
        <p className="event-description">
            Unlock the potential of Object-Oriented Programming (OOP) with 
            <strong> Compile Plus</strong>, a specially designed workshop to empower 
            students with essential programming skills.
        </p>
        <ul className="event-details">
            <li><strong>Duration:</strong> 2 Hours</li>
            <li><strong>Date:</strong> January 26, 2025</li>
            <li><strong>Time:</strong> 3:30pm to 5:30pm</li>
            <li><strong>Mode:</strong> Online</li>
            <li><strong>Cost:</strong> Absolutely Free!</li>
        </ul>
        <p className="event-note">
            Led by expert trainers, this interactive and engaging session will provide participants 
            with a strong foundation in OOP concepts, preparing them to tackle real-world coding 
            challenges confidently.
        </p>
        <p className="event-mission">
            At <strong>Vithai 17-Foundation</strong>, we believe in making quality education 
            accessible to all, aligning with our vision of creating a sustainable and inclusive 
            learning community.
        </p>
        <p className="event-limited">
            Seats are limited, so don’t miss this opportunity!
        </p>
        <a href="https://forms.gle/uBiC37rDF6J4xFG99" className="register-button">Register Now</a>
    </div>
</div>
</section> */}