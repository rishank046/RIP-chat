import { type Request , type Response } from "express";
import z, { email } from "zod";
import { createUser , loginUser } from "./auth.service.ts";

const loginSchema = z.object({
    email : z.string().email(),
    password : z.string().min(8).max(20),
});

const loginByTokenSchema = z.object({
    token : z.string()
});

const registerSchema = z.object({
    username : z.string().min(3).max(20),
    password : z.string().min(8).max(20),
    email : z.string().email()
});

const register = async (req : Request, res : Response) => {
    const {username , password , email} = registerSchema.parse(req.body);

    const result = await createUser(username , password , email);
    res.status(201).json(result);
}

const login = async (req : Request, res : Response) => {
    let token: string | undefined;
    let email: string | undefined;
    let password: string | undefined;
    
    try{
        ({ token } = loginByTokenSchema.parse(req.body));
    } catch(err) {
        ({email , password} = loginSchema.parse(req.body));
    }

    const result = await loginUser(email , password , token);
    res.status(200).json(result);
}

export {register , login};