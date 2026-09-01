import { type Request , type Response } from "express";
import z, { email } from "zod";
import { createUser , loginUser } from "./auth.service.ts";




const loginSchema = z.object({
    email : z.string().email().nullable(),
    password : z.string().min(8).max(20).nullable(),
    token : z.string().min(1).max(500).nullable() ,
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
    const {email , password , token} = loginSchema.parse(req.body);

    const result = await loginUser(email || "" , password || "" , token || "");
    res.status(200).json(result);
}

export {register , login};