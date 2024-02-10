import {
  createData,
  fetchData,
  updateData,
  deleteData,
} from "../models/menuModel.js";

const addMenu = async (req, res) => {
  try {
    const data = { ...req.body };
    await createData(data);
    res
      .status(200)
      .send({ status: "success", msg: "menu item added successfully", info: "added" });
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

const updateMenu = async (req, res) => {
  try {
    const { itemId } = req.params;
    const { name, description, price } = { ...req.body };
    await updateData({ name, description, price, itemId });
    res
      .status(200)
      .send({ status: "success", msg: "menu item updateed successfully", info: "updated" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "fail" });
  }
};

const deleteMenu = async (req, res) => {
  try {
    const { itemId } = req.params;
    await deleteData({ itemId });
    res
      .status(200)
      .send({ status: "success", msg: "menu item deleted successfully", info: "deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "fail" });
  }
};

export { addMenu, getMenu, updateMenu, deleteMenu };
