import { addData, fetchData } from "../models/customerModel.js";

export const addCustomerQuery = async (req, res) => {
  try {
    const data = { ...req.body };
    await addData(data);
    res.status(200).send({
      status: "success",
      msg: "customer query added successfully",
      info: "added",
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "fail" });
  }
};

export const getCustomerQuery = async () => {
  try {
    const response = await fetchData();
    res.status(200).send({ status: "success", data: response });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "fail" });
  }
};
