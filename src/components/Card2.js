import React from "react";
import { motion } from "framer-motion";

const Card2 = ({ skill }) => {
  return (
    <motion.div className="card-2" whileHover={{ scale: 1.05, rotate: 2 }}>
      <div className="container">
        <div className="skill-name">
          <h4>{skill.name}</h4>
        </div>
      </div>
    </motion.div>
  );
};

export default Card2;
