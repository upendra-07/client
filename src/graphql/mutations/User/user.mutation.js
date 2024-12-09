import { gql } from "@apollo/client";

export const SIGN_IN_USER = gql`
  mutation UserSignIn($input: userSignInInput) {
    userSignIn(input: $input) {
      token
    }
  }
`;

export const SIGN_UP_USER = gql`
  mutation CreateUser($input: userSignUpInput) {
    createUser(input: $input) {
      fullName
    }
  }
`;
