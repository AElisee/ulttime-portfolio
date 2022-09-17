import React from "react";
import Card1 from "../components/Card1";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

import { skills } from "../data/skillsData";

const Skills = () => {
  const levels = [
    {
      lang: "Html",
      percentage: "85",
    },

    {
      lang: "Css",
      percentage: "80",
    },

    {
      lang: "Sass",
      percentage: "80",
    },

    {
      lang: "Javascript",
      percentage: "72",
    },

    {
      lang: "ReactJs",
      percentage: "72",
    },
  ];

  return (
    <div className="section-container">
      <div className="skills">
        <Navigation />
        <div className="skills-container">
          <div>
            <div className="text-content">
              <h3 className="section-title">Mes compétences</h3>
              <p>
                Passionné par le dévéloppement front-end, j'ai également une
                assez bonne connaissance du Back-end notamment en Node.js,
                Expressjs, MongoDB, FireStore...
              </p>
            </div>
            <div className="skill-level">
              <div>
                <h3>Top 5 niveaux de compétences</h3>
                <ul>
                  {levels.map((level, index) => (
                    <li key={index}>
                      <h4> {level.lang}</h4>
                      <div className="progress-bar">
                        <span
                          style={{
                            width: `${level.percentage}%`,
                            background: "rgb(247, 157, 13)",
                          }}
                        ></span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="skills-content">
              {skills &&
                skills.map((skill, index) => (
                  <Card1 key={index} skill={skill} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
