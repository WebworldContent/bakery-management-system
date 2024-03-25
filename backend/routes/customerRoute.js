import { Router } from "express";
import { addCustomerQuery, getCustomerQuery } from "../controllers/customerController.js";

const customerRoute = Router();

customerRoute.post('/customer/query', addCustomerQuery);
customerRoute.get('/customer/query', getCustomerQuery);

export default customerRoute;