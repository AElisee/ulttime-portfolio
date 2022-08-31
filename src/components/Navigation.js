import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import SocialNetwork from "./SocialNetwork";

const Navigation = () => {
  const [isClose, setIsClose] = useState(true);
  return (
    <div className="navigation">
      <div>
        <nav>
          <div
            onClick={() => {
              setIsClose(false);
            }}
          >
            <img
              src="./icons/menu-2.svg"
              alt="menu-icon"
              className="menu-burger"
            />
            <span>Ange Kouassi</span>
          </div>
          <SocialNetwork />
        </nav>
        <ul className={`sideNav ${!isClose ? "sideNav-close" : ""}`}>
          <li className="sideNav-header">
            <div className="content">
              <h3>Ange Elisée Kouassi</h3>
              <h5>développeur front-end | reactJs</h5>
            </div>
            <img
              src="./icons/square-x.svg"
              alt="square-x_icon"
              onClick={() => {
                setIsClose(true);
              }}
              className="square-x"
            />
          </li>
          <li>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : null)}
            >
              <img src="./icons/home-2.svg" alt="home-icon" />
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/competences"
              className={(nav) => (nav.isActive ? "nav-active" : null)}
            >
              <img src="./icons/tools.svg" alt="tool-icon" />
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={(nav) => (nav.isActive ? "nav-active" : null)}
            >
              <img src="./icons/briefcase.svg" alt="briefcase-icon" />
              <span>Projets</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              className={(nav) => (nav.isActive ? "nav-active" : null)}
            >
              <img src="./icons/address-book.svg" alt="contact-icon" />
              <span>Contacts</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mon-cv"
              className={(nav) => (nav.isActive ? "nav-active" : null)}
            >
              <img src="./icons/file-text.svg" alt="file-text-icon" />
              <span>Mon CV</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
