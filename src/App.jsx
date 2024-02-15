import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainBody from "./components/MainBody";

const App = () => {
  return (
    <div>
      {/* Navbar Starts */}

      <Navbar />
      {/* Navbar Ends */}
      {/* main */}
      <MainBody />
      {/* main */}
      <Footer />
    </div>
  );
};

export default App;
