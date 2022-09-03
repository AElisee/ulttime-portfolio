import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/je_suis" element={<About />} />
        <Route path="/competences" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
