import React from "react";
import Navigation from "../components/Navigation";
import AboutModal from "../components/AboutModal";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="section-container">
      <div className="about">
        <Navigation />
        <div className="about-container">
          <h3 className="section-title">A propos de moi</h3>
          <AboutModal />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
