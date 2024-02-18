import { addData, getOneData } from "../models/userModal.js";
import bcrypt from "bcrypt";

const hashPassword = async (password) => {
  try {
    return await bcrypt.hash(password, 10);
  } catch (error) {
    throw error;
  }
};

const addUser = async (req, res) => {
  try {
    const { password } = req.body;
    await addData({ ...req.body, password: await hashPassword(password) });
    res.status(200).send({
      status: "success",
      msg: "user added successfully",
      info: "added",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "fail",
    });
  }
};

const verifyPassword = async (storedPassword, userPassword) => {
  try {
    return await bcrypt.compare(userPassword, storedPassword);
  } catch (error) {
    throw new Error("Error while comparing password", error);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const response = await getOneData(email);
    const { email: storedEmail, password: storedPassword, id } = response[0];
    if (storedEmail === email && verifyPassword(storedPassword, password)) {
      res.status(200).send({
        status: "success",
        msg: "user verified",
        email: storedEmail,
        userId: id,
      });
      return;
    }
    res.status(403).send({ status: "fail" });
  } catch (error) {
    res.status(500).send({ status: "fail" });
  }
};

export { addUser, loginUser };
