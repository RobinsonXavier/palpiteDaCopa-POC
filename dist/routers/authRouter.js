import express from 'express';
import { signin, signup } from '../controllers/authController.js';
var authRouter = express.Router();
authRouter.post('/signup', signup);
authRouter.post('/signin', signin);
export default authRouter;
