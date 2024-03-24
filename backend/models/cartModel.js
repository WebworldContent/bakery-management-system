import conn from "../config/db.js";

const updateCartItems = async (data) => {
  const { price, count, user_id, id: item_id } = data;
  try {
    return await conn((connection) =>
      connection.execute(
        `update carts set price=${price}, count=${count} where item_id=${item_id} and user_id=${user_id}`
      )
    );
  } catch (err) {
    console.log("Error occure in while querying... ", err);
    throw err;
  }
};

const addCartItems = async (data) => {
  const { name, price, image, count, user_id, id: item_id } = data;
  try {
    return await conn((connection) =>
      connection.execute(
        `insert into carts (user_id, name, price, count, image, item_id) values(${user_id}, '${name}', ${price}, ${count}, '${image}', ${item_id})`
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
      connection.execute(`select * from carts where user_id = ${userId}`)
    );
    return rows;
  } catch (err) {
    console.log("Error occure in while querying... ", err);
    throw err;
  }
};

export { updateCartItems, addCartItems, getCartItem };