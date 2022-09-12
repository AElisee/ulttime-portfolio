import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/projecstData";

const Projects = () => {
  return (
    <div className="section-container">
      <div className="projects">
        <Navigation />
        <div className="projects-container">
          <h3 className="section-title">Projects</h3>
          <div className="projects-cards">
            {projectsData &&
              projectsData.projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
