import connection from "../database/db.js";

async function listBets(userId: number) {
    return await connection.query(`SELECT * FROM bets WHERE "userId" = $1;`
    , [userId]);
};

export {
    listBets
}

