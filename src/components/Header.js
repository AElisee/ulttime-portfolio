import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <Navigation />
      <div className="header-container">
        <div className="content">
          <div>
            <h1>
              <span>ANGE KOAUSSI</span> Développeur Web{" "}
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
          <i className="fa-solid fa-arrow-down"></i>
        </span>
      </div>
    </header>
  );
};

export default Header;
