import axios from "axios";

const addMenu = async (data) => {
  try {
    return await axios.post("http://localhost:3001/admin/addMenu", {
      ...data,
    });
  } catch (err) {
    throw new Error("Error adding menu ", err);
  }
};

const getMenu = async () => {
  try {
    const { data } = await axios.get("http://localhost:3001/admin/getMenu");
    console.log(data);
    return data;
  } catch (err) {
    throw new Error("Error fetching menu ", err);
  }
};

const getItem = async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:3001/admin/getMenu/${id}`);
    console.log(data);
    return data;
  } catch (err) {
    throw new Error("Error fetching item ", err);
  }
};

const updateMenu = async (data) => {
  try {
    const {name, description, price, id: itemId} = data
    return await axios.put(`http://localhost:3001/admin/updateItem/${itemId}`, {
      name,
      description,
      price
    });
  } catch (err) {
    throw new Error("Error updating menu ", err);
  }
};

const deleteMenu = async (data) => {
  try {
    const {id: itemId} = data;
    return await axios.delete(`http://localhost:3001/admin/deleteItem/${itemId}`);
  } catch (err) {
    throw new Error("Error deleting menu ", err);
  }
};

export { addMenu, getMenu, updateMenu, deleteMenu, getItem };