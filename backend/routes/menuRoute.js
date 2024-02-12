import { Router } from "express";
import { addMenu, getMenu, updateMenu, deleteMenu, getItem } from "../controllers/menuController.js";

const menuRoute = Router();

menuRoute.post("/addMenu", addMenu);
menuRoute.get("/getMenu", getMenu);
menuRoute.get("/getMenu/:id", getItem);
menuRoute.put("/updateItem/:itemId", updateMenu);
menuRoute.delete("/deleteItem/:itemId", deleteMenu);

export default menuRoute;