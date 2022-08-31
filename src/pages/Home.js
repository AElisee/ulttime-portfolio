import React from "react";
import Navigation from "../components/Navigation";
import Typewriter from "typewriter-effect";
import Skills from "./Skills";

import {
  NavLink
}

from "react-router-dom";

const Home=()=> {
  return (<div className="home"> <header> <Navigation /> <div className="header-container"> <div className="content"> <div> <h1> <span>Ange Elisée Kouassi</span> Développeur front-end </h1> <div className="type-writer"> <span> <Typewriter options= {
        {
        strings: [ "Je suis passionné par le métier de développeur web...",
        "Je suis passionné par les nouvelles technologies...",
        "J'aime le beau Design et les animations...",
        "Auto-didacte, je m'adapte assez facilement...",
        ],
        autoStart: true,
        pauseFor: 4000,
        delay: 120,
        loop: true,
        cursor: "<strong style='color: #A90732;'>_</strong>",
        skipAddStyles: false,
      }
    }

    /> </span> <div className="contact-btn"> <NavLink to="/contacts"className= {
      "link"
    }

    > Contactez-moi </NavLink> </div> </div> </div> </div> <span className="scroll-indicator"> <i className="fa-solid fa-arrow-down"></i> </span> </div> </header> <Skills /> </div>);
}

;

export default Home;