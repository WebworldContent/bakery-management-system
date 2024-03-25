import axios from "axios";

export const addCustomerQuery = async (data) => {
  try {
    return await axios.post("http://localhost:3001/customer/query", {
      ...data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllCustomerQuery = async () => {
  try {
    const { data } = await axios.get("http://localhost:3001/customer/query");
    return data;
  } catch (error) {
    console.log(error);
  }
};
