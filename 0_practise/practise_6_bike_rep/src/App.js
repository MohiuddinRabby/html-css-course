import React from "react";
import Cards from "./components/Cards";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Cards />
      <Contact />
    </div>
  );
};

export default App;
