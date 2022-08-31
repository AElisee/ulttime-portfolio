import React from "react";

const Card2 = ({ skill }) => {
  return (
    <div className="card-2">
      <div className="container">
        <div className="skill-name">
          <h4>{skill.name}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card2;
