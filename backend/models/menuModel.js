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
    throw new Error(err);
  }
};

const fetchData = async () => {
  try {
    const [rows, field] = await conn(
      async (connection) => await connection.execute(`select * from menu`)
    );
    return rows;
  } catch (err) {
    console.log("Error occure in while querying... ", err);
    throw new Error(err);
  }
};

export { createData, fetchData };
