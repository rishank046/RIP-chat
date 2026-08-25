import pool from '../../db/connect.ts';
import { CREATE_USER } from '../../db/queries.ts';

const createUser = async (username: string, password: string, email: string) => {
    const dbResult = await pool.query(CREATE_USER, [username, password, email]);
    return dbResult;
};

const loginUser = async (username: string, password: string) => {
    // Implementation for logging in a user
};

export { createUser, loginUser };