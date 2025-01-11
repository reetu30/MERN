import express  from "express";
import { UserService } from "../service/User.service";

export class UserController {
    private userService = new UserService();
    
    async createUser(req:express.Request, res:express.Response) {
        try {
            const data = {...req.body, role:"user"};
            const response:any = await this.userService.createUser(data);
            return res.status(201).json({message:"User created successfully", user:response});
        } catch (error:any) {
            res.status(500).json({message:"Error in creating user", error:error.message});
        }
    }
}

