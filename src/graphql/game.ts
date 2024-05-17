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
                userId
                username
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
    subscription SyncGameSubscription($gameId: Float! $playerId: Float!) {
        syncGameSubscription(gameId: $gameId playerId: $playerId) {
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
                userId
                username
                ready
            }
            players {
                id
                role
                status
                userId
                username
                ready
            }
        }
    }
`;

export const ADD_NEW_PLAYER = gql`
    mutation AddNewPlayer($addNewPlayerInput: AddNewPlayerRequestDTO!){
        addNewPlayer(addNewPlayerInput: $addNewPlayerInput){
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
                userId
                ready
                username
            }
            players {
                id
                role
                status
                userId
                ready
                username
            }
        }
    }
`;

export const READY_TO_PLAY = gql`
    mutation ReadyToPlay($readyToPlayInput: ReadyToPlayRequestDTO!){
        readyToPlay(readyToPlayInput: $readyToPlayInput){
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
                userId
                ready
                username
            }
            players {
                id
                role
                status
                userId
                ready
                username
            }
        }
    }
`;