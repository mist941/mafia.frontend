import {gql} from '@apollo/client';

export const CREATE_GAME = gql`
    mutation CreateGame($createGameInput: CreateGameRequestDTO!){
        createGame(createGameInput: $createGameInput){
            game {
                id
                step
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
                madeAction
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
                step
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
                madeAction
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

export const ADD_NEW_PLAYER = gql`
    mutation AddNewPlayer($addNewPlayerInput: AddNewPlayerRequestDTO!){
        addNewPlayer(addNewPlayerInput: $addNewPlayerInput){
            game {
                id
                step
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
                madeAction
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

export const READY_TO_PLAY = gql`
    mutation ReadyToPlay($readyToPlayInput: ReadyToPlayRequestDTO!){
        readyToPlay(readyToPlayInput: $readyToPlayInput){
            game {
                id
                step
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
                madeAction
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

export const CREATE_ACTION = gql`
    mutation ReadyToPlay($createActionInput: CreateActionRequestDTO!){
        createAction(createActionInput: $createActionInput){
            game {
                id
                step
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
                madeAction
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

export const GET_GAME_DATA = gql`
    query GetGameData($getGameDataInput: GetGameDataRequestDTO!){
        getGameData(getGameDataInput: $getGameDataInput){
            game {
                id
                step
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
                madeAction
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