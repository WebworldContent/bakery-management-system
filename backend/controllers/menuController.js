import { createData, fetchData } from "../models/menuModel.js";

const addMenu = async (req, res) => {
  try {
    const data = { ...req.body };
    await createData(data);
    res.status(200).send({ status: "success", msg: "menu item added successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "fail" });
  }
};

const getMenu = async (req, res) => {
  try {
    const response = await fetchData();
    res.status(200).send({ status: "success", data: response });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "fail" });
  }
};

export { addMenu, getMenu };
