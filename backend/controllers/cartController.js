import { addCartItems, getCartItem, updateCartItems } from "../models/cartModel.js";

const updateCart = async (req, res) => {
  try {
    const cart = [...req.body];
    return await updateCartItems(cart);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const addCart = async (req, res) => {
  try {
    const cart = { ...req.body };
    await addCartItems(cart);
    res.status(200).send({ status: "successfull" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "fail" });
  }
};

const getCart = async (req, res) => {
  try {
    const { userId } = req.params;
    const response = await getCartItem(userId);
    res.status(200).send({ status: "successfull", cart: response});
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "fail" });
  }
};

export { updateCart, addCart, getCart };
