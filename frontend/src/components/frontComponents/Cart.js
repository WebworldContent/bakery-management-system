import { React, useCallback, useContext, useEffect } from "react";
import "./Cart.css";
import { addCart, updateCart, getCart } from "../services/cartService";
import { useLocalStore } from "../customHooks/localStore";
import userContext from "../contextAPI/userContext";

const Cart = ({ showModal, closeModal, cart, cartPrice }) => {
  const [, getItem] = useLocalStore("userData");
  const {
    userAuth: { userId },
  } = useContext(userContext);

  const { userId: localUserId = "" } = getItem();

  const avaiableUserId = userId || localUserId;

  const addUserCart = useCallback(
    async (item) => {
      try {
        const updatedCart = { cart: item, userId: avaiableUserId };
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
        const updatedCart = { cart: item, userId: avaiableUserId };
        await updateCart(updatedCart);
      } catch (error) {
        console.log(error);
      }
    },
    [avaiableUserId]
  );

  useEffect(() => {
    const getUserDat = async () => {
      try {
        const { cart: userCart } = await getCart(avaiableUserId);
        const cartInfo = userCart[0]?.cart;
        if (cartInfo && cartInfo.length) {
          updateUserCart(cart);
        } else {
          addUserCart(cart);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (avaiableUserId && cart.length) {
      getUserDat();
    }
  }, [cart, avaiableUserId, addUserCart, updateUserCart]);

  return (
    <div className={`modal ${showModal ? "show" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={() => closeModal(false)}>
          &times;
        </span>
        <h2>Your Cart</h2>
        <ul className="cartItemList">
          {cart.length > 0 ? (
            cart.filter((data) => data.count > 0).map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price.toFixed(2)}
                <span className="cart-action">
                  <span>{item.count}</span>
                </span>
              </li>
            ))
          ) : (
            <p>Cart is Empty</p>
          )}
        </ul>
        {cart.length > 0 && (
          <div style={{display: "flex", justifyContent: "space-between"}}>
            <span>
              <p>
                Total: <span id="cartTotal">${cartPrice}</span>
              </p>
            </span>
            <span>
              <button onClick={() => {}}>Buy</button>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
