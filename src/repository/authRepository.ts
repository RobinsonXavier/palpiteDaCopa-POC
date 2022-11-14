import { QueryResult } from "pg";
import connection from "../database/db.js";

async function insertUser (name:string, email:string, password:string): Promise<QueryResult> {
    return await connection.query(`INSERT INTO users (name, email, password, hits) VALUES ($1, $2, $3, $4);`
    , [name, email, password, 0]);
};

async function searchEmail(email:string): Promise<QueryResult> {
    return await connection.query(`SELECT * FROM users WHERE users.email = $1;`
    , [email]);
}

async function loginUser(userId: number, token: string): Promise<QueryResult> {
    const status: number = Date.now();

    return await connection.query(`INSERT INTO sessions ("userId", token, "lastStatus") VALUES ($1, $2, $3);`
    , [userId, token, status]);

}

async function searchSession(userId: number): Promise<QueryResult> {
    return await connection.query(`SELECT * FROM sessions WHERE "userId" = $1;`
    , [userId]);
}

async function searchToken(token: string): Promise<QueryResult> {
    return await connection.query(`SELECT * FROM sessions WHERE token = ${token};`);
};

export {
    insertUser,
    searchEmail,
    loginUser,
    searchSession,
    searchToken
};