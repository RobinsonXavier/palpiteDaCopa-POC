import express from 'express';
import cors from 'cors';
var app = express();
app.use(express.json());
app.use(cors());
app.listen(4000, function () {
    console.log("Server listen on 4000");
});
