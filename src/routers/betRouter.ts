import express from 'express';
import { getBets } from '../controllers/betController.js';

const betRouter = express.Router();

betRouter.get('/yourBets', getBets);

export default betRouter;