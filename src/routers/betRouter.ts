import express from 'express';
import { getBets } from '../controllers/betController.js';
import { authToken } from '../middlewares/authMiddleware.js';

const betRouter = express.Router();

betRouter.get('/yourBets', authToken, getBets);

export default betRouter;