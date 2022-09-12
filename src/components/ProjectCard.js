import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="card">
      <div className="img-container">
        <img src={project.img} alt="" />
        <div className="view">
          <a href={project.demo_link} target="_blank" rel="noopener noreferrer">
            Voir demo <span>></span>
          </a>
        </div>
      </div>
      <div className="infos">
        <h3 className="app-name">{project.name}</h3>
        <div className="languages">
          <ul>
            {project.languages.length > 0 &&
              project.languages.map((language, index) => {
                return (
                  <li key={index}>
                    {language} <span>|</span>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
