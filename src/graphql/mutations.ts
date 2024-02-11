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
    mutation CreateGame($createGameInput: CreateGameRequestDTO!){
        createGame(createGameInput: $createGameInput){
            game {
                id
                name
                numberOfPlayers
                ownerId
                currentPeriod
                currentRole
                private
                createdAt
            }
            player {
                id
                role
                status
            }
            players {
                id
                status
                userId
                username
            }
        }
    }
`;