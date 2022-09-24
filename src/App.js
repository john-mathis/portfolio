import React, { useState } from "react";
import "../src/App.css";
import AboutMe from "./Components/AboutMe/AboutMe";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills/Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Skills />
      <AboutMe />
    </>
  );
};

export default App;
