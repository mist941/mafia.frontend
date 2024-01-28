import {gql} from '@apollo/client';

export const SIGN_UP = gql`
  mutation SignUp($signupInput: SignupRequestDTO!) {
      signup(signupInput: $signupInput) {
        accessToken
        refreshToken
        user {
          id
          username
          email
      }
    }
  }
`;

export const SIGN_IN = gql`
  mutation SignIn($signinInput: SigninRequestDTO!) {
    signin(signinInput: $signinInput) {
      accessToken
      refreshToken
      user {
        id
        username
        email
      }
    }
  }
`;

export const CREATE_GAME = gql`
  mutation CreateGame($createGameInput: CreateGameRequestDTO!) {
    createGame(createGameInput: $createGameInput) {
      id
    }
  }
`;