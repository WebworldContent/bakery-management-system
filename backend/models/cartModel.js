import conn from "../config/db.js";

const updateCartItems = async (data) => {
  try {
    return await conn((connection) =>
      connection.execute(
        `insert into carts (user_id, name, price, count, image) values('${name}', ${price}, '${
          description || ""
        }', '${image || ""}')`
      )
    );
  } catch (err) {
    console.log("Error occure in while querying... ", err);
    throw err;
  }
};

const addCartItems = async (data) => {
  const { user_id, name, price, count, image } = data;
  try {
    return await conn((connection) =>
      connection.execute(
        `insert into carts (user_id, name, price, count, image) values(${user_id}, '${name}', ${price}, ${count}, '${image}')`
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
      connection.execute(
        `select * from carts where user_id = ${userId}`
      )
    );
    return rows;
  } catch (err) {
    console.log("Error occure in while querying... ", err);
    throw err;
  }
};

export { updateCartItems, addCartItems, getCartItem };
