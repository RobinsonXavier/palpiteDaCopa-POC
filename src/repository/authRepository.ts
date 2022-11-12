import connection from "../database/db.js";

async function insertUser (name:string, email:string, password:string) {
    return await connection.query(`INSERT INTO users (name, email, password, hits) VALUES ($1, $2, $3, $4);`
    , [name, email, password, 0]);
};

async function searchEmail(email:string) {
    return await connection.query(`SELECT * FROM users WHERE users.email = $1;`
    , [email]);
}

export {
    insertUser,
    searchEmail
};