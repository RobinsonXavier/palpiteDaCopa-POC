import express from 'express';
import cors from 'cors';

import authRouter from './routers/authRouter.js';
import betRouter from './routers/betRouter.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use(authRouter);
app.use(betRouter);

app.listen(4000, ()=> {
    console.log("Server listen on 4000")
})