import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

import compile from "../projects/compile.png";
import speak from "../projects/speakup.png";
import skill from "../projects/Skill Up 1.0 (2).png";
import home from "../projects/home.png";
import "../projects/projects.css";
import NewEvents from "../components/NewEvents";

const Projects = () => {
    return (
        <div className="project">
            <NavigationBar />
            <main className="projects-container">
                {/* Speak Up Section */}
                <section className="project-section fade-in">
                    <div className="text-content">
                        <h1 className="project-title">Speak Up - 1.0</h1>
                        <p className="project-description">
                            We took our first step toward promoting quality education by training 10 students in communication skills within a corporate structure, guided by the dedicated mentorship of Ms. Bonny Roy. Her impactful classes transformed the students, allowing them to emerge with enhanced skills and confidence. Ms. Bonny Roy, an English teacher at Lalaji Memorial Omega International School, graciously accepted our request to lead this program. She had been a mentor to our Founder during his school years, instilling valuable principles that have shaped this initiative. This 6-day program was a success with all positive reviews and thanks to Genik Technologies Pvt Ltd for their unwavering support.
                        </p>
                        <p className="project-description">
                            Ms. Bonny Roy is a seasoned educator known for her engaging teaching style and ability to connect with students, fostering both personal and academic growth. With years of experience in nurturing communication skills, she has been instrumental in shaping young minds and empowering them to express themselves effectively in various settings.
                        </p>
                    </div>
                    <div className="image-content">
                        <img src={speak} alt="Speak Up" className="project-image" />
                    </div>
                </section>

                {/* Skill Up Section */}
                <section className="project-section slide-in-left">
                    <div className="text-content">
                        <h1 className="project-title">Skill Up - 1.0</h1>
                        <p className="project-description">
                            The Skill Up initiative, now successfully completed and published on our website, offered a comprehensive 10-week virtual placement training designed to prepare participants with essential aptitude and coding skills. This program has equipped numerous aspiring professionals with the tools they need to succeed in the competitive job market.
                        </p>
                        <ul className="project-list">
                            <li>Structured 10-Week Program: Skill Up guided participants through a well-rounded curriculum that strengthened their core competencies in aptitude and coding, creating a solid foundation for their careers.</li>
                            <li>Industry Insights: The program included two expert-led industry talks, where participants gained valuable perspectives on industry expectations, trends, and essential skills to thrive professionally.</li>
                            <li>Specialized Training Team: With six expert trainers specializing in different fields, Skill Up provided personalized guidance, hands-on practice, and targeted support, ensuring a transformative experience for each participant.</li>
                        </ul>
                    </div>
                    <div className="image-content">
                        <img src={skill} alt="Skill Up" className="project-image" />
                    </div>
                </section>


                {/* Compile Plus Section */}
                <section className="project-section slide-in-left">
                    <div className="text-content">
                        <h1 className="project-title">Compile Plus - 1.0</h1>
                        <p className="project-description">
                        Compile Plus was an exciting and impactful initiative aimed at empowering students with essential modern-day programming skills. Focused on the fundamentals of Object-Oriented Programming (OOP) using C++, this program provided a structured and interactive learning experience. Conducted through a virtual Google Meet session, it offered an engaging two-hour knowledge transfer, ensuring participants gained a solid foundation in OOP concepts while enhancing their problem-solving abilities in a dynamic and accessible environment.

                          
                        </p>
          
                    </div>
                    <div className="image-content">
                        <img src={compile} alt="Skill Up" className="project-image" />
                    </div>
                </section>

                {/* Your House Our House Section */}
                <section className="project-section fade-in">
                    <div className="text-content">
                        <h1 className="project-title">Your House Our House - 1.0</h1>
                        <p className="project-description">
                            Welcome to Your House, Our House: A Haven for Elderly Care. At Your House, Our House, we believe in creating a nurturing and compassionate environment for our elderly residents. Our space is not just an old age home; it is a community where 10-15 senior individuals live together as a family, sharing moments of peace, joy, and companionship.
                        </p>
                        <p className="project-description">
                            Our foundation is dedicated to supporting our residents not only through regular contributions of groceries and nutritious meals but also through what they value most—our presence, our care, and our affection. For us, spending time with them, listening to their stories, and engaging in meaningful activities together is at the heart of our mission.
                        </p>
                    </div>
                    <div className="image-content">
                        <img src={home} alt="Your House Our House" className="project-image" />
                    </div>
                </section>
                <section className="project-section fade-in">
                    <NewEvents text1="/events"/>
                </section>    

            </main>
            <Footer />
        </div>
    );
};

export default Projects;
