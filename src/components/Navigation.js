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
            className="menu"
            onClick={() => {
              setIsClose(false);
            }}
          >
            <div className="menu-burger">
              <i className="fa-solid fa-bars"></i>
            </div>

            <span>Ange</span>
          </div>
          <SocialNetwork />
        </nav>
        <ul className={`sideNav ${isClose === false ? "sideNav-close" : ""}`}>
          <li className="sideNav-header">
            <div className="content">
              <h3>Ange Elisée Kouassi</h3>
              <h5>développeur front-end | reactJs</h5>
            </div>
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
              to="/je_suis"
              className={(nav) => (nav.isActive ? "nav-active" : null)}
            >
              <img src="./icons/file-text.svg" alt="file-text-icon" />
              <span>A propos</span>
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
          <div
            className="close-area"
            onClick={() => {
              setIsClose(true);
            }}
          >
            <img src="./icons/square-x.svg" alt="square-x_icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
