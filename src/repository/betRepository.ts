import { users, games, bets } from '@prisma/client';

import prisma from '../database/db.js';

async function listBets(userId: number): Promise<bets[]> {
    return prisma.bets.findMany({
        where: {
            userId
        }
    })
};

async function checkUser(userId: number): Promise<users> {
    return prisma.users.findFirst({
        where: {
            id: userId
        }
    })
};

async function checkGame(gameId: number): Promise<games> {
    return prisma.games.findFirst({
        where: {
            id: gameId
        }
    })
};

async function insertBet(userId: number, gameId: number, bet: string): Promise<bets> {
    return prisma.bets.create({
        data: {
            userId,
            gameId,
            bet
        }
    })
};

async function updateBet(betId: number, bet: string): Promise<bets> {
    return prisma.bets.update({
        where:{
            id: betId
        },
        data: {
            bet
        }
    })
}

async function checkBet(betId: number): Promise<bets> {
    return prisma.bets.findFirst({
        where: {
            id: betId
        }
    })
}

async function deleteBet(betId: number): Promise<bets> {
    return prisma.bets.delete({
        where: {
            id: betId
        }
    })
}

async function listClosedGames(): Promise<games[]> {
    return prisma.games.findMany({
        where: {
            status: "closed"
        }
    })
};

async function updateUserHits(hits: number, userId: number): Promise<users> {
    return prisma.users.update({
        where: {
            id: userId
        },
        data: {
            hits
        }
    })
}

export {
    listBets,
    insertBet,
    checkUser,
    checkGame,
    checkBet,
    updateBet,
    deleteBet,
    listClosedGames,
    updateUserHits
}

