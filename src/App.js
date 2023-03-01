import React from "react";
import "../src/App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import Contact from "./Components/ContactMe/Contact";
import Projects from "./Components/Projects/Projects";

const App = () => {
  return (
    <>
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
