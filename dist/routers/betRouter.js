import express from 'express';
import { createBets, getBets, updateBets, deleteBets } from '../controllers/betController.js';
import { authToken } from '../middlewares/authMiddleware.js';
var betRouter = express.Router();
betRouter.get('/yourBets', authToken, getBets);
betRouter.post('/bets/:userId', authToken, createBets);
betRouter.put('/yourBets/:betId', authToken, updateBets);
betRouter["delete"]('/yourBets/:betId', authToken, deleteBets);
export default betRouter;
