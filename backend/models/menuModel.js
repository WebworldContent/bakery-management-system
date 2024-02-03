import conn from "../config/db";

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
  }
};

export { createData };
