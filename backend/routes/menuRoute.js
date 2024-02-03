import express, { Router } from "express";
import { menu } from "../controllers/menuController";

const menuRoute = Router();

menuRoute.post("/addMenu", menu);

export default menuRoute;