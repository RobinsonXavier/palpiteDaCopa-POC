import { QueryResult } from "pg";
import connection from "../database/db.js";

async function listBets(userId: number): Promise<QueryResult>  {
    return await connection.query(`SELECT * FROM bets WHERE "userId" = $1;`
    , [userId]);
};

async function checkUser(userId: number): Promise<QueryResult>  {
    return await connection.query(`SELECT * FROM users WHERE id = $1;`
    , [userId]);
};

async function checkGame(gameId: number): Promise<QueryResult>  {
    return await connection.query(`SELECT * FROM games WHERE id = $1;`
    , [gameId]);
};

async function insertBet(userId: number, gameId: number, bet: string): Promise<QueryResult>  {
    return await connection.query(`INSERT INTO bets ("userId", "gameId", bet) VALUES ($1, $2, $3);`
    , [userId, gameId, bet]);
};

async function updateBet(betId: number, bet: string): Promise<QueryResult>  {
    return await connection.query(`UPDATE bets SET "bet"= $1 WHERE id = $2;`
    , [bet, betId]);
}

async function checkBet(betId: number): Promise<QueryResult> {
    return await connection.query(`SELECT * FROM bets WHERE id = $1;`
    , [betId]);
}

async function deleteBet(betId: number): Promise<QueryResult>  {
    return await connection.query(`DELETE bets WHERE id = $1;`
    , [betId]);
}

export {
    listBets,
    insertBet,
    checkUser,
    checkGame,
    checkBet,
    updateBet,
    deleteBet
}

