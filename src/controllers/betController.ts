import { Request, Response } from 'express';
import * as betRepository from '../repository/betRepository.js';

async function getBets(req: Request, res: Response) {
    try {
        const result = await betRepository.listBets(res.locals.userId);

        if (!result.rows[0]) {
            return res.sendStatus(404);
        }

        return res.status(200).send({
            bets: result.rows
        })

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }

};

export {
    getBets
};