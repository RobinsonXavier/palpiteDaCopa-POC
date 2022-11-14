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

        const bets: QueryResult = await betRepository.listBets(Number(userId));

        const alreadyBet: dbTypesProtocols.dataBaseQueryBets = bets.rows.find( element => element.gameId === gameId);

        if (alreadyBet) {
            return res.status(409).send('You already bet on this game');
        }
        
        await betRepository.insertBet(Number(userId), gameId, bet);

        return res.status(201).send('Good luck');

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

async function updateBets( req: Request, res: Response) {
    const { betId } = req.params as { betId: string };
    const { bet } = req.body as { bet: string };

    try {
        const betCheck: QueryResult = await betRepository.checkBet(Number(betId));

        if (!betCheck.rows[0]) {
            return res.sendStatus(404);
        }

        await betRepository.updateBet(Number(betId), bet);

        return res.status(200).send('Bet updated')
        
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

async function deleteBets(req: Request, res: Response) {
    const { betId } = req.params as { betId: string };

    try {
        const betCheck: QueryResult = await betRepository.checkBet(Number(betId));

        if (!betCheck.rows[0]) {
            return res.sendStatus(404);
        }

        await betRepository.deleteBet(Number(betId));

        return res.status(200).send('Bet deleted');

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

export {
    getBets,
    createBets,
    updateBets,
    deleteBets
};