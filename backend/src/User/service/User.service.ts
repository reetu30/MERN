import { getRepository } from "typeorm";
import UserInterface from "../../interfaces/User.interface";
import User from "../../schema/User.schema";
import jwt from 'jsonwebtoken';
import { config as configDotenv } from 'dotenv';
configDotenv();

const JWT_KEY:any  = process.env.JWT_KEY;
console.log(JWT_KEY, "from user service");

export class UserService {
    private userRepository = getRepository(User);

    private generateToken(user:any) {
       return jwt.sign(user, JWT_KEY, {expiresIn:5000})
    }
    async getUser() {
        return await this.userRepository.find();
    }

    async getUserById(id: any) {
        return await this.userRepository.findOneBy({id: id});
    }

    async createUser(data:UserInterface) {
        const user = new User(data);
        return await user.save();
    }
    
}