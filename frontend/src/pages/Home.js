import React from "react";

import HeaderSection from "../components/HeaderSection";
import LandingSection from "../components/LandingSection";
import ProductSection from "../components/ProductSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import SocialFooter from "../components/SocialFooter";

const Home = () => {
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
};

export default Home;
