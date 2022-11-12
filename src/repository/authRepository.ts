import connection from "../database/db.js";

async function insertUser (name:string, email:string, password:string) {
    return await connection.query(`INSERT INTO users (name, email, password, hits) VALUES ($1, $2, $3, $4);`
    , [name, email, password, 0]);
};

async function searchEmail(email:string) {
    return await connection.query(`SELECT * FROM users WHERE users.email = $1;`
    , [email]);
}

async function loginUser(userId: number, token: string) {
    const status = Date.now();

    return await connection.query(`INSERT INTO sessions ("userId", token, "lastStatus") VALUES ($1, $2, $3);`
    , [userId, token, status]);

}

export {
    insertUser,
    searchEmail,
    loginUser
};