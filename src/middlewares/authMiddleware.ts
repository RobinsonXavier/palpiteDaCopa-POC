import { Request, Response } from 'express';
import { searchToken } from '../repository/authRepository.js';

async function authToken(req: Request, res: Response, next: Function) {
    const { authorization } = req.headers as { authorization: string };

    const token: string = authorization?.replace('Bearer ', '');

    const result = await searchToken(token);

    if(!result.rows[0]) {
        return res.sendStatus(401);
    }

    const userId: number = result.rows[0].userId;

    res.locals.token = token;
    res.locals.userId = userId;

    next();
};

export {
    authToken
};