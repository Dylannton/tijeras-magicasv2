import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import Gallery from "./Components/Gallery";
import Location from "./Components/Location";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <Gallery />
      <Location />
    </>
  );
}

export default App;
