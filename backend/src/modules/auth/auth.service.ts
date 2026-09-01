import pool from '../../db/connect.ts';
import { VERIFY_USER_BY_EMAIL ,  CREATE_USER} from '../../db/queries.ts';
import {verifyToken , createToken} from '../../utils/jwtFunctions.ts';

export const createUser = async (username: string, password: string, email: string) => {
    const dbResult = await pool.query(CREATE_USER, [username, password, email]);
    return dbResult;
};

export const loginUser = async (email: string, password: string , token: string | undefined) => {
    // Implementation for logging in a user
    if(token != undefined){
        const decoded = verifyToken(token);
        return decoded;
    }else
    {
        // Handle username/password login
        const result = await pool.query(VERIFY_USER_BY_EMAIL, [email , password]);
        if(result.isCorrect == true){
            const token = createToken(result.id);
            return token;
        }
    }
};

