import jwt from 'jsonwebtoken';

export const verifyToken = (token: string) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        return decoded;
    } catch (error) {
        throw new Error('Invalid token');
    }
}

export const createToken = (userId : number) => {
    const token = jwt.sign({id : userId}, process.env.JWT_SECRET as string, {expiresIn : '10h'});
    return token;
}

