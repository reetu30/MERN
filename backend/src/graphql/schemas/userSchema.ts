import { gql } from 'apollo-server-express';

export const userSchema =  gql`
    type User {
        id: ID!
        name: String!
        email: String!
        password : String!
    }
    type AuthResponse {
        token: String!,
        user: User
    }
    type Query {
        allUser: [User]
        users : [User]
        getUserById(id: ID!) : User
        getAllData(id: ID!) : UserResponse
    }
    type Mutation {
        createUser(name: String!, email: String!, password: String!): AuthResponse
        loginUSer (email: String!, password: String!): AuthResponse
    }
    type UserResponse {
        allUser: [User]
        getUserById: User
    }
    `;