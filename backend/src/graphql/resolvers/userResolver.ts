import AppDataSource from "../../database/config.ts";
import { User } from "../entities/userEntity.ts";

export const userResolver = {
  Query: {
    hello: () => 'Hello, World!',
    allUser: async()=> {
        try {
          const result:any = await AppDataSource.getRepository(User).find();
          if (!result) {
            throw new Error("No users found");
          }
          return result 
        } catch (error) {
          console.error(error)
          throw new Error("Error in fetching all users");
          ;
        }
    },
    getUserById: async(id:string | number)=> {
        try {
          const result:any = await AppDataSource.getRepository(User).findOneBy({id});
          if (!result) {
            throw new Error("No users found");
          }
          return result 
        } catch (error) {
          console.error(error)
          throw new Error("Error in fetching all users");
          ;
        }
    },
    getAllData: async(_: any, { id }: { id: string })=> {
        try {          
          const allUser:any = await AppDataSource.getRepository(User).find();
          const result:any = await AppDataSource.getRepository(User).findOneBy({id});
          if (!result && !allUser) {
            throw new Error("No users found");
          }
          return {
            allUser,
            getUserById: result
          }
        } catch (error) {
          console.error(error)
          throw new Error("Error in fetching all users");
        }
    }
  },
  Mutation : {
    createUser : async (_:any, {name, email, password}:{name:string, email: string, password:string}) => {
      const userRepo = AppDataSource.getRepository("User");
      const newUser = userRepo.create({name, email, password});
      await userRepo.save(newUser);
      return newUser;
    }
  },
};