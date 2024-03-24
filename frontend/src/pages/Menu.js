import React, { useCallback, useContext, useEffect, useState } from "react";
import MenuBanner from "../components/frontComponents/MenuBanner";
import MenuContents from "../components/frontComponents/MenuContents";
import HeaderSection from "../components/frontComponents/HeaderSection";
import userContext from "../components/contextAPI/userContext";
import { getCart } from "../components/services/cartService";
import { useNavigate } from "react-router-dom";
import { useLocalStore } from "../components/customHooks/localStore";

const Menu = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const [, getItem] = useLocalStore("userData");
  const {
    userAuth: { userId },
  } = useContext(userContext);

  const { userId: localUserId = "" } = getItem();

  const avaiableUserId = userId || localUserId;

  const calculateTotalPrice = useCallback(() => {
    const price = cart.reduce(
      (accumulator, currPrice) => accumulator + currPrice.price,
      0
    );
    setTotalPrice(price.toFixed(2));
  }, [cart]);

  useEffect(() => {
    calculateTotalPrice();
  }, [calculateTotalPrice]);

  useEffect(() => {
    const getUserCart = async () => {
      try {
        const { cart: userCart } = await getCart(avaiableUserId);
        const cartInfo = userCart[0]?.cart;
        if (cartInfo && cartInfo.length) {
          setCart(JSON.parse(cartInfo));
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (avaiableUserId) {
      getUserCart();
    }
  }, [avaiableUserId, navigate]);

  const addCartItem = (item) => {
    if (avaiableUserId) {
      const foundItemIdx = cart.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      if (foundItemIdx === -1) {
        setCart((prevItems) => [...prevItems, item]);
      } else {
        const updatedCart = [...cart];
        updatedCart[foundItemIdx] = item;
        setCart(updatedCart);
      }
      calculateTotalPrice();
      return;
    }
    navigate("/login");
  };

  return (
    <>
      <div className="sub_page">
        <div className="hero_area">
          <HeaderSection cart={cart} cartPrice={totalPrice} />
        </div>
      </div>
      <MenuBanner />
      <MenuContents addCartItem={addCartItem} />
    </>
  );
};

export default Menu;
