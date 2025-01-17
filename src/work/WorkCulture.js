import React from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import "../work/workculture.css";

const WorkCulture = () => {
  return (
    <div className="work-culture-container">
      <NavigationBar />
      <section className="work-culture-content">
        <div className="content-wrapper">
          <h1 className="title">Our Work Culture</h1>
          <p className="description">
            At Vithai17 Foundation, we believe in redefining the future through innovation, collaboration, and unwavering commitment. Run by a passionate group of engineering students, our mission is to empower the next generation with the skills needed to thrive in a rapidly evolving world.
          </p>
          <p className="description">
            As an MSME organization, we operate with modern agile principles and embrace a hybrid work environment, fostering flexibility and productivity. Our approach ensures that every member of our team is supported, recognized, and rewarded for their contributions. Volunteers are the backbone of our foundation, and we prioritize their growth and well-being.
          </p>
          <p className="description">
            Transparency is not just a value; it’s our promise. Weekly meetings keep our members and volunteers aligned and informed, while our treasury maintains open records. Donors can request detailed reports on fund utilization at any time, and post-donation, we provide comprehensive breakdowns with bills and proofs, ensuring every contribution’s impact is visible and tangible.
          </p>
          <p className="description">
            Our work culture thrives on inclusivity, innovation, and sustainability. We leverage cutting-edge technology to deliver impactful education and skill development programs tailored to industry needs. With a relentless focus on quality, we aim to bridge the gap between academia and the professional world, fostering a community that values growth, collaboration, and excellence.
          </p>
          <p className="description">
            Join us in building a brighter future—a community where passion meets purpose, and every idea has the power to transform the world.
          </p>
        </div>
        <div className="animation-wrapper">
          <div className="circle-animation"></div>
          <div className="circle-animation small"></div>
        </div>
      </section>
      <br></br>
      <br></br>
      
      <Footer />
    </div>
  );
};

export default WorkCulture;
