import React, { useState } from "react";

import HeaderSection from "../components/frontComponents/HeaderSection";
import LandingSection from "../components/frontComponents/LandingSection";
import ProductSection from "../components/frontComponents/ProductSection";
import AboutSection from "../components/frontComponents/AboutSection";
import ContactSection from "../components/frontComponents/ContactSection";
import SocialFooter from "../components/frontComponents/SocialFooter";

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
