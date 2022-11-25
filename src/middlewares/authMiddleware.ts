import { Request, Response } from 'express';
import { searchToken } from '../repository/authRepository.js';

async function authToken(req: Request, res: Response, next: Function): Promise<Response> {
    const { authorization } = req.headers as { authorization: string };
    
    const token: string = authorization?.replace('Bearer ', '');
    const result = await searchToken(token);

    if(!result) {
        return res.sendStatus(401);
    }

    const userId: number = result.userId;
        
    res.locals.userId = userId as number;
    res.locals.token = token as string;

    next();
};

export {
    authToken
};