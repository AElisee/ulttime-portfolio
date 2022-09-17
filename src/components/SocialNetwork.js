import React from "react";

const SocialNetwork = () => {
  const anim = () => {
    const icons = document.querySelectorAll(".social-network a");
    icons.forEach((icon) => {
      icon.addEventListener("mouseover", (e) => {
        icon.style.transform = `translate(${e.offsetX - 5}px, ${
          e.offsetY - 5
        }px)`;
      });

      icon.addEventListener("mouseleave", () => {
        icon.style.transform = "";
      });
    });
  };
  return (
    <div className="social-network">
      <ul>
        <a href="#" rel="noopener noreferrer" onMouseOver={anim}>
          <i className="fa-brands fa-facebook hover"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ange-%C3%A9lis%C3%A9e-kouassi-3b7418231/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseOver={anim}
        >
          <i className="fa-brands fa-linkedin hover"></i>
        </a>
        <a href="#" rel="noopener noreferrer" onMouseOver={anim}>
          <i className="fa-brands fa-github hover"></i>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;
