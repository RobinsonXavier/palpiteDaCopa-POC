import { Request, Response } from 'express';
import { QueryResult } from 'pg';
import * as betRepository from '../repository/betRepository.js';
import * as dbTypesProtocols from '../protocols/dbTypesProtocols.js';

async function getBets(req: Request, res: Response) {
    try {
        const result: QueryResult = await betRepository.listBets(res.locals.userId);

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

async function createBets(req: Request, res: Response) {
    const { userId } = req.params as { userId: string };
    const { gameId, bet } = req.body as Pick<dbTypesProtocols.dataBaseQueryBets, 'gameId' | 'bet'>;

    try {

        const userCheck: QueryResult = await betRepository.checkUser(Number(userId));

        if (!userCheck.rows[0]) {
            return res.sendStatus(401);
        }

        const gameCheck: QueryResult = await betRepository.checkGame(gameId);

        if (!gameCheck.rows[0]) {
            return res.status(404).send('The game was not found');
        }
        
        await betRepository.insertBet(Number(userId), gameId, bet);

        return res.status(201).send('Good luck');
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

export {
    getBets,
    createBets
};