import React from "react";
import Header from "../components/Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Mouse from "../components/Mouse";

const Home = () => {
  window.addEventListener("scroll", () => {
    // scroll to top btn displaying
    const toTopBtn = document.getElementById("toTopBtn");
    let scrollValue =
      (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    if (scrollValue > 0.59) {
      toTopBtn.style.visibility = "visible";
    } else {
      toTopBtn.style.visibility = "hidden";
    }
  });
  return (
    <div className="home">
      <Mouse />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <span id="toTopBtn" onClick={() => window.scrollTo(0, 0)}>
        <img src="./icons/arrow-up-circle.svg" alt="arrow-up-circle" />
      </span>
    </div>
  );
};

export default Home;
