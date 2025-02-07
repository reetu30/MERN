import { gql } from 'apollo-server-express';

export const userSchema =  gql`
    type User {
        id: ID!
        name: String!
        email: String!
        password : String!
        role: String!
    }
    type Contact {
        id: ID!
        email: String!
        subject: String!
        message: String!
    }
    type AuthResponse {
        token: String!,
        user: User
    }
    type Query {
        allUser: [User]
        users : [User]
        getUserById(id: ID!) : User
        getUserByEmail(email: String!) : User
        getAllData(id: ID!) : UserResponse
    }
    type Mutation {
        createUser(name: String!, email: String!, password: String!): AuthResponse
        loginUSer (email: String!, password: String!): AuthResponse
        createContact(email: String!, subject: String!, message: String!): Contact
    }
    type UserResponse {
        allUser: [User]
        getUserById: User
    }
    `;