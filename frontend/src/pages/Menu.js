import React, { useState } from "react";
import MenuBanner from "../components/MenuBanner";
import MenuContents from "../components/MenuContents";
import HeaderSection from "../components/HeaderSection";

const Menu = () => {
  const [cart, setCart] = useState([]);

  const addCartItem = (item) => {
    const foundItemIdx = cart.findIndex((cartItem) => cartItem.id === item.id);
    if (-1 === foundItemIdx) {
      setCart((prevItems) => [...prevItems, item]);
    } else {
      const updatedCart = [...cart];
      updatedCart.splice(foundItemIdx, 1, item);
      setCart(updatedCart);
    }
  };

  return (
    <>
      <div className="sub_page">
        <div className="hero_area">
          <HeaderSection />
        </div>
      </div>
      <MenuBanner />
      <MenuContents addCartItem={addCartItem} />
    </>
  );
};

export default Menu;
