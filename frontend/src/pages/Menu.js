import React, { useState } from "react";
import MenuBanner from "../components/MenuBanner";
import MenuContents from "../components/MenuContents";
import HeaderSection from "../components/HeaderSection";

const Menu = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addCartItem = (item) => {
    const foundItemIdx = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (foundItemIdx === -1) {
      setCart((prevItems) => [...prevItems, item]);
    } else {
      const updatedCart = [...cart];
      updatedCart[foundItemIdx] = item;
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
