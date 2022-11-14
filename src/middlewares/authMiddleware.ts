import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import { searchToken } from '../repository/authRepository.js';

async function authToken(req: Request, res: Response, next: Function): Promise<Response> {
    const { authorization } = req.headers as { authorization: string };

    const token: string = authorization?.replace('Bearer ', '');

    const result: QueryResult = await searchToken(token);

    if(!result.rows[0]) {
        return res.sendStatus(401);
    }

    const userId: number = result.rows[0].userId;

    res.locals.token = token as string;
    res.locals.userId = userId as number;

    next();
};

export {
    authToken
};