import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwtUtils.ts";

export const authMiddleware = (req:any, res:Response, next:NextFunction) => {
    const token = req.headers["authorization"]?.split("")[1] //token

    if(!token) {
        return res.status(401).json({message: "No Token"})
    }

    try {
        const decode:any = verifyToken(token)
        req.id = decode.id;
        next();
    } catch (error) {
        return res.status(403).json({ message: "Invalid or expired token" });
    }
}