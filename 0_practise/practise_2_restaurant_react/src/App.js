import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
