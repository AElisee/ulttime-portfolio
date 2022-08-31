import React from "react";
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";
import Navigation from "../components/Navigation";
import { skills } from "../data/skillsData";

const Skills = () => {
  console.log(skills.front_nd);
  return (
    <div className="skills">
      <Navigation />
      <div className="skills-container">
        <div>
          <div className="text-content">
            <h3 className="section-title">Mes compétences</h3>
            <p>
              Les technologies et langages dont je fais mention ici sont ceux{" "}
              <br />
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
  );
};

export default Skills;
