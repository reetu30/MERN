import express from 'express';
import bodyParser from 'body-parser';
import { config as configDotenv } from 'dotenv';
// import itemRoutes from './src/routes/routes.ts';
import { ApolloServer } from 'apollo-server-express';
import { apolloServer } from './src/config/apolloServer.ts';
import AppDataSource from './src/database/config.ts';
import cors from 'cors';

configDotenv();
const app:any = express();
app.use('/grpahql', cors<cors.CorsRequest>, express.json(), bodyParser.json());
// app.use('/api/items', itemRoutes);
await apolloServer.start()

AppDataSource.initialize()
.then(() => {
  console.log('TypeORM has connected to the database!');
})
.catch((error:any) => {
  console.error('Error during TypeORM initialization:', error);
});

apolloServer.applyMiddleware({ app });
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT} and GraphQL server is running on http://localhost:${apolloServer.graphqlPath}`); 
});
