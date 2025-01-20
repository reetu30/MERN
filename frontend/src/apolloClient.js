// src/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

// Create an HTTP link that will point to your GraphQL server endpoint
const httpLink = new HttpLink({
  uri: 'http://localhost:5000/graphql',
});

// Create an Apollo Client instance
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
