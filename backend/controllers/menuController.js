import { createData } from "../models/menuModel";

const menu = async (req, res) => {
  try {
    const data = { ...req.body };
    await createData(data);
    res.status(200).send({ status: "success", msg: "menu item added successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "fail" });
  }
};

export { menu };
