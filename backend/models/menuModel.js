import conn from "../config/db.js";

const createData = async (data) => {
  const { name, price, description } = data;
  try {
    return await conn((connection) =>
      connection.execute(
        `insert into menu (name, price, description, image) values('${name}', ${price}, '${description}', '')`
      )
    );
  } catch (err) {
    console.log("Error occure in while querying... ", err);
    throw err;
  }
};

const fetchData = async () => {
  try {
    const [rows, field] = await conn(
      async (connection) =>
        await connection.execute(`select * from menu order by id desc`)
    );
    return rows;
  } catch (err) {
    console.log("Error occure in while querying... ", err);
    throw err;
  }
};

const updateData = async ({ name, description, price, itemId }) => {
  try {
    return await conn(
      async (connection) =>
        await connection.execute(
          `update menu set name='${name}', description='${description}', price=${price} where id=${itemId}`
        )
    );
  } catch (err) {
    console.log("Error occure in while querying... ", err);
    throw err;
  }
};

const deleteData = async ({ itemId }) => {
  try {
    return await conn(
      async (connection) =>
        await connection.execute(`delete from menu where id=${itemId}`)
    );
  } catch (err) {
    console.log("Error occure in while querying... ", err);
    throw err;
  }
};

export { createData, fetchData, updateData, deleteData };
