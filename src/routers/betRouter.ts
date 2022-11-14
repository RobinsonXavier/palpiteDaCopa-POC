import express from 'express';
import { createBets, getBets, updateBet } from '../controllers/betController.js';
import { authToken } from '../middlewares/authMiddleware.js';

const betRouter = express.Router();

betRouter.get('/yourBets', authToken, getBets);

betRouter.post('/bets/:userId', authToken, createBets);

betRouter.post('/yourBets/:betId', authToken, updateBet);



export default betRouter;