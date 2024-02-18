import axios from "axios";

const addUser = async (data) => {
  try {
    return await axios.post("http://localhost:3001/signup", {
      ...data,
    });
  } catch (error) {
    throw new Error("Error adding user ", error);
  }
};

const login = async (data) => {
  try {
    return await axios.post("http://localhost:3001/login", {
      ...data,
    });
  } catch (error) {
    throw new Error("Error login user ", error);
  }
};

export { addUser, login };
