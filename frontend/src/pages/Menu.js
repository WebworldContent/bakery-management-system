import React from "react";
import MenuBanner from "../components/MenuBanner";
import MenuContents from "../components/MenuContents";
import HeaderSection from "../components/HeaderSection";

const Menu = () => {
    return (
        <>
          <div className="sub_page">
            <div className="hero_area">
              <HeaderSection />
            </div>
          </div>
          <MenuBanner />
          <MenuContents />
        </>
    );
};

export default Menu;
