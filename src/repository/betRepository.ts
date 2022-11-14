import connection from "../database/db.js";

async function listBets(userId: number) {
    return await connection.query(`SELECT * FROM bets WHERE "userId" = $1;`
    , [userId]);
};

async function checkUser(userId: number) {
    return await connection.query(`SELECT * FROM users WHERE id = $1;`
    , [userId]);
};

async function checkGame(gameId: number) {
    return await connection.query(`SELECT * FROM games WHERE id = $1;`
    , [gameId]);
};

async function insertBet(userId: number, gameId: number, bet: string) {
    return await connection.query(`INSERT INTO bets ("userId", "gameId", bet) VALUES ($1, $2, $3);`
    , [userId, gameId, bet]);
};

export {
    listBets,
    insertBet,
    checkUser,
    checkGame
}

