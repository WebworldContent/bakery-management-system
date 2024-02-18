import conn from "../config/db.js";

const addData = async (data) => {
  try {
    const { username, password, address, pincode, phone, email } = data;

    return await conn((connection) =>
      connection.execute(
        `insert into users (username, password, address, pincode, phone, email) values('${username}', '${password}', '${address}', '${pincode}', ${phone}, '${email}')`
      )
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getOneData = async (email = null, id = null) => {
  try {
    let queryData;
    if (email) {
      queryData = `'${email}'`;
    } else {
      queryData = id;
    }
    const [rows, fields] = await conn((connection) =>
      connection.execute(
        `select * from users where ${email ? "email" : "id"}=${queryData}`
      )
    );
    return rows;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const deleteData = async (userId) => {
  try {
    return await conn((connection) =>
      connection.execute(`delete users where id=${userId}`)
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export { addData, getOneData, deleteData };
