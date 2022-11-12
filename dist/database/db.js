import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();
var Pool = pg.Pool;
var databaseConfig = {
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DATABASE
};
var connection = new Pool(databaseConfig);
export default connection;
