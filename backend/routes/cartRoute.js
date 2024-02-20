import { Router } from "express";
import { addCart, getCart, updateCart } from "../controllers/cartController.js";

const cartRoute = Router();

cartRoute.post('/cart', addCart);
cartRoute.put('/cart', updateCart);
cartRoute.get('/cart/:userId', getCart);

export default cartRoute;