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

export { addMenu, getMenu };
