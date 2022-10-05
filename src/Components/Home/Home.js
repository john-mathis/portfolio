import React from "react";
import "..//Home/Home.css";

const Home = () => {
  const dynamicQuotes = [
    "No storm can last forever.",
    "All limitations are self-imposed.",
    "Choose the world you see.",
    "Chance favors the prepared mind.",
    "The shortest answer is doing.",
  ];

  const selectRandomQuote = Math.floor(Math.random() * dynamicQuotes.length);

  return (
    <>
      <div className="home-container" id="home">
        <div className="header-container">
          <h1 className="header">John Mathis</h1>
          <h3 className="sub-heading">Web Developer</h3>
          <h4 className="dynamic-quote">{dynamicQuotes[selectRandomQuote]}</h4>
        </div>
      </div>
    </>
  );
};

export default Home;
