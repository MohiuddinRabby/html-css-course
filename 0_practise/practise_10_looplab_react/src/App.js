import React from "react";
import CreateShare from "./components/CreateShare";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Explore />
      <CreateShare />
      <Footer />
    </>
  );
};

export default App;
