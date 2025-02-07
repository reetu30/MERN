import { contact } from "../../Contact/service/contact.service.ts";
import { loginUSer, registerUser } from "../../User/service/User.service.ts";
import AppDataSource from "../../database/config.ts";
import { User } from "../../models/User.ts";

export const userResolver = {
  Query: {
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
    getUserByEmail: async(id:string | number)=> {
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
      const data:any = {name, email, password, role:"user"}
      const result = await registerUser(data);
      return result;
    },
    loginUSer: async(_:any, {email, password}: {email: string, password:string}) => {
      const result:any = {email, password, role:"user"}
      return await loginUSer(result)
    },
    createContact : async(_:any, {email, subject, message}: {email:String, subject:String, message:String}) => {
      const data:any = {email, subject, message}
      const result = await contact(data);
      return result;
    }
  },
};