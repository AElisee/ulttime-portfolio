import React from "react";

const Card1 = ({ skill }) => {
  return (
    <div className="card-1">
      <div className="container">
        <div className="icon-container">
          <img src={skill.icon} alt="" />
          {skill.icon_2 ? <img src={skill.icon_2} alt="" /> : null}
        </div>
        <div className="skill-name">
          <h4>{skill.name}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card1;
