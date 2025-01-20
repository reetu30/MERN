import { ApolloServer } from 'apollo-server-express';
import { userSchema } from '../graphql/schemas/userSchema.ts';
import { userResolver } from '../graphql/resolvers/userResolver.ts';
import { verifyToken } from '../utils/jwtUtils.ts'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';

// Set up Apollo Server with schema and resolvers
export const apolloServer = new ApolloServer({
  typeDefs: userSchema,
  resolvers: userResolver,
  // plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  context : ({req}) => {
    const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>
    console.log(token, "===>token");
    
    if (token) {
      try {
        const decode:any = verifyToken(token);
        return {id: decode.id}
      } catch (error) {
        console.error("Invalid or expired token", error);
      }
    }
  },
  
});