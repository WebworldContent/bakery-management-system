import React, { useCallback, useContext, useEffect, useState } from "react";
import MenuBanner from "../components/frontComponents/MenuBanner";
import MenuContents from "../components/frontComponents/MenuContents";
import HeaderSection from "../components/frontComponents/HeaderSection";
import userContext from "../components/contextAPI/userContext";
import {
  addCart,
  getCart,
  updateCart,
} from "../components/services/cartService";
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

  const { userId: localUserId = '' } = getItem();

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
        const cartData = await getCart(avaiableUserId);
        // console.log(cartData);
        return cartData;
      } catch (error) {
        console.log(error);
      }
    };

    if (avaiableUserId) {
      getUserCart();
    }
  }, [cart, avaiableUserId, navigate]);

  const addUserCart = useCallback(
    async (item) => {
      try {
        const updatedCart = { ...item, user_id: avaiableUserId };
        await addCart(updatedCart);
      } catch (error) {
        console.log(error);
      }
    },
    [avaiableUserId]
  );

  const updateUserCart = useCallback(
    async (item) => {
      try {
        const updatedCart = { ...item, user_id: avaiableUserId };
        await updateCart(updatedCart);
      } catch (error) {
        console.log(error);
      }
    },
    [avaiableUserId]
  );

  const addCartItem = (item) => {
    if (avaiableUserId) {
      const foundItemIdx = cart.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      console.log(item);
      if (foundItemIdx === -1) {
        setCart((prevItems) => [...prevItems, item]);
        addUserCart(item);
      } else {
        const updatedCart = [...cart];
        updatedCart[foundItemIdx] = item;
        setCart(updatedCart);
        updateUserCart(item);
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
