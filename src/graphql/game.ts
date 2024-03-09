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

export const INVITE_PLAYERS = gql`
    mutation InvitePlayers($invitePlayersInput: InvitePlayersRequestDTO!){
        invitePlayers(invitePlayersInput: $invitePlayersInput){
            gameId
            userIds
            gameName
        }
    }
`;

export const INVITE_PLAYERS_SUBSCRIPTION = gql`
    subscription InvitePlayersSubscription($userId: Float!) {
        invitePlayersSubscription(userId: $userId) {
            gameId
            gameName
        }
  }
`;

export const SYNC_GAME_SUBSCRIPTION = gql`
    subscription SyncGameSubscription($gameId: Float!) {
        syncGameSubscription(userId: $userId) {
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