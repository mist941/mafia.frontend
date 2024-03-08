import {gql} from '@apollo/client';

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
                role
                status
                userId
                username
            }
        }
    }
`;

export const INVITE_PLAYER = gql`
    subscription InvitePlayersSubscription($userId: Float!) {
        invitePlayersSubscription(userId: $userId) {
            gameId
            playerIds
        }
  }
`;