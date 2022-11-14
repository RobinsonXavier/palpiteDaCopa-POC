import express from 'express';
import { createBets, getBets } from '../controllers/betController.js';
import { authToken } from '../middlewares/authMiddleware.js';

const betRouter = express.Router();

betRouter.get('/yourBets', authToken, getBets);

betRouter.post('/bets/:userId', authToken, createBets);


export default betRouter;