import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import Gallery from "./Components/Gallery";
import Location from "./Components/Location";
import ContactButton from "./Components/ContactButton";
import BookingForm from "./Components/BookingForm";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <Gallery />
      <BookingForm />
      <Location />
      <ContactButton />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
