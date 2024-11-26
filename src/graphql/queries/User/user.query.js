import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers {
    users {
      userName
      email
      phone
    }
  }
`;

export const USER_AUTH = gql`
  query UserAuthenticated($token: String) {
    userAuthenticated(token: $token) {
      isAuthenticated
    }
  }
`;
