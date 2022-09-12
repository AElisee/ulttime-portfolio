import React, { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";
import SocialNetwork from "./SocialNetwork";

const Navigation = () => {
  const [isClose, setIsClose] = useState(true);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
        setIsClose(true);
      } else {
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return show ? (
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
              <img
                src="./icons/align-justified.svg"
                alt="align-justified-icon"
                className="open-close"
              />
            </div>
            <span>Ange</span>
          </div>
          <SocialNetwork />
        </nav>
        <ul className={`sideNav ${isClose === false ? "sideNav-close" : ""}`}>
          <li className="sideNav-header">
            <span
              className="close-icon"
              onClick={() => {
                setIsClose(true);
              }}
            >
              <img src="./icons/caret-left.svg" alt="" />
            </span>

            <div className="profile">
              <div className="profile-container">
                <h3>Ange Elisée Kouassi</h3>
                <h5>Développeur Front-end</h5>
              </div>
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
              <img src="./icons/adjustments.svg" alt="tool-icon" />
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
        </ul>
      </div>
    </div>
  ) : null;
};

export default Navigation;
