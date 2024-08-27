import {gql} from "@apollo/client";

export interface CreateUserVariables {
    name: string
}

export interface CreateUserResponse {
    createUser: {
        user: {
            name: string,
            id: string
        }
    };
}


export const MUTATION_CREATE_USER = gql`
mutation CreateUser($name: String!) {
    createUser(input: { user: { name: $name } }) {
        user {
            name
            id
        }
    }
}
`