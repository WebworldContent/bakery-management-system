import React from "react";
import LandingSection from "./components/LandingSection";
import HeaderSection from "./components/HeaderSection";
import ProductSection from "./components/ProductSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import SocialFooter from "./components/SocialFooter";

function App() {
  return (
    <>
    <div className="hero_area">
      <HeaderSection/>
      <LandingSection/>
    </div>
    <ProductSection/>
    <AboutSection/>
    <ContactSection/>
    <SocialFooter/>
    </>
  );
}

export default App;
