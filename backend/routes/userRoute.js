import { Router } from "express";
import { addUser, loginUser } from "../controllers/userController.js";

const userRoute = Router();

userRoute.post('/signup', addUser);
userRoute.post('/login', loginUser);

export default userRoute;