import express from 'express';
import cors from 'cors';
import authRouter from './routers/authRouter.js';
var app = express();
app.use(express.json());
app.use(cors());
app.use(authRouter);
app.listen(4000, function () {
    console.log("Server listen on 4000");
});
