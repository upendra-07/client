import { gql } from "@apollo/client";

export const SIGN_IN_USER = gql`
  mutation UserSignIn($input: userSignInInput) {
    userSignIn(input: $input) {
      token
    }
  }
`;
