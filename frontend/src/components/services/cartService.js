import axios from "axios";

const addCart = async (data) => {
  try {
    return await axios.post("http://localhost:3001/cart", {
      ...data,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateCart = async (data) => {
  try {
    await axios.put("http://localhost:3001/cart", {
      ...data,
    });
  } catch (error) {
    console.log(error);
  }
};

const getCart = async (userId) => {
  try {
    const { data } = await axios.get(`http://localhost:3001/cart/${userId}`);
    return data
  } catch (error) {
    console.log(error);
  }
};

export { addCart, updateCart, getCart };
