import {
  addCartItems,
  getCartItem,
  updateCartItems,
} from "../models/cartModel.js";

const updateCart = async (req, res) => {
  try {
    const cartData = { ...req.body };
    const {userId, cart} = cartData;
    await updateCartItems(cart, userId);
    res.status(200).send({ status: "successfull" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "fail" });
  }
};

const addCart = async (req, res) => {
  try {
    const cartData = { ...req.body };
    const {userId, cart} = cartData;
    await addCartItems(cart, userId);
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
    res.status(200).send({ status: "successfull", cart: response });
  } catch (error) {
    console.log(error);
    res.status(500).send({ status: "fail" });
  }
};

export { updateCart, addCart, getCart };