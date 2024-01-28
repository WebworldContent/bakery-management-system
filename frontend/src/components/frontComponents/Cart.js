import { React } from 'react';
import "./Cart.css";

const Cart = ({showModal, closeModal, cart, cartPrice}) => {
  const incrementQuantity = () => {};

  const decrementQuantity = () => {};

  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className="modal-content">
      <span className="close" onClick={() => closeModal(false)}>&times;</span>
      <h2>Your Cart</h2>
      <ul className="cartItemList">
        {cart.length > 0 ? cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
            <span className="cart-action">
              <button onClick={() => incrementQuantity(item.price)}>+</button>
              <span>{item.count}</span>
              <button onClick={() => decrementQuantity(item.price)}>-</button>
            </span>
          </li>
        )) : <p>Cart is Empty</p>}
      </ul>
      {cart.length > 0 && <p>Total: <span id="cartTotal">${cartPrice}</span></p>}
      </div>
    </div>
  );
};

export default Cart;