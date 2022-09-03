import React from "react";
import Header from "../components/Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
