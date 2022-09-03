import React from "react";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { skills } from "../data/skillsData";

const Skills = () => {
  return (
    <div className="section-container">
      <div className="skills">
        <Navigation />
        <div className="skills-container">
          <div>
            <div className="text-content">
              <h3 className="section-title">Mes compétences</h3>
              <p>
                Les technologies et langages dont je fais mention ici sont ceux
                dans lesquels j'ai une très bonne connaissance et dont maîtise
                bien...
              </p>
            </div>
            <div className="skills-content">
              {skills &&
                skills.main.map((skill, index) => (
                  <Card1 key={index} skill={skill} />
                ))}
            </div>
            <div className="skills-content">
              {skills &&
                skills.other.map((skill, index) => (
                  <Card2 key={index} skill={skill} />
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
