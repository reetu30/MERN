import AppDataSource from "../../database/config.ts";
import UserInterface from "../../interfaces/User.interface";
import { User } from "../../models/User.ts"
import bcrypt from 'bcryptjs';
import { generateToken } from "../../utils/jwtUtils.ts";
import { config as configDotenv } from 'dotenv';
configDotenv();

const JWT_KEY: any = process.env.JWT_KEY;

export const registerUser = async (data: any) => {
    const userRepository = AppDataSource.getRepository(User);
    const { email, password, role, name } = data
    const existingUser = await userRepository.findOneBy({ email });
    
    if (existingUser) throw new Error("User Already exists!");

    // hashed password
    const hashedPassword = await bcrypt.hash(password, 10)

    console.log(hashedPassword, "hashedPassword");
    
    // Create new User
    const newUser = new User();
    newUser.name = name;
    newUser.email = email;
    newUser.password = hashedPassword
    newUser.role = role

    await userRepository.save(newUser);
    
    // Generate token
    const token:string = generateToken(newUser.id);
    return { user: newUser, token }
}

export const loginUSer = async (data: UserInterface) => {
    const userRepository = AppDataSource.getRepository(User);

    const { email, password } = data
    // find By email
    const user = await userRepository.findOneBy({ email });

    if (!user) throw new Error("User Not found");

    // check password
    const isPassword = await bcrypt.compare(password, user.password)
    if (!isPassword) throw new Error("Invliad credentials");

    const token = generateToken(user.id)
    return { user, token }
}