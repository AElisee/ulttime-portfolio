import React from "react";
import Header from "../components/Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Mouse from "../components/Mouse";
import Totop from "../components/Totop";

const Home = () => {
  return (
    <div className="home">
      <Mouse />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Totop />
    </div>
  );
};

export default Home;
