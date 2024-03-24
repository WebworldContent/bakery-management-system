import conn from "../config/db.js";

const updateCartItems = async (cart, userId) => {
  try {
    return await conn((connection) =>
      connection.execute(
        `update cart set cart='${JSON.stringify(cart)}' where user_id=${userId}`
      )
    );
  } catch (err) {
    console.log("Error occure in while querying... ", err);
    throw err;
  }
};

const addCartItems = async (cart, userId) => {
  console.log('cart data', cart);
  try {
    return await conn((connection) =>
      connection.execute(
        `insert into cart (user_id, cart) values(${userId}, '${JSON.stringify(cart)}')`
      )
    );
  } catch (err) {
    console.log("Error occure in while querying... ", err);
    throw err;
  }
};

const getCartItem = async (userId) => {
  try {
    const [rows, fields] = await conn((connection) =>
      connection.execute(`select * from cart where user_id = ${userId}`)
    );
    return rows;
  } catch (err) {
    console.log("Error occure in while querying... ", err);
    throw err;
  }
};

export { updateCartItems, addCartItems, getCartItem };