import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Create the Apollo Client instance
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:5000/graphql', // Replace with your GraphQL server URL
  }),
  cache: new InMemoryCache(),
});

export default client;
