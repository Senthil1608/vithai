import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import '../home/homepag.css';
import '../components/Footer';
import Impact from "../components/Impact";
import Footer from "../components/Footer";
import logos from "../home/emptylogo.png";
import qedu from "../home/qedu.png"; // Replace with actual image path
import edu from "../home/edu.png"; // Replace with actual image path
import Block from "../components/Block";
import profile from "../home/profile.png";
import bonny from "../home/bonny.png";
import NewEvents from "../components/NewEvents";
const HomePage = () => {

  useEffect(() => {
    const sections = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        } else {
          entry.target.classList.remove('animated');
        }
      });
    }, {
      threshold: 0.5 // Trigger animation when 50% of the element is in view
    });

    sections.forEach(section => {
      observer.observe(section);
    });

    // Clean up the observer on component unmount
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div>
      <NavigationBar />
      <div className="foundation-header">
        <img src={logos} alt="V" className="foundation-logo" />
        <div className="foundation-text">
          <span className="green-text">Vithai-17</span>
          <span className="black-text"> Foundation</span>
        </div>
      </div>

      <div className="rectangle animate-on-scroll">
        Creating Changes EveryDay,<br />
        Empowering Minds for Tomorrow
      </div>
      <div className="animate-on-scroll">
      <NewEvents text1="events" />
      </div>
  
    

      <a href="/about" className="link-button animate-on-scroll">Learn More</a>

      {/* Vision and Mission Section */}
      <div className="vision-mission-container animate-on-scroll">
        <div className="text-content">
          <h2>Our Vision</h2>
          <p>
            At Vithai 17-Foundation, we aim to nurture young minds as catalysts
            for protecting and promoting sustainable development. We believe
            that transformative change begins with individuals, and through a
            philosophy of mutual learning—where education is a dynamic exchange— 
            we empower them to shape a better, more sustainable future for
            society.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is to create a community of lifelong learners who not
            only adapt to the modern world but also actively contribute to its
            progress. By equipping individuals with the skills, knowledge, and
            values needed to drive innovation and social responsibility, we
            strive to build a society where growth is inclusive, equitable, and
            environmentally conscious.
          </p>
        </div>
        <div className="image-content">
          <img src={qedu} alt="Vision" className="vision-image" />
          <img src={edu} alt="Mission" className="mission-image" />
        </div>
      </div>

      <div className="impacts">
        <h1 className="animate-on-scroll">Our Remarkable Impacts</h1>
        <Impact text1="Food Donations" text2="5+" />
        <Impact text1="Educational Programs" text2="3" />
        <Impact text1="Orphanages Helped" text2="5+" />
        <Impact text1="Old Age Homes" text2="1" />
      </div>

      <div className="impacts animate-on-scroll">
        <Block text1="Founder’s Message" text2="Born from Passion, Fueled by Purpose" text3="What began as a spark in the mind of a budding engineering undergraduate quickly evolved into a selfless mission." text4="About"/>
        <Block text1="Compile Plus" text2="Empowering Education, Inspiring Growth" text3="A special fundraising event with a clear mission: to offer top-tier programming workshops that promote education and mutual growth." text4="events"/>
        <Block text1="Skill Up 1.0" text2="Empowering Careers through Skill and Inspiration" text3="This exciting 10-week course Featuring comprehensive placement training, along with inspiring guest lectures from industry leaders." text4="projects"/>
      </div>
      <div className="rectangle animate-on-scroll">
       Vithai-17 a seed sown towards sustainability
      </div>

      <div className="impacts-1 animate-on-scroll">
        <img src={bonny} alt="Trainer Image" />
        <div className="trainer-info">
          <h4>Ms Bonny Roy</h4>
          <p>Teacher, LMOIS</p>
        </div>
        <p>
          "Vithai 17-Foundation is dedicated to empowering young minds through innovative programs that foster skill development and confidence. Their impactful initiatives truly make a difference in the community, shaping future leaders."
          <span className="trainer-role">Speak Up-1.0 Trainer</span>
        </p>
        <a href="/projects"><button className="read-more">Read More</button></a>
      </div>

      <div className="impacts animate-on-scroll">
        <img src={profile} alt="Profile Image" />
        <h3>A story that started to be a solution to sustainable development</h3>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
