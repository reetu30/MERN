import jwt from 'jsonwebtoken'
import { config as configDotenv } from 'dotenv';
configDotenv()

const JWT_KEY:any = process.env.JWT_KEY

export const generateToken = (id:number)=>{
    return jwt.sign({id}, JWT_KEY, {expiresIn: "10"});
}

export const verifyToken = (token:string)=>{
    try {
        return jwt.verify(token, JWT_KEY)
    } catch (error:any) {
        throw new Error(error);
    }
}