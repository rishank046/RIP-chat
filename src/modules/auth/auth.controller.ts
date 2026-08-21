import { type Request , type Response } from "express";
import z from "zod";
import { createUser , loginUser } from "./auth.service.ts";

const loginSchema = z.object({
    username : z.string().min(3).max(20),
    password : z.string().min(8).max(20)
});

const registerSchema = z.object({
    username : z.string().min(3).max(20),
    password : z.string().min(8).max(20),
    email : z.string().email()
});

const register = (req : Request, res : Response) => {
    const {username , password , email} = registerSchema.parse(req.body);

    createUser(username , password , email);
}

const login = (req : Request, res : Response) => {
    const {username , password} = loginSchema.parse(req.body);

    loginUser(username , password);
}

export {register , login};