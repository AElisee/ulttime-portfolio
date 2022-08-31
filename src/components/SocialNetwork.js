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
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          onMouseOver={anim}
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          onMouseOver={anim}
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
          onMouseOver={anim}
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;
