import React, { useState } from "react";

import HeaderSection from "../components/HeaderSection";
import LandingSection from "../components/LandingSection";
import ProductSection from "../components/ProductSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import SocialFooter from "../components/SocialFooter";

const Home = () => {
  const [refer, setRefer] = useState(null);

  const getRef = (refer) => {
    setRefer(refer)
  }

  return (
      <>
      <div className="hero_area">
        <HeaderSection/>
        <LandingSection refer={refer}/>
      </div>
      <ProductSection getRef={getRef}/>
      <AboutSection/>
      <ContactSection/>
      <SocialFooter/>
      </>
    );
};

export default Home;
