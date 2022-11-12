import pg from 'pg';
import dotenv from 'dotenv';
import { ServerPool } from '../protocols/serverPool.js';
dotenv.config();

const { Pool } = pg;

const databaseConfig: ServerPool = {
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DATABASE,
};

const connection = new Pool(databaseConfig);

export default connection;

