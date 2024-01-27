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

  const handleCartAddition = (item) => {
    const indx = menu.findIndex((data) => data.id === item.id);
    const itemCount = item.count ? (item.count + 1) : 1; 
    const updateItem = { ...item, count: itemCount };
    const copiedMenu = [...menu];
    copiedMenu.splice(indx, 1, updateItem);
    setMenu(copiedMenu);
    addCartItem(updateItem);
  };

  const findItem = (itemId) => {
    const indx = menu.findIndex((item) => item.id === itemId);
    const count = menu[indx].count || 0;
    return { indx, count };
  };

  const onDecrease = (itemId) => {
    const { indx: matchedIndx, count: itemCount } = findItem(itemId);
    const updatedItem = {
      ...menu[matchedIndx],
      count: itemCount > 0 ? itemCount - 1 : 0,
    };
    const updateMenu = [...menu];
    updateMenu.splice(matchedIndx, 1, updatedItem);
    setMenu(updateMenu);
  };

  const onIncrease = (itemId) => {
    const { indx: matchedIndx, count: itemCount } = findItem(itemId);
    const updatedItem = { ...menu[matchedIndx], count: itemCount + 1 };
    const updateMenu = [...menu];
    updateMenu.splice(matchedIndx, 1, updatedItem);
    setMenu(updateMenu);
  };

  const itemInput = (item) => {
    const {id, count} = item;
    return (
      <div className="number-input">
        <button onClick={() => onDecrease(id)}>-</button>
        <input type="number" value={count || 0} readOnly />
        <button onClick={() => onIncrease(id)}>+</button>
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
                        onClick={() => handleCartAddition(item)}
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
