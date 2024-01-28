import React, { useState } from "react";
import "./MenuContents.css";

const defaultMenu = [
  {
    id: 1,
    name: "Cup Cake",
    img: "https://via.placeholder.com/120",
    discription: "Chocolate puding, vanilla, fruite rasberry jam evporate milk",
    price: 10.99,
  },
  {
    id: 2,
    name: "Special Cake",
    img: "https://via.placeholder.com/120",
    discription: "Chocolate puding, vanilla, fruite rasberry jam evporate milk",
    price: 100,
  },
  {
    id: 3,
    name: "Party Cake",
    img: "https://via.placeholder.com/120",
    discription: "Chocolate puding, vanilla, fruite rasberry jam evporate milk",
    price: 20.5,
  },
  {
    id: 4,
    name: "Yumm Cake",
    img: "https://via.placeholder.com/120",
    discription: "Chocolate puding, vanilla, fruite rasberry jam evporate milk",
    price: 30,
  },
];

const MenuContents = ({ addCartItem }) => {
  const [menu, setMenu] = useState(defaultMenu);

  const handlePrice = (count, price) => price * count;

  const calculateCountUpdate = (item, calCount) => {
    const matchedIndx =  menu.findIndex((data) => data.id === item.id);
    const updatedItem = {
      ...item,
      count: calCount,
    };
    const updateMenu = [...menu];
    updateMenu[matchedIndx] = updatedItem;
    setMenu(updateMenu);
    addCartItem({...updatedItem, price: handlePrice(calCount, updatedItem.price)});
  };

  const onDecrease = (item) => {
    const { count: itemCount } = item;
    calculateCountUpdate(item, itemCount > 0 ? (itemCount - 1) : 0);
  };

  const onIncrease = (item) => {
    const { count: itemCount } = item;
    calculateCountUpdate(item, itemCount ? (itemCount + 1) : 1 );
  };

  const addToCart = (item) => {
    onIncrease(item)
  };

  const itemInput = (item) => {
    const {count} = item;
    return (
      <div className="number-input">
        <button onClick={() => onDecrease(item)}>-</button>
        <input type="number" value={count || 0} readOnly />
        <button onClick={() => onIncrease(item)}>+</button>
      </div>
    );
  };

  return (
    <section className="price_list_area p_100">
      <div className="container">
        <div className="price_list_inner">
          <div className="single_pest_title">
            <h2>Our Menu List</h2>
            <p></p>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="discover_item_inner">
                {menu.map((item) => (
                  <div key={item.id} className="discover_item">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="menu-item-image"
                    />
                    <h4>{item.name}</h4>
                    <p>{item.discription}</p>
                    <span>${item.price}</span>
                    <p>
                      <button
                        className="add-cart"
                        onClick={() => addToCart(item)}
                      >
                        Add
                      </button>
                    </p>
                    {itemInput(item)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuContents;
