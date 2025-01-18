import {Request, Response}  from "express";
import { registerUser, loginUSer } from "../service/User.service";

export class UserController {
    
    async createUser(req:Request, res:Response) {
        try {
            const data = {...req.body, role:"user"};
            const response:any = await registerUser(data);
            return res.status(201).json({message:"User created successfully", user:response});
        } catch (error:any) {
            return res.status(500).json({message:"Error in creating user", error:error.message});
        }
    }

    async login(req: Request, res: Response)  {
        try {
          const result = await loginUSer(req.body);
          res.json(result);
        } catch (error:any) {
          return res.status(400).json({ error: error.message });
        }
    };
}

