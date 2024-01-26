import { React } from 'react';
import "./Cart.css";

const Cart = ({showModal, closeModal, cart}) => {

  const incrementQuantity = () => {};

  const decrementQuantity = () => {};

  const calculateTotal = () => {};

  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className="modal-content">
      <span className="close" onClick={closeModal}>&times;</span>
      <h2>Your Cart</h2>
      <ul id="cartItemList">
        {cart.map((item) => (
          <li key={item.price}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => incrementQuantity(item.price)}>+</button>
            <span id={`quantity${item.price}`}>{item.quantity}</span>
            <button onClick={() => decrementQuantity(item.price)}>-</button>
          </li>
        ))}
      </ul>
      <p>Total: <span id="cartTotal">${calculateTotal()}</span></p>
      </div>
    </div>
  );
};

export default Cart;