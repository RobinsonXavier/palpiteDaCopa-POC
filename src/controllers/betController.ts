import { Request, Response } from 'express';
import { bets, users, games } from '@prisma/client';
import * as betRepository from '../repository/betRepository.js';
import * as dbTypesProtocols from '../protocols/dbTypesProtocols.js';

async function getBets(req: Request, res: Response) {
    try {
        const result = await betRepository.listBets(res.locals.userId);

        if (!result) {
            return res.sendStatus(404);
        }

        return res.status(200).send({
            bets: result
        });

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }

};

async function createBets(req: Request, res: Response) {
    const { userId } = req.params as { userId: string };
    const { gameId, bet } = req.body as Pick<dbTypesProtocols.dataBaseQueryBets, 'gameId' | 'bet'>;

    try {

        const userCheck: users = await betRepository.checkUser(Number(userId));

        if (!userCheck) {
            return res.sendStatus(401);
        }

        const gameCheck: games = await betRepository.checkGame(gameId);

        if (!gameCheck) {
            return res.status(404).send('The game was not found');
        }

        if (gameCheck.status === 'closed') {
            return res.status(401).send('Bets have already been settled for this game')
        }

        const bets: bets[] = await betRepository.listBets(Number(userId));

        const alreadyBet: bets = bets.find( element => element.gameId === gameId);

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
        const betCheck: bets = await betRepository.checkBet(Number(betId));

        if (!betCheck) {
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
        const betCheck: bets = await betRepository.checkBet(Number(betId));

        if (!betCheck) {
            return res.sendStatus(404);
        }

        await betRepository.deleteBet(Number(betId));

        return res.status(200).send('Bet deleted');

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

async function betStatus(req: Request, res: Response) {
    
    try {
        const list: bets[] = await betRepository.listBets(res.locals.userId);

        if (!list) {
            return res.sendStatus(404);
        }

        const gameList: games[] = await betRepository.listClosedGames();

        const hits: bets[] = list.filter( element => {
            for (let i = 0; i < gameList.length; i++) {
                if (element.gameId === gameList[i].id) {
                    if(element.bet === gameList[i].scoreBoard) {
                        return element;
                    }
                } 
            }
        });

        const numberHits: number = hits.length;

        if (numberHits === 0) {
            return res.status(200).send('You didn??t hit any bets');
        }

        await betRepository.updateUserHits(numberHits, res.locals.userId);

        return res.status(200).send(`You hit ${numberHits} bets`);

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
};

export {
    getBets,
    createBets,
    updateBets,
    deleteBets,
    betStatus
};