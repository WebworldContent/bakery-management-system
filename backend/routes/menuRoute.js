import { Router } from "express";
import { addMenu, getMenu } from "../controllers/menuController.js";

const menuRoute = Router();

menuRoute.post("/addMenu", addMenu);
menuRoute.get("/getMenu", getMenu);

export default menuRoute;