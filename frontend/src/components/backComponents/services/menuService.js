import axios from "axios";

const addMenu = async (data) => {
  try {
    const response = await axios.post("http://localhost:3001/admin/addMenu", {
      ...data,
    });
    return response;
  } catch (err) {
    throw new Error("Error adding menu ", err);
  }
};

export { addMenu };
