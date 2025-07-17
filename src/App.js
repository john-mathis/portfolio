import React from "react";
import "../src/App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import Contact from "./Components/ContactMe/Contact";
import Projects from "./Components/Projects/Projects";
import Experience from "./Components/Experience/Experience";

const App = () => {
  return (
    <>
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
