import { Router } from 'express';
import imageAuth from '../controllers/imageAuthController.js';

const imgAuthRoute = Router();

imgAuthRoute.get('/Auth', imageAuth)

export default imgAuthRoute;