import React from "react";
import { NavLink } from "react-router-dom";
import BackgroundAnim from "./BackgroundAnim";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <BackgroundAnim />
      <Navigation />
      <div className="header-container">
        <div className="content">
          <div>
            <h1>
              <span>
                Bienvenue ! <br /> Je suis Ange Kouassi
              </span>{" "}
              Développeur Web{" "}
            </h1>
            <div className="desc">
              <span>Développeur Front-end</span>
            </div>
            <div className="contact-btn">
              <NavLink to="/contacts" className="link">
                Contactez-moi !
              </NavLink>
            </div>
          </div>
        </div>
        <span className="scroll-indicator">
          <img src="./icons/arrow-move-down.svg" alt="arrow-move-down" />
        </span>
      </div>
    </header>
  );
};

export default Header;
