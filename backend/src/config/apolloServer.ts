import { ApolloServer } from 'apollo-server-express';
import { userSchema } from '../graphql/schemas/userSchema.ts';
import { userResolver } from '../graphql/resolvers/userResolver.ts';

// Set up Apollo Server with schema and resolvers
export const apolloServer = new ApolloServer({
  typeDefs: userSchema,
  resolvers: userResolver,
});