import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Projects = () => {
  return (
    <div className="section-container">
      <div className="projects">
        <Navigation />
        <div className="projects-container">
          <h3 className="section-title">projects</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
