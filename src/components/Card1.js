import React from "react";
import { motion } from "framer-motion";

const Card1 = ({ skill }) => {
  const variants = {
    initial: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: 100,
    },
  };
  return (
    <motion.div
      className="card-1"
      initial="initial"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05, rotate: 0.5 }}
    >
      <div className="container">
        <div className="icon-container">
          <img src={skill.icon} alt="" />
          {skill.icon_2 ? <img src={skill.icon_2} alt="" /> : null}
        </div>
        <div className="skill-name">
          <h4>{skill.name}</h4>
        </div>
      </div>
    </motion.div>
  );
};

export default Card1;
