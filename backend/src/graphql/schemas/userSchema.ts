import { gql } from 'apollo-server-express';

export const userSchema =  gql`
    type User {
        id: ID!
        name: String!
        email: String!
        password : String!
    }
    type Query {
        hello: String
        allUser: [User]
        users : [User]
        getUserById(id: ID!) : User
        getAllData(id: ID!) : UserResponse
    }
    type Mutation {
        createUser(name: String!, email: String!, password: String!): User
        loginUSer (email: String!, password: String!): User
    }
    type UserResponse {
        allUser: [User]
        getUserById: User
    }
    `;