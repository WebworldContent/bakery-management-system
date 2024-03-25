import conn from "../config/db.js";

export const addData = async (data) => {
  const { name, email, phone, message } = data;
  try {
    return await conn((connection) =>
      connection.execute(
        `insert into customer_quries (name, email, phone, message) values('${name}', '${email}', '${phone}', '${message}')`
      )
    );
  } catch (err) {
    console.log("Error occure in while querying... ", err);
    throw err;
  }
};

export const fetchData = async () => {
  try {
    const [rows, field] = await conn(
      async (connection) =>
        await connection.execute(
          `select * from customer_quries order by id desc`
        )
    );
    return rows;
  } catch (err) {
    console.log("Error occure in while querying... ", err);
    throw err;
  }
};
